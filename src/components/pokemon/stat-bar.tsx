const STAT_META: Record<string, { label: string; color: string }> = {
  hp: { label: 'HP', color: '#FF5959' },
  attack: { label: 'Attack', color: '#F5AC78' },
  defense: { label: 'Defense', color: '#FAE078' },
  'special-attack': { label: 'Sp. Atk', color: '#9DB7F5' },
  'special-defense': { label: 'Sp. Def', color: '#A7DB8D' },
  speed: { label: 'Speed', color: '#FA92B2' },
};

const MAX_STAT = 255;

interface StatBarProps {
  name: string;
  value: number;
}

export function StatBar({ name, value }: StatBarProps) {
  const meta = STAT_META[name] ?? { label: name, color: '#A8A8A8' };
  const pct = Math.min((value / MAX_STAT) * 100, 100);

  return (
    <div className="grid grid-cols-[6rem_2.5rem_1fr] items-center gap-3">
      <span className="text-xs text-zinc-500">{meta.label}</span>
      <span className="text-right text-xs font-semibold text-zinc-800 dark:text-zinc-200">
        {value}
      </span>
      <div className="h-2 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${pct}%`, backgroundColor: meta.color }}
        />
      </div>
    </div>
  );
}
