
import React from 'react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'hero', label: 'Intro' },
    { id: 'input', label: 'Input' },
    { id: 'processing', label: 'Processing' },
    { id: 'output', label: 'Output' },
    { id: 'vision', label: 'Vision' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // 내비게이션 바 높이를 고려한 오프셋
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center h-full">
          <a 
            href="#hero" 
            onClick={(e) => handleScroll(e, 'hero')}
            className="flex items-center h-full group"
          >
            <img 
              src="images/LG_DiscoveryLab.png" 
              alt="LG Discovery Lab" 
              className="h-7 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent && !parent.querySelector('.fallback-text')) {
                    const span = document.createElement('span');
                    span.className = 'fallback-text font-bold text-lg text-lgRed tracking-tight';
                    span.innerText = 'LG Discovery Lab';
                    parent.appendChild(span);
                }
              }}
            />
          </a>
        </div>
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleScroll(e, item.id)}
              className={`text-sm font-bold tracking-tight transition-colors hover:text-lgRed py-2 relative group ${
                activeSection === item.id ? 'text-lgRed' : 'text-lgGray'
              }`}
            >
              {item.label}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-lgRed transform transition-transform duration-300 ${activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'}`}></span>
            </a>
          ))}
        </div>
        <div className="md:hidden">
            <div className="px-3 py-1 bg-lgRed text-white rounded-full shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest">{activeSection}</span>
            </div>
        </div>
      </div>
    </nav>
  );
};
