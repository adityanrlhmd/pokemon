import { useQuery } from '@tanstack/react-query';
import { abilityFetcher } from './fetcher';
import type { GetAbilityParams } from './types';

export const abilityQueryKeys = {
  all: ['ability'] as const,
  details: () => [...abilityQueryKeys.all, 'detail'] as const,
  detail: (idOrName: string | number) => [...abilityQueryKeys.details(), idOrName] as const,
};

export function useGetAbility({ idOrName }: GetAbilityParams) {
  return useQuery({
    queryKey: abilityQueryKeys.detail(idOrName),
    queryFn: () => abilityFetcher.getAbility({ idOrName }),
    enabled: !!idOrName,
  });
}
