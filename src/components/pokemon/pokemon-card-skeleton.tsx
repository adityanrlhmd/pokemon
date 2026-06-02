import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function PokemonCardSkeleton() {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-3 p-4">
        <Skeleton className="h-28 w-28 rounded-full" />
        <div className="flex w-full flex-col items-center gap-1.5">
          <Skeleton className="h-3 w-10" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>
      </CardContent>
    </Card>
  );
}
