
import React from 'react';

const FeatureCard: React.FC<{ icon: string, title: string, desc: string, color: string }> = ({ icon, title, desc, color }) => (
  <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100 hover:-translate-y-2 transition duration-300">
    <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center text-3xl mb-8`}>
      {icon}
    </div>
    <h3 className="text-2xl font-black mb-4">{title}</h3>
    <p className="text-slate-600 leading-relaxed text-lg">{desc}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-6">성장을 가속화하는 핵심 기능</h2>
          <p className="text-xl text-slate-600">현장의 목소리를 담아 꼭 필요한 기능만 골라 담았습니다.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon="🖱️"
            title="직관적인 No-Code 빌더"
            desc="드래그 앤 드롭만으로 복잡한 AI 로직을 설계하세요. 코딩 지식이 전혀 없어도 누구나 30분 만에 자동화 프로세스를 만들 수 있습니다."
            color="bg-blue-100 text-blue-600"
          />
          <FeatureCard 
            icon="📣"
            title="마케팅 퍼포먼스 자동화"
            desc="콘텐츠 제작부터 타겟 광고 최적화까지 AI가 전담합니다. 마케터는 전략에 집중하고, 단순 배포 업무는 AutoAI에게 맡기세요."
            color="bg-purple-100 text-purple-600"
          />
          <FeatureCard 
            icon="📊"
            title="CEO 전용 인사이트 대시보드"
            desc="자동화로 절감된 비용과 시간을 실시간으로 확인하세요. 데이터 기반의 정확한 의사결정을 돕는 비즈니스 ROI를 한눈에 보여드립니다."
            color="bg-emerald-100 text-emerald-600"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
