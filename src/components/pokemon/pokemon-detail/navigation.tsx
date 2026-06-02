import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MAX_POKEMON_ID } from '@/constants/api';
import { formatPokemonId } from '@/utils/pokemon';

interface PokemonNavigationProps {
  id: number;
}

export function PokemonNavigation({ id }: PokemonNavigationProps) {
  const prevId = id === 1 ? MAX_POKEMON_ID : id - 1;
  const nextId = id === MAX_POKEMON_ID ? 1 : id + 1;

  return (
    <div className="flex items-center gap-2">
      <Link
        href={`/pokemon/${prevId}`}
        className="inline-flex items-center gap-1 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
      >
        <ChevronLeft className="h-3.5 w-3.5" />
        {formatPokemonId(prevId)}
      </Link>
      <Link
        href={`/pokemon/${nextId}`}
        className="inline-flex items-center gap-1 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
      >
        {formatPokemonId(nextId)}
        <ChevronRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
