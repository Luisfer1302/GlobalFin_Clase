interface LogProps {
  onClose: () => void;
}

export default function Log({ onClose }: LogProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between p-6 pb-2">
        <h2 className="text-2xl font-bold leading-tight tracking-tight text-white">Log New Entry</h2>
        <button onClick={onClose} className="flex items-center justify-center rounded-full p-2 hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined text-white">close</span>
        </button>
      </div>

      {/* Activity List */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 no-scrollbar">
        <LogItem 
          icon="water_drop" 
          title="Log Water" 
          subtitle="Track your daily hydration" 
        />
        <LogItem 
          icon="self_improvement" 
          title="Log Meditation" 
          subtitle="Mindfulness and breathing" 
        />
        <LogItem 
          icon="fitness_center" 
          title="Log Workout" 
          subtitle="Strength or cardio session" 
        />
        <LogItem 
          icon="bedtime" 
          title="Log Sleep" 
          subtitle="Quality and duration" 
        />
        <LogItem 
          icon="restaurant" 
          title="Log Nutrition" 
          subtitle="Meals and calorie intake" 
        />
      </div>

      {/* Action Button */}
      <div className="px-4 pb-24 pt-2">
        <button onClick={onClose} className="w-full bg-primary py-4 rounded-xl text-background-dark font-bold text-lg hover:brightness-110 active:scale-[0.98] transition-all">
          Save Selection
        </button>
      </div>
    </div>
  );
}

function LogItem({ icon, title, subtitle }: { icon: string, title: string, subtitle: string }) {
  return (
    <button className="flex w-full items-center gap-4 rounded-xl border border-primary/20 bg-primary/5 p-4 transition-all active:scale-95 group hover:bg-primary/10">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
        <span className="material-symbols-outlined text-2xl">{icon}</span>
      </div>
      <div className="flex flex-1 flex-col items-start">
        <p className="text-lg font-semibold text-white">{title}</p>
        <p className="text-sm text-slate-400">{subtitle}</p>
      </div>
      <span className="material-symbols-outlined text-slate-400">chevron_right</span>
    </button>
  );
}
