'use client';

import { useMemo } from 'react';
import { MAX_POKEMON_ID } from '@/constants/api';
import { useGetInfinitePokemons } from '@/services/pokemon';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PokemonCardSkeleton } from '../pokemon-card-skeleton';
import { PokemonListItem } from '../pokemon-list-item';
import { GRID_CLASSES } from './constants';
import { GridSkeleton } from './grid-skeleton';

export function InfiniteGrid() {
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
