import { PokemonGrid } from '@/components/pokemon/pokemon-grid';
import { PokemonTypeFilter } from '@/components/pokemon/pokemon-type-filter';

interface HomePageProps {
  searchParams: Promise<{ type?: string }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const { type = '' } = await searchParams;

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Pokédex</h1>
          <p className="mt-1 text-sm text-zinc-500">Browse and explore all Pokémon.</p>
        </div>

        <PokemonTypeFilter />
      </div>

      <PokemonGrid type={type} />
    </div>
  );
}
