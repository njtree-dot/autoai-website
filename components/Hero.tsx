
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-bold mb-8">
          🚀 코딩 없는 AI 혁명의 시작
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
          코딩 한 줄 없이 완성하는<br />
          <span className="gradient-text">우리 회사 맞춤형 AI 자동화</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          복잡한 개발 과정은 잊으세요. 클릭 몇 번으로 반복적인 업무를 자동화하고, 
          CEO와 마케터는 오직 <strong>핵심 비즈니스 성장에만</strong> 집중하세요.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-10 py-5 rounded-full font-black text-xl hover:bg-blue-700 transition shadow-xl shadow-blue-200">
            지금 바로 무료로 시작하기
          </button>
          <button className="bg-white border-2 border-slate-200 text-slate-700 px-10 py-5 rounded-full font-black text-xl hover:bg-slate-50 transition">
            도입 문의하기
          </button>
        </div>
        
        <div className="mt-20 max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-8 border-white animate-float">
          <img 
            src="https://picsum.photos/seed/dashboard/1200/600" 
            alt="AutoAI Dashboard" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
