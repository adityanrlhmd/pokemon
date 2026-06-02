import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-14 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="text-2xl">⬤</span>
          <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Pokédex
          </span>
        </Link>
      </div>
    </header>
  );
}
