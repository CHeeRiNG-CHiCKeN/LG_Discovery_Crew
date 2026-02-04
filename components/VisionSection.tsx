
import React, { useEffect } from 'react';

// TypeScript에서 window.confetti를 인식할 수 있도록 타입 선언
declare global {
  interface Window {
    confetti: any;
  }
}

export const VisionSection: React.FC = () => {
  useEffect(() => {
    // 컴포넌트 마운트 시 confetti 라이브러리 CDN 로드
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // 컴포넌트 언마운트 시 스크립트 제거
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleContactClick = () => {
    // 라이브러리가 로드되었는지 확인
    if (typeof window.confetti !== 'function') {
      console.warn("Confetti library is not loaded yet.");
      return;
    }

    // 풍선이 둥둥 떠오르는 느낌의 컨페티 설정 (3초간 지속)
    const end = Date.now() + 3 * 1000;
    const colors = ['#A50034', '#ffffff', '#FFC1CC', '#8B002B'];

    const frame = () => {
      window.confetti({
        particleCount: 2,
        angle: 90,
        spread: 80,
        origin: { x: 0.5, y: 1.1 }, // 화면 아래(1.0보다 큰 값)에서 시작
        colors: colors,
        shapes: ['circle'],
        gravity: 0.4, // 중력을 낮춰서 천천히 올라가는/떠다니는 느낌
        drift: 0.2, // 약간의 횡풍 효과
        ticks: 300,
        startVelocity: 45,
        scalar: 1.2 // 입자 크기 확대
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
    
    console.log("Thank you for your interest! We'll be in touch.");
  };

  return (
    <section id="vision" className="py-24 md:py-40 px-6 bg-white flex flex-col items-center justify-center text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto space-y-12 relative z-10">
        {/* Quotation Icon */}
        <div className="mb-8">
            <svg className="w-16 h-16 text-lgRed/10 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L20.017 3C21.1216 3 22.017 3.89543 22.017 5V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3.01697 21L3.01697 18C3.01697 16.8954 3.9124 16 5.01697 16H8.01697C8.56925 16 9.01697 15.5523 9.01697 15V9C9.01697 8.44772 8.56925 8 8.01697 8H5.01697C3.9124 8 3.01697 7.10457 3.01697 6V3L9.01697 3C10.1215 3 11.017 3.89543 11.017 5V15C11.017 18.3137 8.33066 21 5.01697 21H3.01697Z" />
            </svg>
        </div>

        <div className="space-y-6">
            <h2 className="text-lgRed font-bold text-sm tracking-widest uppercase">Vision</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                경쟁의 도구가 아닌,<br />상상력의 도구로.
            </h3>
        </div>
        
        <p className="text-lg md:text-xl text-lgGray leading-relaxed max-w-2xl mx-auto">
            과거의 제가 작은 체험으로 진로를 찾았듯,<br />
            이제는 <span className="text-black font-semibold">LG 디스커버리랩의 크루</span>로서 아이들에게 가능성의 씨앗을 심어주겠습니다. 기술 너머의 사람을 보는 저의 렌즈가 아이들의 미래를 밝히는 빛이 되길 희망합니다.
        </p>

        <div className="pt-8">
            <button 
              onClick={handleContactClick}
              className="bg-lgRed text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl hover:bg-[#8B002B] transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
            >
                Contact Me
            </button>
        </div>
      </div>
      
      {/* Visual motif */}
      <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-gray-100 m-12"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-gray-100 m-12"></div>
    </section>
  );
};
