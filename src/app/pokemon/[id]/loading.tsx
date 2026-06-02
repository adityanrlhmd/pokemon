import { Skeleton } from '@/components/ui/skeleton';

export default function DetailLoading() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Skeleton className="mb-6 h-5 w-16" />

      {/* Hero skeleton */}
      <div className="mb-6 flex flex-col items-center gap-6 rounded-2xl bg-zinc-100 p-8 dark:bg-zinc-800 sm:flex-row">
        <Skeleton className="h-48 w-48 shrink-0 rounded-full" />
        <div className="flex w-full flex-col items-center gap-3 sm:items-start">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-9 w-40" />
          <Skeleton className="h-4 w-24" />
          <div className="flex gap-2">
            <Skeleton className="h-7 w-16 rounded-full" />
            <Skeleton className="h-7 w-16 rounded-full" />
          </div>
          <div className="flex gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <Skeleton className="h-3 w-10" />
                <Skeleton className="h-4 w-12" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats skeleton */}
      <div className="mb-8">
        <Skeleton className="mb-4 h-5 w-24" />
        <div className="flex flex-col gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-6 w-full" />
          ))}
        </div>
      </div>

      {/* Abilities skeleton */}
      <div className="mb-8">
        <Skeleton className="mb-4 h-5 w-20" />
        <div className="flex flex-col gap-3">
          {Array.from({ length: 2 }).map((_, i) => (
            <Skeleton key={i} className="h-20 w-full rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
