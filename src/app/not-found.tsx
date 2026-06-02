import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="flex h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <span className="text-6xl">?</span>
      <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">Page not found</h2>
      <p className="max-w-sm text-sm text-zinc-500">The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
      >
        Back to Pokédex
      </Link>
    </div>
  );
}
