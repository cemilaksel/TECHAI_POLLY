import { GoogleGenAI, Type } from "@google/genai";

const FLASH_MODEL_NAME = 'gemini-3-flash-preview';

export const generateStudyCards = async (apiKey: string, targetWords: string[], targetLanguage: string = 'English') => {
  const ai = new GoogleGenAI({ apiKey });
  
  const schema = {
    type: Type.OBJECT,
    properties: {
      cards: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            word: { type: Type.STRING },
            synonym: { type: Type.STRING },
            phrase: { type: Type.STRING }
          },
          required: ["word", "synonym", "phrase"]
        }
      }
    },
    required: ["cards"]
  };

  const response = await ai.models.generateContent({
    model: FLASH_MODEL_NAME,
    contents: `Generate a language study guide for these ${targetLanguage} words: ${targetWords.join(', ')}. Provide a technical synonym or alternative and a technical practice phrase for each in ${targetLanguage}. Return strictly JSON.`,
    config: {
      responseMimeType: 'application/json',
      responseSchema: schema
    }
  });

  return response.text;
};