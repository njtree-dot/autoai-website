
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black">A</div>
              <span className="text-xl font-black tracking-tighter text-white">AutoAI</span>
            </div>
            <p className="max-w-xs leading-relaxed">
              중소기업의 성장을 위해 AI 자동화의 문턱을 낮춥니다.<br />
              코딩 없는 비즈니스 혁신, AutoAI가 함께합니다.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">서비스</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition">주요 기능</a></li>
              <li><a href="#" className="hover:text-white transition">성공 사례</a></li>
              <li><a href="#" className="hover:text-white transition">요금제 안내</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">고객 지원</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition">문의하기</a></li>
              <li><a href="#" className="hover:text-white transition">커뮤니티</a></li>
              <li><a href="#" className="hover:text-white transition">개인정보처리방침</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between gap-4">
          <p>© 2024 AutoAI Inc. All rights reserved.</p>
          <p>서울특별시 강남구 테헤란로 (주)오토에이아이</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
