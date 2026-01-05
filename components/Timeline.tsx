
import React from 'react';
import { TIMELINE_DATA } from '../constants';

const Timeline: React.FC = () => {
  return (
    <div className="relative py-10">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 transform md:-translate-x-1/2"></div>
      
      <div className="space-y-12">
        {TIMELINE_DATA.map((event, index) => (
          <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            {/* Timeline Dot */}
            {/* Fix: Wrapped className in curly braces and backticks to correctly handle template literals */}
            <div className={`absolute left-4 md:left-1/2 w-8 h-8 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 z-10 flex items-center justify-center
              ${event.status === 'error' ? 'bg-red-500' : 
                event.status === 'success' ? 'bg-green-500' : 
                event.status === 'waiting' ? 'bg-indigo-500' : 'bg-blue-500'}`}>
            </div>

            {/* Content Card */}
            <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
              {/* Fix: Ensured className correctly uses template literal backticks for multi-line status classes */}
              <div className={`p-6 bg-white rounded-3xl shadow-sm border-t-4 transition-all hover:shadow-xl hover:-translate-y-1
                ${event.status === 'error' ? 'border-red-500' : 
                  event.status === 'success' ? 'border-green-500' : 
                  event.status === 'waiting' ? 'border-indigo-500' : 'border-blue-500'}`}>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1 block">
                  {event.time}
                </span>
                <h3 className={`text-xl font-bold mb-2 ${event.status === 'error' ? 'text-red-700' : event.status === 'success' ? 'text-green-700' : 'text-slate-800'}`}>
                  {event.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {event.description}
                </p>
                {event.status === 'waiting' && (
                   <div className="mt-4 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 animate-progress" style={{ width: '100%' }}></div>
                   </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
