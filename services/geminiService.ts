
import { GoogleGenAI, Type } from "@google/genai";
import { AutomationResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateAutomationPlan = async (industry: string, painPoint: string): Promise<AutomationResponse> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `당신은 AI 자동화 컨설턴트입니다. 다음 업종과 고민을 가진 중소기업 CEO/마케터에게 코딩 없이 구현 가능한 AI 자동화 시나리오 3가지를 제안해주세요.
    업종: ${industry}
    고민: ${painPoint}
    응답은 반드시 JSON 형식이어야 합니다.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          suggestions: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING, description: "자동화 시나리오 제목" },
                description: { type: Type.STRING, description: "작동 원리 및 상세 설명" },
                impact: { type: Type.STRING, description: "예상되는 비즈니스 효과 (예: 업무시간 50% 단축)" }
              },
              required: ["title", "description", "impact"]
            }
          }
        },
        required: ["suggestions"]
      }
    }
  });

  const text = response.text;
  try {
    return JSON.parse(text);
  } catch (error) {
    console.error("JSON Parsing Error:", error);
    throw new Error("응답을 파싱하는 중 오류가 발생했습니다.");
  }
};
