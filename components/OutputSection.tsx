
import React, { useState } from 'react';

export const OutputSection: React.FC = () => {
  // 현재 호버 중인 카드의 인덱스를 관리 (null, 1, 또는 2)
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // 각 카드에 매칭될 오버레이 이미지 URL
  const overlayImage1 = "images/LG_DiscoveryLab.png"; // 관찰/멘토링 테마
  const overlayImage2 = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"; // 데이터/분석 테마

  return (
    <section id="output" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-lgRed font-bold text-sm tracking-widest uppercase mb-4">Section 03</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-black">나눔과 실천: Output</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div 
            className="group border border-gray-100 p-8 md:p-12 transition-all duration-300 bg-white shadow-sm hover:shadow-xl relative overflow-hidden cursor-default"
            onMouseEnter={() => setActiveCard(1)}
            onMouseLeave={() => setActiveCard(null)}
          >
             {/* Cross-Hover Overlay for Card 1 (Appears when Card 2 is hovered) */}
             <div className={`absolute inset-0 z-20 transition-opacity duration-500 pointer-events-none ${activeCard === 2 ? 'opacity-100' : 'opacity-0'}`}>
                <img 
                  src={overlayImage1} 
                  alt="Observation Overlay" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-lgRed/40 mix-blend-multiply"></div>
             </div>

             {/* Original Content */}
             <div className="relative z-10">
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-lgRed opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="mb-6">
                    <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-lg mb-4 text-lgRed group-hover:bg-lgRed group-hover:text-white transition-colors duration-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-black mb-2">관찰과 역할 부여</h4>
                    <p className="text-lgRed font-semibold text-sm">Pearl Abyss Supporters</p>
                </div>
                <p className="text-lgGray leading-relaxed">
                초등학생 대상 게임 교육에서 아이들을 <span className="text-black font-bold">세심하게 관찰</span>하여 적합한 역할을 부여했습니다. 결과물보다 과정에 집중했고, 개개인의 특성을 반영한 멘토링을 통해 결국 <span className="text-black font-bold">대상을 수상</span>했습니다.
                </p>
             </div>
          </div>

          {/* Card 2 */}
          <div 
            className="group border border-gray-100 p-8 md:p-12 transition-all duration-300 bg-white shadow-sm hover:shadow-xl relative overflow-hidden cursor-default"
            onMouseEnter={() => setActiveCard(2)}
            onMouseLeave={() => setActiveCard(null)}
          >
             {/* Cross-Hover Overlay for Card 2 (Appears when Card 1 is hovered) */}
             <div className={`absolute inset-0 z-20 transition-opacity duration-500 pointer-events-none ${activeCard === 1 ? 'opacity-100' : 'opacity-0'}`}>
                <img 
                  src={overlayImage2} 
                  alt="Data Overlay" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-lgRed/40 mix-blend-multiply"></div>
             </div>

             {/* Original Content */}
             <div className="relative z-10">
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-lgRed opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="mb-6">
                    <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-lg mb-4 text-lgRed group-hover:bg-lgRed group-hover:text-white transition-colors duration-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-black mb-2">데이터 기반 맞춤형 제안</h4>
                    <p className="text-lgRed font-semibold text-sm">High School Mentoring</p>
                </div>
                <p className="text-lgGray leading-relaxed">
                생활기록부 <span className="text-black font-bold">데이터를 분석</span>해 맞춤형 탐구 주제를 제안했습니다. 학생 한 명 한 명을 섬세하게 분석하고 그들의 성장을 돕는 것이 저의 가장 큰 무기입니다. 학생의 니즈를 데이터로 파악하고 최적의 경로를 제시합니다.
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
