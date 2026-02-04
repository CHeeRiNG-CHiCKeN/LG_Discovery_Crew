
import React, { useState, useCallback } from 'react';

export const Hero: React.FC = () => {
  const [isFlashing, setIsFlashing] = useState(false);

  const handleCapture = useCallback(() => {
    // Play shutter sound
    const audio = new Audio("https://www.myinstants.com/instant/camera-shutter-181/embed/");
    audio.volume = 0.5;
    audio.play().catch(e => console.log("Audio playback blocked until user interaction."));

    // Trigger flash effect
    setIsFlashing(true);
    setTimeout(() => {
      setIsFlashing(false);
    }, 150);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-white">
      {/* Background with Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070" 
          alt="Future Tech Background" 
          className="w-full h-full object-cover opacity-[0.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-lgGray"></div>
            <div className="absolute top-0 left-1/2 h-full w-[1px] bg-lgGray"></div>
        </div>
      </div>

      <div className="relative z-10 text-center animate-fade-in max-w-5xl">
        {/* Viewfinder Graphic with center focus */}
        <div 
          onClick={handleCapture}
          className="relative w-72 h-72 md:w-96 md:h-96 mx-auto mb-16 flex items-center justify-center cursor-pointer group select-none"
        >
          {/* Background Image inside Viewfinder */}
          <div className="absolute inset-4 overflow-hidden rounded-sm border border-lgGray/10">
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000" 
              alt="Subject" 
              className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
            />
            {/* Subtle Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
            
            {/* Flash Effect Overlay */}
            <div className={`absolute inset-0 bg-white z-50 pointer-events-none transition-opacity duration-150 ${isFlashing ? 'opacity-100' : 'opacity-0'}`}></div>
          </div>

          {/* Corner Bounding Box - Visual motif for AI Observation */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-lgRed rounded-tl-lg transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-lgRed rounded-tr-lg transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-lgRed rounded-bl-lg transition-transform duration-300 group-hover:-translate-x-2 group-hover:translate-y-2"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-lgRed rounded-br-lg transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
          
          {/* Central Focus Point */}
          <div className="relative w-12 h-12 flex items-center justify-center z-20">
              <div className="w-1.5 h-1.5 bg-lgRed rounded-full animate-pulse shadow-[0_0_10px_#A50034]"></div>
              <div className="absolute inset-0 border border-lgRed/30 rounded-full animate-ping"></div>
          </div>
          
          {/* Metadata Overlay (Camera GUI style) */}
          <div className="absolute bottom-6 left-6 text-[10px] md:text-[11px] text-white font-mono font-bold tracking-widest bg-black/40 px-2 py-1 backdrop-blur-sm">ISO 100 | F2.8</div>
          <div className="absolute top-6 right-6 text-[10px] md:text-[11px] text-lgRed font-mono font-bold tracking-widest flex items-center gap-1.5 bg-black/40 px-2 py-1 backdrop-blur-sm">
            <span className="w-2 h-2 bg-lgRed rounded-full animate-pulse"></span>
            REC 00:00:22
          </div>

          {/* Interaction Prompt */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-bold text-lgRed opacity-0 group-hover:opacity-100 transition-opacity tracking-tighter">
            CLICK TO CAPTURE MOMENT
          </div>
        </div>

        <div className="space-y-8">
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-[1.1] text-black">
              기술로 세상을 보고,<br />
              <span className="text-lgRed italic">관심으로 사람을 봅니다.</span>
            </h1>
            
            <div className="flex flex-col items-center space-y-6">
              <p className="text-xl md:text-3xl text-lgGray font-medium">
                AI Education Creator, <span className="text-black font-extrabold border-b-4 border-lgRed pb-1">손주희</span>
              </p>
              <p className="text-lg md:text-xl text-lgGray max-w-2xl mx-auto leading-relaxed">
                LG 디스커버리랩의 교육 철학을 가슴에 품고,<br />
                아이들의 잠재력을 깨우는 <span className="text-black font-bold">크루</span>가 되겠습니다.
              </p>
            </div>
        </div>

        <div className="mt-20">
            <a href="#input" className="group flex flex-col items-center gap-4 transition-transform hover:-translate-y-2">
                <span className="text-[11px] font-bold text-lgGray tracking-[0.3em] uppercase opacity-60 group-hover:opacity-100">Scroll to Explore</span>
                <div className="w-8 h-12 border-2 border-lgGray/30 rounded-full flex justify-center p-1.5">
                    <div className="w-1.5 h-1.5 bg-lgRed rounded-full animate-bounce"></div>
                </div>
            </a>
        </div>
      </div>
    </section>
  );
};
