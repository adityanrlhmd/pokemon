'use client';

import { Badge } from '@/components/ui/badge';
import { useGetAbility } from '@/services/ability';

interface AbilityItemProps {
  name: string;
  isHidden: boolean;
}

export function AbilityItem({ name, isHidden }: AbilityItemProps) {
  const { data } = useGetAbility({ idOrName: name });
  const shortEffect = data?.effect_entries.find((e) => e.language.name === 'en')?.short_effect;

  return (
    <div className="rounded-xl border border-zinc-100 p-4 dark:border-zinc-800">
      <div className="mb-1.5 flex items-center gap-2">
        <span className="text-sm font-semibold capitalize">{name.replace(/-/g, ' ')}</span>
        {isHidden && (
          <Badge variant="secondary" className="text-xs">
            Hidden
          </Badge>
        )}
      </div>
      {shortEffect && <p className="text-xs leading-relaxed text-zinc-500">{shortEffect}</p>}
    </div>
  );
}
