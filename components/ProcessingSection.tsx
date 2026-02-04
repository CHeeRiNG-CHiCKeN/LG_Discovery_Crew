
import React, { useState } from 'react';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full aspect-[4/3] group overflow-hidden rounded-xl shadow-lg border border-gray-100 bg-gray-200">
      {/* Images */}
      <div 
        className="w-full h-full flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((url, index) => (
          <img 
            key={index} 
            src={url} 
            alt={`Slide ${index}`} 
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100 z-20"
      >
        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100 z-20"
      >
        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <div 
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? 'bg-lgRed w-4' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export const ProcessingSection: React.FC = () => {
  const imagesCard1 = [
    "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1525373612132-b3e82091c18a?auto=format&fit=crop&q=80&w=800"
  ];

  const imagesCard2 = [
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <section id="processing" className="py-24 md:py-32 px-6 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-lgRed font-bold text-sm tracking-widest uppercase mb-4">Section 02</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-black">성장과 확장: Processing</h3>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-lgGray/30 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-24 md:space-y-32">
            {/* Card 1: Text Left, Slider Right */}
            <div className="relative flex flex-col md:flex-row items-center group">
              <div className="md:w-1/2 md:pr-16 md:text-right mb-10 md:mb-0 order-1">
                <div className="inline-block md:hidden mb-4 px-3 py-1 bg-lgRed/10 text-lgRed rounded-full text-xs font-bold uppercase">Experience 01</div>
                <h4 className="text-2xl font-bold mb-4 text-black">스스로 구현한 '눈'</h4>
                <p className="text-lgGray leading-relaxed text-lg">
                  단순히 코드를 따라 치는 학습을 넘어, 파이썬으로 객체 인식 기술을 직접 구현하며 확신을 얻었습니다. 기술 자체보다 <span className="text-black font-semibold">'어떻게 경험하느냐'</span>가 중요하다는 것을 깨달았습니다.
                </p>
              </div>
              
              {/* Timeline Center Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-lgRed border-4 border-white shadow-sm z-10 -translate-x-1/2 hidden md:block"></div>
              
              <div className="w-full md:w-1/2 order-2 md:pl-16">
                <ImageSlider images={imagesCard1} />
              </div>
            </div>

            {/* Card 2: Slider Left, Text Right */}
            <div className="relative flex flex-col md:flex-row items-center group">
              <div className="w-full md:w-1/2 mb-10 md:mb-0 order-2 md:order-1 md:pr-16">
                <ImageSlider images={imagesCard2} />
              </div>
              
              {/* Timeline Center Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-lgRed border-4 border-white shadow-sm z-10 -translate-x-1/2 hidden md:block"></div>
              
              <div className="md:w-1/2 md:pl-16 order-1 md:order-2">
                <div className="inline-block md:hidden mb-4 px-3 py-1 bg-lgRed/10 text-lgRed rounded-full text-xs font-bold uppercase">Experience 02</div>
                <h4 className="text-2xl font-bold mb-4 text-black">현장과의 연결 (Global Insight)</h4>
                <p className="text-lgGray leading-relaxed text-lg">
                  독일의 <span className="text-black font-semibold">아우디, 지멘스</span> 스마트 팩토리 현장에서 4년 전의 체험이 현실 산업과 연결되는 전율을 느꼈습니다. 체험 중심 학습이 진로에 미치는 거대한 영향력을 재확인했습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
