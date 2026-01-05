
import { MaintenanceEvent, ChartData, PressureData } from './types';

export const MACHINE_ID = "ET0029";
export const MACHINE_NAME = "FC-ET-01-營錡-銅蝕刻機#1";
export const MAINTENANCE_ZONE = "蝕刻二槽 (Etching Tank 2)";
export const PRESSURE_THRESHOLD = "1.5 ± 0.3 kg/cm2";

export const TIMELINE_DATA: MaintenanceEvent[] = [
  {
    time: "2026/01/02 06:30",
    title: "夜班點檢回報 (Incident Reported)",
    description: "操作員發現蝕刻二槽管路末端盲孔處有藥水滲漏。確認滲漏後立即停機報修。",
    type: 'incident',
    status: 'error'
  },
  {
    time: "2026/01/02 13:00",
    title: "封堵改裝完成 (Modification Done)",
    description: "移除舊有盲孔，改裝工業級管帽蓋 (Pipe Cap) 封堵，消除洩漏風險。",
    type: 'work',
    status: 'info'
  },
  {
    time: "01/02 13:00 - 01/05 09:00",
    title: "完整固化期 (Curing Period)",
    description: "靜置 68 小時，確保膠合點化學耐受性與密封強度達標。",
    type: 'wait',
    status: 'waiting'
  },
  {
    time: "2026/01/05 09:30 - 11:00",
    title: "復機壓力測試 (Final Validation)",
    description: "系統穩定運行 90 分鐘，壓力維持於 1.52 kg/cm2，無任何滲漏跡象。",
    type: 'test',
    status: 'success'
  }
];

export const DURATION_CHART_DATA: ChartData[] = [
  { name: '改裝作業 (Repair)', value: 6.5, color: '#3b82f6' },
  { name: '固化等待 (Curing)', value: 68, color: '#6366f1' },
  { name: '驗證測試 (Testing)', value: 1.5, color: '#10b981' },
];

export const PRESSURE_CHART_DATA: PressureData[] = [
  { time: '09:30(啟動)', pressure: 0 },
  { time: '09:30:30', pressure: 1.52 },
  { time: '10:00', pressure: 1.52 },
  { time: '10:30', pressure: 1.52 },
  { time: '11:00(結束)', pressure: 1.52 },
];
