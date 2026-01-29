
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-2xl">A</div>
          <span className="text-xl font-black tracking-tighter">AutoAI</span>
        </div>
        <nav className="hidden md:flex gap-10 font-bold text-slate-600">
          <a href="#features" className="hover:text-blue-600 transition">주요 기능</a>
          <a href="#demo" className="hover:text-blue-600 transition">AI 추천</a>
          <a href="#" className="hover:text-blue-600 transition">요금제</a>
        </nav>
        <button className="bg-slate-900 text-white px-6 py-3 rounded-full font-bold hover:bg-slate-800 transition">
          무료 데모 신청
        </button>
      </div>
    </header>
  );
};

export default Header;
