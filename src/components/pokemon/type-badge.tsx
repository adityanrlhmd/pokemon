import { POKEMON_TYPE_COLORS } from '@/constants/pokemon-types';

interface TypeBadgeProps {
  type: string;
  size?: 'sm' | 'md';
}

export function TypeBadge({ type, size = 'md' }: TypeBadgeProps) {
  const color = POKEMON_TYPE_COLORS[type] ?? '#68A090';

  return (
    <span
      className={`inline-flex items-center rounded-full font-semibold capitalize text-white ${
        size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-xs'
      }`}
      style={{ backgroundColor: color }}
    >
      {type}
    </span>
  );
}
