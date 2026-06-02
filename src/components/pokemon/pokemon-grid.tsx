'use client';

import { useMemo, useState } from 'react';
import { MAX_POKEMON_ID } from '@/constants/api';
import { useGetInfinitePokemons } from '@/services/pokemon';
import { useGetTypeDetail } from '@/services/type';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PokemonCardSkeleton } from './pokemon-card-skeleton';
import { PokemonListItem } from './pokemon-list-item';

const GRID_CLASSES =
  'grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6';

const PER_PAGE = 20;

interface PokemonGridProps {
  type: string;
}

export function PokemonGrid({ type }: PokemonGridProps) {
  if (type) return <TypeFilteredGrid key={type} type={type} />;
  return <InfiniteGrid />;
}

function InfiniteGrid() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useGetInfinitePokemons();

  const items = useMemo(
    () => (data?.pages.flatMap((p) => p.results) ?? []).slice(0, MAX_POKEMON_ID),
    [data?.pages]
  );

  if (isLoading) return <GridSkeleton />;

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchNextPage}
      hasMore={items.length < MAX_POKEMON_ID && !!hasNextPage}
      loader={
        isFetchingNextPage && (
          <div className={`mt-3 ${GRID_CLASSES}`}>
            {Array.from({ length: 6 }).map((_, i) => (
              <PokemonCardSkeleton key={i} />
            ))}
          </div>
        )
      }
      style={{ overflow: 'unset' }}
    >
      <div className={GRID_CLASSES}>
        {items.map((pokemon) => (
          <PokemonListItem key={pokemon.name} name={pokemon.name} url={pokemon.url} />
        ))}
      </div>
    </InfiniteScroll>
  );
}

function TypeFilteredGrid({ type }: { type: string }) {
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

function GridSkeleton() {
  return (
    <div className={GRID_CLASSES}>
      {Array.from({ length: 20 }).map((_, i) => (
        <PokemonCardSkeleton key={i} />
      ))}
    </div>
  );
}
