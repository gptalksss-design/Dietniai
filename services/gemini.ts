
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export interface DietAnalysis {
  calories: number;
  macros: {
    p: number;
    c: number;
    f: number;
  };
  insight: string;
  response: string;
}

export async function analyzeMeal(input: string | { data: string, mimeType: string }): Promise<DietAnalysis> {
  const isImage = typeof input !== 'string';
  
  const prompt = `You are DietniAI, a helpful calorie tracking assistant.
  The user is sending a ${isImage ? 'photo of their meal' : 'text description of their meal/workout'}.
  Analyze it and provide:
  1. Estimated calorie count.
  2. Macros (Protein, Carbs, Fats) in grams.
  3. A friendly WhatsApp-style insight.
  4. A final response message.
  
  User input: ${isImage ? 'Analyzed via image' : input}`;

  const contents = isImage 
    ? { parts: [{ inlineData: input }, { text: prompt }] }
    : prompt;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          calories: { type: Type.NUMBER },
          macros: {
            type: Type.OBJECT,
            properties: {
              p: { type: Type.NUMBER, description: 'Protein' },
              c: { type: Type.NUMBER, description: 'Carbs' },
              f: { type: Type.NUMBER, description: 'Fats' },
            },
            required: ['p', 'c', 'f']
          },
          insight: { type: Type.STRING },
          response: { type: Type.STRING }
        },
        required: ['calories', 'macros', 'insight', 'response']
      }
    }
  });

  return JSON.parse(response.text);
}
