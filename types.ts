
export interface MaintenanceEvent {
  time: string;
  title: string;
  description: string;
  type: 'incident' | 'work' | 'wait' | 'test';
  status: 'error' | 'info' | 'waiting' | 'success';
}

export interface ChartData {
  name: string;
  value: number;
  color: string;
}

export interface PressureData {
  time: string;
  pressure: number;
}
