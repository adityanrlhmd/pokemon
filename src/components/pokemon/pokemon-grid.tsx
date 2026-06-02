'use client';

import { useMemo } from 'react';
import { useGetInfinitePokemons } from '@/services/pokemon';
import { useGetTypeDetail } from '@/services/type';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDebounceValue } from 'usehooks-ts';
import { PokemonCardSkeleton } from './pokemon-card-skeleton';
import { PokemonListItem } from './pokemon-list-item';

const GRID_CLASSES =
  'grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6';

interface PokemonGridProps {
  search: string;
  type: string;
}

export function PokemonGrid({ search, type }: PokemonGridProps) {
  if (type) return <TypeFilteredGrid type={type} search={search} />;
  return <InfiniteGrid search={search} />;
}

function InfiniteGrid({ search }: { search: string }) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useGetInfinitePokemons();

  const [debouncedSearch] = useDebounceValue(search, 500);

  const allItems = useMemo(() => data?.pages.flatMap((p) => p.results) ?? [], [data?.pages]);

  const items = useMemo(
    () =>
      debouncedSearch
        ? allItems.filter((p) => p.name.includes(debouncedSearch.toLowerCase()))
        : allItems,
    [allItems, debouncedSearch]
  );

  if (isLoading) return <GridSkeleton />;

  if (items.length === 0) {
    return (
      <p className="py-20 text-center text-sm text-zinc-400">
        No Pokémon found for &quot;{search}&quot;
      </p>
    );
  }

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchNextPage}
      hasMore={!search && !!hasNextPage}
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

function TypeFilteredGrid({ type, search }: { type: string; search: string }) {
  const { data, isLoading } = useGetTypeDetail({ idOrName: type });

  const allItems = useMemo(() => data?.pokemon ?? [], [data?.pokemon]);

  const items = useMemo(
    () =>
      search ? allItems.filter((p) => p.pokemon.name.includes(search.toLowerCase())) : allItems,
    [allItems, search]
  );

  if (isLoading) return <GridSkeleton />;

  if (items.length === 0) {
    return (
      <p className="py-20 text-center text-sm text-zinc-400">
        No Pokémon found{search ? ` for "${search}"` : ''}.
      </p>
    );
  }

  return (
    <div className={GRID_CLASSES}>
      {items.map(({ pokemon }) => (
        <PokemonListItem key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      ))}
    </div>
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
