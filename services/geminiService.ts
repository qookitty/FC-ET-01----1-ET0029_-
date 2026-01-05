
import { GoogleGenAI } from "@google/genai";

// Initialize the GoogleGenAI client with the API key from environment variables.
// Following @google/genai guidelines for direct API key usage.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getMaintenanceAnalysis = async (reportData: string) => {
  try {
    // Using ai.models.generateContent directly with model name as per coding guidelines.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a senior industrial maintenance consultant. Analyze this equipment report and provide a brief (2-3 bullet points) professional summary of the risks, quality of the fix, and future recommendations.

      Report Data:
      ${reportData}

      Response must be in Traditional Chinese (Taiwan).`,
      config: {
        temperature: 0.7,
      }
    });
    // Accessing the .text property directly (not a method call) as per GenerateContentResponse guidelines.
    return response.text;
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    return "無法生成 AI 分析建議。請手動檢核報告內容。";
  }
};
