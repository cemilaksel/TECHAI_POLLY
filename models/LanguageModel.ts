export interface Language {
  code: string;
  name: string;
  flag: string;
}

export const SUPPORTED_LANGUAGES: Language[] = [
  { code: 'EN', name: 'English', flag: '🇬🇧' },
  { code: 'TR', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'RO', name: 'Română', flag: '🇷🇴' },
  { code: 'DE', name: 'Deutsch', flag: '🇩🇪' },
];

export const getLanguageByCode = (code: string) => 
  SUPPORTED_LANGUAGES.find(l => l.code === code) || SUPPORTED_LANGUAGES[0];

export const getSystemInstruction = (sourceLangCode: string, targetLangCode: string): string => {
  const source = getLanguageByCode(sourceLangCode);
  const target = getLanguageByCode(targetLangCode);
  
  return `You are a professional real-time technical interpreter. 
Your task is to provide seamless simultaneous translation between ${source.name} (${source.code}) and ${target.name} (${target.code}).

Rules:
1. If you hear ${source.name}, translate it immediately to ${target.name}.
2. If you hear ${target.name}, translate it immediately to ${source.name}.
3. Maintain technical accuracy and context.
4. Do not add conversational filler; act as a bridge between the two languages.
5. Use a clear, professional tone for the output audio.`;
};