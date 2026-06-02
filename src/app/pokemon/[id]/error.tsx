'use client';

import Link from 'next/link';
import { useEffect } from 'react';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function DetailErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <span className="text-5xl">⚠️</span>
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Pokémon not found</h2>
      <p className="max-w-sm text-sm text-zinc-500">
        Could not load this Pokémon. It may not exist or there was a network error.
      </p>
      <div className="flex gap-3">
        <button
          onClick={reset}
          className="rounded-lg border border-zinc-200 px-4 py-2 text-sm font-medium hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900"
        >
          Back to Pokédex
        </Link>
      </div>
    </div>
  );
}
