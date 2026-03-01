import { AreaChart, Area, XAxis, ResponsiveContainer, Tooltip } from 'recharts';

const activityData = [
  { day: 'MON', steps: 4000 },
  { day: 'TUE', steps: 7500 },
  { day: 'WED', steps: 6000 },
  { day: 'THU', steps: 4500 },
  { day: 'FRI', steps: 9000 },
  { day: 'SAT', steps: 3000 },
  { day: 'SUN', steps: 8450 },
];

interface StatsProps {
  onBack: () => void;
}

export default function Stats({ onBack }: StatsProps) {
  return (
    <div className="flex flex-col h-full">
      <header className="flex items-center p-4 pt-6 justify-between shrink-0">
        <button onClick={onBack} className="flex size-10 items-center justify-center rounded-full hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined text-slate-100">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">Your Activity</h2>
      </header>

      <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-8 pb-24">
        {/* Timeframe Toggle */}
        <div className="bg-slate-800 p-1 rounded-xl flex">
          <button className="flex-1 py-2 text-sm font-bold rounded-lg bg-background-dark text-primary shadow-sm">Week</button>
          <button className="flex-1 py-2 text-sm font-bold rounded-lg text-slate-500">Month</button>
        </div>

        {/* Summary */}
        <div className="space-y-1">
          <p className="text-slate-500 text-sm font-medium">Daily average steps</p>
          <div className="flex items-baseline gap-2">
            <h1 className="text-4xl font-bold tracking-tight">8,450</h1>
            <span className="text-primary text-sm font-bold bg-primary/10 px-2 py-0.5 rounded-full">+12%</span>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-slate-800/30 rounded-2xl p-4 border border-slate-800 h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={activityData}>
              <defs>
                <linearGradient id="colorSteps" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#13ec5b" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#13ec5b" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="day" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#64748b', fontSize: 10, fontWeight: 700 }}
                dy={10}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1a2e21', border: '1px solid #13ec5b', borderRadius: '8px' }}
                itemStyle={{ color: '#13ec5b' }}
              />
              <Area 
                type="monotone" 
                dataKey="steps" 
                stroke="#13ec5b" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorSteps)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Highlights */}
        <section className="space-y-4">
          <h3 className="text-lg font-bold">Recent Highlights</h3>
          <div className="space-y-3">
            <HighlightCard 
              icon="bolt" 
              title="New Streak!" 
              subtitle="7 days of meeting your goal" 
            />
            <HighlightCard 
              icon="favorite" 
              title="Heart Rate Improved" 
              subtitle="Resting HR down by 4 bpm" 
            />
            <HighlightCard 
              icon="bedtime" 
              title="Consistent Sleep" 
              subtitle="Better recovery than last week" 
            />
          </div>
        </section>
      </div>
    </div>
  );
}

function HighlightCard({ icon, title, subtitle }: { icon: string, title: string, subtitle: string }) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/50 border border-slate-800">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div className="flex-1">
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-slate-500">{subtitle}</p>
      </div>
      <span className="material-symbols-outlined text-slate-400">chevron_right</span>
    </div>
  );
}
