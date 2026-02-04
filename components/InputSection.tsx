
import React from 'react';

export const InputSection: React.FC = () => {
  return (
    <section id="input" className="py-24 md:py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 relative group w-full">
          {/* Bounding Box Image */}
          <div className="relative overflow-hidden aspect-[4/3] rounded-sm bg-gray-50 border border-gray-100 shadow-xl transition-all duration-500 hover:shadow-2xl">
            <img 
              src="https://picsum.photos/800/600?grayscale" 
              alt="LG Discovery Lab Experience"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* AI Bounding Box Overlay */}
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 pointer-events-none transition-all duration-500 group-hover:scale-110">
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-lgRed"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-lgRed"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-lgRed"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-lgRed"></div>
              
              {/* Tag */}
              <div className="absolute -top-10 -left-4 bg-lgRed text-white text-[10px] px-2 py-0.5 font-bold uppercase tracking-widest shadow-lg">
                Inspiration: 98.7%
              </div>
            </div>

            {/* Scan Line Animation */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-lgRed/20 animate-scan-line pointer-events-none"></div>
          </div>
          
          {/* Decorative motif */}
          <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 border-8 border-gray-50 rounded-full"></div>
        </div>

        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <h2 className="text-lgRed font-bold text-sm tracking-widest uppercase">Section 01</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-black leading-tight">진로의 시작: Input</h3>
            <p className="text-lgGray font-medium">2022 LG Discovery Lab</p>
          </div>
          
          <div className="space-y-4 text-lgGray leading-relaxed text-lg">
            <p>
              제 꿈의 렌즈가 처음 열린 곳입니다. 고2 시절, <span className="text-black font-semibold">'스마트팩토리 양불판정'</span> 체험을 통해 교과서 밖의 AI를 만났습니다.
            </p>
            <p>
              카메라가 합격과 불합격을 가려내듯, 저 또한 막연했던 진로 속에서 '인공지능'이라는 명확한 목표를 발견했습니다. 기술이 단순히 편리함을 넘어 세상을 해석하는 도구가 될 수 있음을 깨달은 첫 번째 경험이었습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
