
import React from 'react';
import { MACHINE_ID, MACHINE_NAME, MAINTENANCE_ZONE } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          <div>
            <div className="flex items-center space-x-2 text-blue-300 text-sm font-bold tracking-widest uppercase mb-2">
              <span className="h-2 w-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span>Maintenance Resumption Intel</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">設備維修與復機報告</h1>
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-slate-200">
              <p className="flex items-center">
                <span className="text-blue-400 mr-2 font-bold">#</span>
                編號: <span className="ml-1 font-mono">{MACHINE_ID}</span>
              </p>
              <p className="flex items-center">
                <span className="text-blue-400 mr-2 font-bold">@</span>
                名稱: <span className="ml-1">{MACHINE_NAME}</span>
              </p>
            </div>
            <p className="mt-2 text-indigo-300 flex items-center">
               <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
               {MAINTENANCE_ZONE}
            </p>
          </div>
          
          <div className="flex flex-col items-end">
            <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 p-4 rounded-2xl shadow-inner">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-500/20 rounded-xl">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-tighter">Current Status</p>
                  <p className="text-xl font-black text-green-400">已復機 (RESUMED)</p>
                </div>
              </div>
            </div>
            <div className="mt-3 text-right">
              <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">Verified by System Intel</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
