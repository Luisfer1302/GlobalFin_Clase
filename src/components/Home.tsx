import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from 'recharts';

const weeklyData = [
  { day: 'MON', value: 65 },
  { day: 'TUE', value: 45 },
  { day: 'WED', value: 85 },
  { day: 'THU', value: 55 },
  { day: 'FRI', value: 75 },
  { day: 'SAT', value: 35 },
  { day: 'SUN', value: 95 },
];

interface HomeProps {
  onNavigateToStats: () => void;
  onNavigateToLog: () => void;
}

export default function Home({ onNavigateToStats, onNavigateToLog }: HomeProps) {
  return (
    <div className="p-4 space-y-6 pb-24">
      {/* Header */}
      <header className="flex items-center justify-between pt-4">
        <div className="flex items-center gap-3">
          <div className="size-12 rounded-full bg-slate-700 border-2 border-slate-600 overflow-hidden">
            <img src="https://picsum.photos/seed/user/100/100" alt="Avatar" referrerPolicy="no-referrer" />
          </div>
          <div>
            <p className="text-slate-400 text-xs font-medium">Good Morning</p>
            <h1 className="text-xl font-bold">Hello, User</h1>
          </div>
        </div>
        <button className="size-10 rounded-full bg-slate-800 flex items-center justify-center relative">
          <span className="material-symbols-outlined text-slate-200">notifications</span>
          <span className="absolute top-2.5 right-2.5 size-2 bg-primary rounded-full border-2 border-slate-800"></span>
        </button>
      </header>

      {/* Today's Activity */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Today's Activity</h2>
          <button onClick={onNavigateToStats} className="text-primary text-sm font-bold">View All</button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-card-dark p-4 rounded-2xl border border-white/5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">footprint</span>
              </div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Active</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold">8,432</h3>
              <p className="text-xs text-slate-500">Steps Taken</p>
            </div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>

          <div className="bg-card-dark p-4 rounded-2xl border border-white/5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="size-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                <span className="material-symbols-outlined">water_drop</span>
              </div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Hydration</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold">1.2L</h3>
              <p className="text-xs text-slate-500">Water Intake</p>
            </div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-blue-400 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-card-dark p-4 rounded-2xl border border-white/5 flex items-center gap-4">
          <div className="size-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
            <span className="material-symbols-outlined">bedtime</span>
          </div>
          <div className="flex-1">
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl font-bold">7h 20m</h3>
              <span className="text-xs text-slate-500">Sleep duration</span>
            </div>
            <div className="flex gap-1 mt-2">
              <div className="h-1.5 flex-1 bg-purple-400 rounded-full"></div>
              <div className="h-1.5 flex-1 bg-purple-400 rounded-full"></div>
              <div className="h-1.5 flex-1 bg-purple-400 rounded-full"></div>
              <div className="h-1.5 flex-1 bg-slate-800 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Progress */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Weekly Progress</h2>
          <div className="flex items-center gap-1.5">
            <span className="size-2 bg-primary rounded-full"></span>
            <span className="text-[10px] font-bold text-slate-500 uppercase">Goal</span>
          </div>
        </div>

        <div className="bg-card-dark p-4 rounded-2xl border border-white/5 h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyData}>
              <XAxis 
                dataKey="day" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#64748b', fontSize: 10, fontWeight: 700 }}
                dy={10}
              />
              <Bar dataKey="value" radius={[4, 4, 4, 4]} barSize={32}>
                {weeklyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.value > 80 ? '#13ec5b' : '#1a2e21'} stroke={entry.value > 80 ? 'none' : '#334155'} strokeWidth={1} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Your Coach */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold">Your Coach</h2>
        <div className="bg-primary/10 border border-primary/20 p-4 rounded-2xl flex items-center gap-4">
          <div className="size-12 rounded-full bg-primary flex items-center justify-center text-background-dark">
            <span className="material-symbols-outlined">fitness_center</span>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-sm">Ready for your workout?</h3>
            <p className="text-xs text-slate-400">You're 200 steps away from your daily goal. Let's do this!</p>
          </div>
          <button onClick={onNavigateToLog} className="size-10 rounded-full bg-primary flex items-center justify-center text-background-dark">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </section>
    </div>
  );
}
