
import React from 'react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend,
  LineChart, Line, XAxis, YAxis, CartesianGrid
} from 'recharts';
import { DURATION_CHART_DATA, PRESSURE_CHART_DATA } from '../constants';

const ChartsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Duration Chart */}
      <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
        <div className="mb-6">
          <h3 className="text-xl font-black text-slate-800">作業耗時比例 (Duration Ratio)</h3>
          <p className="text-sm text-slate-500">強調 68 小時完整固化以確保管路改裝的耐受性</p>
        </div>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={DURATION_CHART_DATA}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                animationBegin={0}
                animationDuration={1500}
              >
                {DURATION_CHART_DATA.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <RechartsTooltip 
                contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
              />
              <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pressure Stability Chart */}
      <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
        <div className="mb-6">
          <h3 className="text-xl font-black text-slate-800">壓力穩定趨勢 (Pressure Trend)</h3>
          <p className="text-sm text-slate-500">泵浦啟動後 30s 達標，監測期間持續穩定於 1.52 kg/cm²</p>
        </div>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={PRESSURE_CHART_DATA} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
              <YAxis domain={[0, 2]} axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} unit=" kg" />
              <RechartsTooltip 
                 contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
              />
              <Line 
                type="monotone" 
                dataKey="pressure" 
                stroke="#3b82f6" 
                strokeWidth={4} 
                dot={{ r: 6, fill: '#fff', strokeWidth: 3 }}
                activeDot={{ r: 8 }}
                animationDuration={2000}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ChartsSection;
