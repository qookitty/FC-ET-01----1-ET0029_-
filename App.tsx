
import React, { useRef } from 'react';
import Header from './components/Header';
import Timeline from './components/Timeline';
import ChartsSection from './components/ChartsSection';
import AIAssistant from './components/AIAssistant';
import ExportTools from './components/ExportTools';
import { PRESSURE_THRESHOLD } from './constants';

const App: React.FC = () => {
  const reportRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen pb-20 selection:bg-blue-100 bg-slate-50">
      <div ref={reportRef} className="bg-slate-50 pb-16">
        <Header />

        <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-16">
          
          {/* Quick Summary Cards */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[2.5rem] shadow-sm p-8 border-l-[12px] border-red-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">🚨</span>
                <h2 className="text-2xl font-black text-slate-800 tracking-tight">異常發現 (Incident)</h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-600 leading-relaxed font-medium">
                  1/2 夜班點檢作業中，發現設備管路末端盲孔處有藥水滲漏。
                </p>
                <div className="inline-flex items-center px-4 py-2 bg-red-50 text-red-700 rounded-xl text-xs font-black uppercase tracking-widest border border-red-100">
                  Reporter Date: 2026/01/02 06:30
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-sm p-8 border-l-[12px] border-blue-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">🛠️</span>
                <h2 className="text-2xl font-black text-slate-800 tracking-tight">改裝方案 (Modification)</h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-600 leading-relaxed font-medium">
                  移除舊有盲孔設計，改由 <strong className="text-blue-600">工業級管帽蓋 (Pipe Cap)</strong> 封堵，強化管路密封結構並消除潛在失效點。
                </p>
                <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-xl text-xs font-black uppercase tracking-widest border border-blue-100">
                  Curing Time: 68 Hours Statutory
                </div>
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter">維修與固化時程</h2>
              <p className="mt-2 text-slate-500 font-medium">Precision Maintenance Timeline</p>
            </div>
            <Timeline />
          </section>

          {/* Data Analytics Section */}
          <section>
            <div className="flex items-center justify-between mb-8">
               <h2 className="text-3xl font-black text-slate-900 tracking-tighter">數據驗證 (Data Validation)</h2>
               <span className="text-xs font-mono px-3 py-1 bg-slate-200 rounded-full text-slate-600">Real-time Visualization</span>
            </div>
            <ChartsSection />
          </section>

          {/* AI Section */}
          <section className="no-capture">
             <AIAssistant />
          </section>

          {/* Final Instructions & OP Compliance */}
          <section className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-16 shadow-2xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-10">
                <h2 className="text-4xl font-black leading-tight">測試總結與<br/>維護指令</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="p-4 bg-blue-500/20 rounded-2xl text-blue-400">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">快速升壓測試</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        系統啟動後 <span className="text-blue-400 font-bold">30秒內</span> 抵達穩定的 1.52 kg/cm²。管路反應靈敏且各接頭處無微滲現象。
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="p-4 bg-green-500/20 rounded-2xl text-green-400">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">合規點檢驗證</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        經現場功能檢測，改裝部位與 <strong>日點檢表</strong> 標準完全吻合。化學耐受性評估優於原始設計。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700 p-8 rounded-3xl shadow-xl">
                 <div className="flex items-center space-x-3 mb-6">
                    <div className="w-2 h-8 bg-amber-500 rounded-full"></div>
                    <h3 className="text-2xl font-black text-amber-400">OP 作業員點檢核心</h3>
                 </div>
                 <ul className="space-y-6 text-slate-300">
                    <li className="flex items-center p-3 bg-slate-900/50 rounded-2xl border border-slate-700">
                      <span className="w-8 h-8 flex items-center justify-center bg-slate-700 rounded-lg mr-4 text-xs font-mono">01</span>
                      每班次落實管帽蓋周圍巡視 (滲液/結晶)
                    </li>
                    <li className="flex items-center p-3 bg-slate-900/50 rounded-2xl border border-slate-700">
                      <span className="w-8 h-8 flex items-center justify-center bg-slate-700 rounded-lg mr-4 text-xs font-mono">02</span>
                      監控壓力變動，基準值需維持於 {PRESSURE_THRESHOLD}
                    </li>
                    <li className="flex items-center p-3 bg-slate-900/50 rounded-2xl border border-slate-700">
                      <span className="w-8 h-8 flex items-center justify-center bg-slate-700 rounded-lg mr-4 text-xs font-mono">03</span>
                      若有異常跳動或異味，需立即連繫維修單位
                    </li>
                 </ul>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-white border-t border-slate-200 py-12">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-slate-400 text-xs">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
               <div className="p-2 bg-slate-100 rounded-lg font-mono font-bold text-slate-600">SYSTEM: FC-ET-01</div>
               <span>© 2026 Smart Industrial Maintenance Hub</span>
            </div>
            <div className="flex items-center space-x-6 font-mono">
              <span>DOC: ET0029-20260105</span>
              <span className="text-green-500 font-bold">STATUS: COMPLIANT</span>
            </div>
          </div>
        </footer>
      </div>

      {/* 匯出工具懸浮按鈕 */}
      <ExportTools targetRef={reportRef} />
    </div>
  );
};

export default App;
