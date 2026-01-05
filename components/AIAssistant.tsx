
import React, { useState, useEffect } from 'react';
import { getMaintenanceAnalysis } from '../services/geminiService';
import { TIMELINE_DATA, MACHINE_NAME } from '../constants';

const AIAssistant: React.FC = () => {
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);
    const reportText = JSON.stringify({
      machine: MACHINE_NAME,
      events: TIMELINE_DATA,
      fix: "Changed blind hole to Pipe Cap",
      pressure: "1.52 kg/cm2 stable"
    });
    const result = await getMaintenanceAnalysis(reportText);
    setAnalysis(result || "Analysis unavailable.");
    setLoading(false);
  };

  return (
    <section className="bg-indigo-900 text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
        <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
      </div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-2/3">
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-indigo-500 p-2 rounded-lg">
               <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <h2 className="text-2xl font-black">AI 維修智慧洞察 (Gemini Insight)</h2>
          </div>
          <p className="text-indigo-200 mb-6">點擊下方按鈕，讓 Gemini 分析本次維修報告，獲取專業的技術總結與未來維修建議。</p>
          
          {analysis ? (
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 whitespace-pre-line text-slate-100 text-sm leading-relaxed">
              {analysis}
            </div>
          ) : (
            <button 
              onClick={handleAnalyze}
              disabled={loading}
              className="px-8 py-4 bg-white text-indigo-900 rounded-2xl font-bold hover:bg-indigo-50 transition-all shadow-lg active:scale-95 disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  分析中...
                </span>
              ) : "開始 AI 分析"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
