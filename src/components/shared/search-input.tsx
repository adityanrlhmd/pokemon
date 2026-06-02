'use client';

import { Search, X } from 'lucide-react';
import { useQueryState } from 'nuqs';

export function SearchInput() {
  const [search, setSearch] = useQueryState('search', { defaultValue: '', shallow: false });

  return (
    <div className="relative w-full max-w-sm">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value || null)}
        placeholder="Search Pokémon..."
        className="h-10 w-full rounded-lg border border-zinc-200 bg-white pl-9 pr-9 text-sm outline-none ring-offset-background focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 dark:border-zinc-800 dark:bg-zinc-950 dark:focus:ring-zinc-300"
      />
      {search && (
        <button
          onClick={() => setSearch(null)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
