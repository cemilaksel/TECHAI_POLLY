import { useState, useMemo, useEffect } from 'react';
import { ESSENTIAL_WORDS } from '../data/essentialWords_en';
import { ESSENTIAL_WORDS_RO } from '../data/essentialWords_ro';
import { ESSENTIAL_WORDS_DE } from '../data/essentialWords_de';
import * as ApiKeyModel from '../models/ApiKeyModel';
import * as geminiService from '../services/geminiService';

export interface StudyCard {
  word: string;
  synonym: string;
  phrase: string;
  isEssential?: boolean;
}

export type StudyLanguage = 'EN' | 'RO' | 'DE';

export const useStudyGuide = () => {
  const [currentLanguage, setCurrentLanguage] = useState<StudyLanguage>('EN');

  const activeEssentialList = useMemo(() => {
    switch (currentLanguage) {
      case 'RO': return ESSENTIAL_WORDS_RO;
      case 'DE': return ESSENTIAL_WORDS_DE;
      default: return ESSENTIAL_WORDS;
    }
  }, [currentLanguage]);

  // Stats are stored per language: { EN: { word: count }, RO: { word: count }, DE: { word: count } }
  const [allWordStats, setAllWordStats] = useState<Record<string, Record<string, number>>>(() => {
    try {
      const saved = localStorage.getItem('techInterpreter_allWordStats');
      return saved ? JSON.parse(saved) : { EN: {}, RO: {}, DE: {} };
    } catch (e) { return { EN: {}, RO: {}, DE: {} }; }
  });

  // Study guides are stored per language
  const [allStudyGuides, setAllStudyGuides] = useState<Record<string, Record<string, StudyCard>>>(() => {
    try {
      const saved = localStorage.getItem('techInterpreter_allStudyGuides');
      return saved ? JSON.parse(saved) : { EN: {}, RO: {}, DE: {} };
    } catch (e) { return { EN: {}, RO: {}, DE: {} }; }
  });

  const [isGeneratingGuide, setIsGeneratingGuide] = useState(false);

  // Derived state for the active language
  const wordStats = useMemo(() => allWordStats[currentLanguage] || {}, [allWordStats, currentLanguage]);
  const studyGuide = useMemo(() => allStudyGuides[currentLanguage] || {}, [allStudyGuides, currentLanguage]);

  const essentialMatches = useMemo(() => {
    return Object.keys(wordStats).filter(word => activeEssentialList.includes(word.toLowerCase()));
  }, [wordStats, activeEssentialList]);

  const updateWordStats = (text: string, language: string) => {
    const lang = language as StudyLanguage;
    if (lang !== 'EN' && lang !== 'RO' && lang !== 'DE') return; 
    
    const normalized = text.toLowerCase();
    // Support Romanian and German characters in the regex
    const words = normalized.match(/[a-zăâîșțäöüß']+/gu);
    if (words) {
      setAllWordStats(prev => {
        const next = { ...prev };
        if (!next[lang]) next[lang] = {};
        const langStats = { ...next[lang] };
        
        words.forEach(word => {
          if (word.length > 1 || word === 'i' || word === 'a') {
            langStats[word] = (langStats[word] || 0) + 1;
          }
        });
        
        next[lang] = langStats;
        localStorage.setItem('techInterpreter_allWordStats', JSON.stringify(next));
        return next;
      });
    }
  };

  const generateStudyGuide = async () => {
    const key = ApiKeyModel.getApiKey();
    if (!key) {
      alert("Please set your API key in settings first.");
      return;
    }

    const essentialToGenerate = essentialMatches.filter(word => !studyGuide[word]).slice(0, 10);
    const topWords = Object.entries(wordStats)
      .sort((a, b) => (b[1] as number) - (a[1] as number))
      .map(([word]) => word)
      .filter(word => !essentialToGenerate.includes(word) && !studyGuide[word])
      .slice(0, 20 - essentialToGenerate.length);

    const targetList = [...essentialToGenerate, ...topWords];
    if (targetList.length === 0) {
        alert("No new words to generate guides for yet!");
        return;
    }

    setIsGeneratingGuide(true);
    try {
      const languageMap: Record<StudyLanguage, string> = {
        'EN': 'English',
        'RO': 'Romanian',
        'DE': 'German'
      };
      const jsonText = await geminiService.generateStudyCards(key, targetList, languageMap[currentLanguage]);
      if (jsonText) {
        const data = JSON.parse(jsonText);
        if (data.cards) {
          setAllStudyGuides(prev => {
            const next = { ...prev };
            const langGuide = { ...(next[currentLanguage] || {}) };
            
            data.cards.forEach((card: any) => {
              langGuide[card.word] = { 
                ...card, 
                isEssential: activeEssentialList.includes(card.word.toLowerCase()) 
              };
            });
            
            next[currentLanguage] = langGuide;
            localStorage.setItem('techInterpreter_allStudyGuides', JSON.stringify(next));
            return next;
          });
        }
      }
    } catch (e) {
      console.error(e);
      alert("Failed to generate guide.");
    } finally {
      setIsGeneratingGuide(false);
    }
  };

  const exportGuideAsText = () => {
    const sortedWords = Object.entries(wordStats).sort((a, b) => b[1] - a[1]).map(([word]) => word);
    if (sortedWords.length === 0) return;
    let content = `${currentLanguage} STUDY GUIDE\n===========\n\n`;
    sortedWords.forEach((word) => {
      const guide = studyGuide[word];
      content += `${word.toUpperCase()} (Used ${wordStats[word]}x)\n`;
      if (guide) content += `   Synonym: ${guide.synonym}\n   Phrase: ${guide.phrase}\n`;
      content += "---\n";
    });
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `StudyGuide_${currentLanguage}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const clearStats = () => {
    if (confirm(`Clear all ${currentLanguage} stats?`)) {
      setAllWordStats(prev => {
        const next = { ...prev, [currentLanguage]: {} };
        localStorage.setItem('techInterpreter_allWordStats', JSON.stringify(next));
        return next;
      });
      setAllStudyGuides(prev => {
        const next = { ...prev, [currentLanguage]: {} };
        localStorage.setItem('techInterpreter_allStudyGuides', JSON.stringify(next));
        return next;
      });
    }
  };

  return { 
    wordStats, 
    studyGuide, 
    isGeneratingGuide, 
    updateWordStats, 
    generateStudyGuide, 
    exportGuideAsText, 
    clearStats,
    currentLanguage,
    setCurrentLanguage,
    essentialList: activeEssentialList
  };
};
