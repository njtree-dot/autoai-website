
import React, { useState } from 'react';
import { generateAutomationPlan } from '../services/geminiService';
import { AutomationResponse, AutomationSuggestion } from '../types';

const GeminiDemo: React.FC = () => {
  const [industry, setIndustry] = useState('');
  const [painPoint, setPainPoint] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AutomationResponse | null>(null);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!industry || !painPoint) {
      alert('업종과 고민을 입력해주세요!');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const data = await generateAutomationPlan(industry, painPoint);
      setResult(data);
    } catch (err) {
      setError('AI 분석 중 오류가 발생했습니다. 다시 시도해 주세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 p-8 md:p-12 rounded-[40px] border-2 border-blue-100 shadow-2xl">
      <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
        <div>
          <label className="block text-sm font-black text-slate-700 mb-2">어떤 일을 하시나요?</label>
          <input 
            type="text" 
            placeholder="예: 이커머스 쇼핑몰 운영, 학원 마케터"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-100 transition"
          />
        </div>
        <div>
          <label className="block text-sm font-black text-slate-700 mb-2">가장 힘든 업무는 무엇인가요?</label>
          <input 
            type="text" 
            placeholder="예: 고객 문의 응대, 인스타그램 콘텐츠 제작"
            value={painPoint}
            onChange={(e) => setPainPoint(e.target.value)}
            className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-100 transition"
          />
        </div>
      </div>

      <button 
        onClick={handleGenerate}
        disabled={loading}
        className={`w-full py-5 rounded-2xl font-black text-xl text-white transition shadow-lg ${loading ? 'bg-slate-400 cursor-not-allowed' : 'bg-slate-900 hover:bg-black active:scale-[0.98]'}`}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            AI가 최적의 시나리오를 설계하고 있습니다...
          </span>
        ) : '맞춤형 자동화 시나리오 보기'}
      </button>

      {error && <p className="mt-4 text-red-500 font-bold">{error}</p>}

      {result && (
        <div className="mt-12 space-y-6 text-left animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">✨</div>
            <h3 className="text-2xl font-black">추천 자동화 플랜</h3>
          </div>
          <div className="grid gap-6">
            {result.suggestions.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-blue-50 shadow-sm">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h4 className="text-xl font-bold text-blue-600">{item.title}</h4>
                  <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-sm font-black">
                    {item.impact}
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiDemo;
