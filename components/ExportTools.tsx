
import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

interface ExportToolsProps {
  targetRef: React.RefObject<HTMLDivElement>;
}

const ExportTools: React.FC<ExportToolsProps> = ({ targetRef }) => {
  const [isExporting, setIsExporting] = useState(false);
  const [imageFormat, setImageFormat] = useState<'png' | 'jpeg' | 'webp'>('png');
  const [isOpen, setIsOpen] = useState(false);

  const handleExportImage = async () => {
    if (!targetRef.current) return;
    setIsExporting(true);
    try {
      const canvas = await html2canvas(targetRef.current, {
        scale: 2, // 提高解析度
        useCORS: true,
        backgroundColor: '#f8fafc', // 匹配 bg-slate-50
      });
      const link = document.createElement('a');
      link.download = `維修報告_${new Date().getTime()}.${imageFormat}`;
      link.href = canvas.toDataURL(`image/${imageFormat}`, 0.9);
      link.click();
    } catch (error) {
      console.error('Export image failed:', error);
      alert('圖片匯出失敗');
    } finally {
      setIsExporting(false);
    }
  };

  const handleExportPDF = async () => {
    if (!targetRef.current) return;
    setIsExporting(true);
    try {
      const canvas = await html2canvas(targetRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#f8fafc',
      });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width / 2, canvas.height / 2]
      });
      
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width / 2, canvas.height / 2);
      pdf.save(`維修報告_${new Date().getTime()}.pdf`);
    } catch (error) {
      console.error('Export PDF failed:', error);
      alert('PDF 匯出失敗');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className={`transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'} mb-4 flex flex-col items-end space-y-3`}>
        <div className="bg-slate-900/90 backdrop-blur-xl p-4 rounded-3xl shadow-2xl border border-slate-700 w-64 text-white">
          <p className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-widest">匯出設定</p>
          
          <div className="space-y-4">
            <div>
              <label className="text-xs block mb-2 font-medium">圖檔格式</label>
              <select 
                value={imageFormat}
                onChange={(e) => setImageFormat(e.target.value as any)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              >
                <option value="png">PNG (高品質)</option>
                <option value="jpeg">JPEG (壓縮)</option>
                <option value="webp">WEBP (網路優化)</option>
              </select>
            </div>

            <button
              onClick={handleExportImage}
              disabled={isExporting}
              className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-500 py-3 rounded-xl font-bold transition-all disabled:opacity-50"
            >
              {isExporting ? <span className="animate-spin text-lg">⌛</span> : <span>📸 匯出圖檔</span>}
            </button>

            <button
              onClick={handleExportPDF}
              disabled={isExporting}
              className="w-full flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-500 py-3 rounded-xl font-bold transition-all disabled:opacity-50"
            >
               {isExporting ? <span className="animate-spin text-lg">⌛</span> : <span>📄 匯出 PDF</span>}
            </button>
          </div>
        </div>
      </div>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 flex items-center justify-center rounded-full shadow-2xl transition-all transform active:scale-95 ${isOpen ? 'bg-red-500 rotate-45' : 'bg-slate-900 hover:scale-110'}`}
      >
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </button>
    </div>
  );
};

export default ExportTools;
