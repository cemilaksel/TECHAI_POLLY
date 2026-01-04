import { useRef, useState, useCallback } from 'react';
import { initialTranslationState, detectLanguage } from '../models/TranslationModel';
import { ConversationPair, ConnectionStatus } from '../types';

export const useTranslationController = (onWordDetected: any) => {
  const [status, setStatus] = useState<ConnectionStatus>('disconnected');
  const [history, setHistory] = useState<ConversationPair[]>(initialTranslationState.history);
  const [currentInputText, setCurrentInputText] = useState('');
  const [currentOutputText, setCurrentOutputText] = useState('');
  
  const inputBufferRef = useRef('');
  const outputBufferRef = useRef('');
  const sessionRef = useRef<any>(null);

  const commitToHistory = useCallback((sourceLang: string, targetLang: string) => {
    if (!inputBufferRef.current.trim() && !outputBufferRef.current.trim()) return;

    // Detect if input is actually source or target for cleaner labeling
    const detected = detectLanguage(inputBufferRef.current);
    
    // Simplification: the "Speaker" is the one who triggered input
    // The "Interpreter" provides the other language
    const inLang: any = detected; 
    const outLang: any = detected === sourceLang ? targetLang : sourceLang;

    onWordDetected(inputBufferRef.current, inLang);
    onWordDetected(outputBufferRef.current, outLang);

    const newPair: ConversationPair = {
      id: Date.now().toString(),
      input: {
        id: `in-${Date.now()}`,
        text: inputBufferRef.current.trim() || "(Speech detected)",
        isFinal: true,
        language: inLang,
        type: 'input',
        timestamp: Date.now()
      },
      output: {
        id: `out-${Date.now()}`,
        text: outputBufferRef.current.trim(),
        isFinal: true,
        language: outLang,
        type: 'output',
        timestamp: Date.now()
      }
    };

    setHistory(prev => [...prev, newPair]);
    inputBufferRef.current = '';
    outputBufferRef.current = '';
    setCurrentInputText('');
    setCurrentOutputText('');
  }, [onWordDetected]);

  return {
    status,
    setStatus,
    history,
    setHistory,
    currentInputText,
    setCurrentInputText,
    currentOutputText,
    setCurrentOutputText,
    inputBufferRef,
    outputBufferRef,
    sessionRef,
    commitToHistory
  };
};