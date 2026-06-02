import { PokemonCardSkeleton } from '@/components/pokemon/pokemon-card-skeleton';

export default function HomeLoading() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4">
        <div className="h-8 w-32 animate-pulse rounded-md bg-zinc-100 dark:bg-zinc-800" />
        <div className="h-10 w-full max-w-sm animate-pulse rounded-lg bg-zinc-100 dark:bg-zinc-800" />
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 18 }).map((_, i) => (
            <div
              key={i}
              className="h-7 w-16 animate-pulse rounded-full bg-zinc-100 dark:bg-zinc-800"
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {Array.from({ length: 20 }).map((_, i) => (
          <PokemonCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
