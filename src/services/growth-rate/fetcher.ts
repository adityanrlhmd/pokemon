import { pokemonApi } from '../api';
import type { GetGrowthRateParams, GrowthRate } from './types';

class GrowthRateFetcher {
  getGrowthRate({ idOrName }: GetGrowthRateParams): Promise<GrowthRate> {
    return pokemonApi.get(`/growth-rate/${idOrName}`);
  }
}
export const growthRateFetcher = new GrowthRateFetcher();
