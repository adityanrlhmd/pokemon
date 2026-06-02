'use client';

import { useMemo, useState } from 'react';
import { useGetTypeDetail } from '@/services/type';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PokemonCardSkeleton } from '../pokemon-card-skeleton';
import { PokemonListItem } from '../pokemon-list-item';
import { GRID_CLASSES, PER_PAGE } from './constants';
import { GridSkeleton } from './grid-skeleton';

interface TypeGridProps {
  type: string;
}

export function TypeGrid({ type }: TypeGridProps) {
  const { data, isLoading } = useGetTypeDetail({ idOrName: type });
  const [page, setPage] = useState(1);

  const allItems = useMemo(() => data?.pokemon ?? [], [data?.pokemon]);
  const visible = useMemo(() => allItems.slice(0, page * PER_PAGE), [allItems, page]);
  const hasMore = visible.length < allItems.length;

  if (isLoading) return <GridSkeleton />;

  if (allItems.length === 0) {
    return (
      <p className="py-20 text-center text-sm text-zinc-400">No Pokémon found for this type.</p>
    );
  }

  return (
    <InfiniteScroll
      dataLength={visible.length}
      next={() => setPage((p) => p + 1)}
      hasMore={hasMore}
      loader={
        <div className={`mt-3 ${GRID_CLASSES}`}>
          {Array.from({ length: 6 }).map((_, i) => (
            <PokemonCardSkeleton key={i} />
          ))}
        </div>
      }
      style={{ overflow: 'unset' }}
    >
      <div className={GRID_CLASSES}>
        {visible.map(({ pokemon }) => (
          <PokemonListItem key={pokemon.name} name={pokemon.name} url={pokemon.url} />
        ))}
      </div>
    </InfiniteScroll>
  );
}
