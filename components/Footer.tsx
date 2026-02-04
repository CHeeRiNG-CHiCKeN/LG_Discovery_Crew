
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 border-2 border-lgRed rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-lgRed rounded-full"></div>
          </div>
          <span className="font-bold text-xl tracking-tight uppercase">LG Discovery Lab Crew Applicant</span>
        </div>
        
        <div className="text-center md:text-right space-y-1">
          <p className="text-lgGray text-sm">LG_DiscoveryLab_CREW</p>
          <p className="text-lgGray text-xs">© 2026 Portfolio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
