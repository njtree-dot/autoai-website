
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import GeminiDemo from './components/GeminiDemo';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        
        {/* Interactive Gemini Section */}
        <section id="demo" className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              우리 회사는 <span className="text-blue-600">어떤 자동화</span>가 가능할까요?
            </h2>
            <p className="text-lg text-slate-600 mb-12">
              업종과 현재 가장 고민되는 업무를 입력하시면, AI가 즉시 맞춤형 자동화 시나리오를 설계해 드립니다.
            </p>
            <GeminiDemo />
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-blue-600 py-20">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-black mb-8">
              지금 바로 AI 자동화의 <br className="md:hidden" /> 주인공이 되세요
            </h2>
            <p className="text-xl opacity-90 mb-10">
              이미 수많은 중소기업이 AutoAI를 통해 <br className="md:hidden" /> 비즈니스 효율을 극대화하고 있습니다.
            </p>
            <button className="bg-white text-blue-600 px-10 py-5 rounded-full font-black text-xl hover:bg-slate-100 transition shadow-2xl">
              지금 바로 무료로 시작하기
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
