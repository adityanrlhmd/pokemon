'use client';

import { useCallback, useMemo } from 'react';
import { POKEMON_TYPE_COLORS } from '@/constants/pokemon-types';
import { useGetTypes } from '@/services/type';
import { extractIdFromUrl } from '@/utils/pokemon';
import { useQueryState } from 'nuqs';

export function PokemonTypeFilter() {
  const [selectedType, setSelectedType] = useQueryState('type', {
    defaultValue: '',
    shallow: false,
  });
  const { data } = useGetTypes();

  const types = useMemo(
    () => data?.results.filter((t) => extractIdFromUrl(t.url) <= 10000) ?? [],
    [data?.results]
  );

  const handleSelect = useCallback(
    (name: string) => setSelectedType((prev) => (prev === name ? null : name)),
    [setSelectedType]
  );

  return (
    <div className="flex flex-wrap gap-2">
      {types.map((t) => {
        const isSelected = selectedType === t.name;
        const color = POKEMON_TYPE_COLORS[t.name] ?? '#68A090';

        return (
          <button
            key={t.name}
            onClick={() => handleSelect(t.name)}
            className="rounded-full px-3 py-1 text-xs font-semibold capitalize text-white transition-opacity"
            style={{ backgroundColor: color, opacity: selectedType && !isSelected ? 0.35 : 1 }}
          >
            {t.name}
          </button>
        );
      })}
    </div>
  );
}
