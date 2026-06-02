import { pokemonApi } from '../api';
import type { GetUgrowthUrateParams, UgrowthUrate } from './types';

class UgrowthUrateFetcher {
  getUgrowthUrate({ idOrName }: GetUgrowthUrateParams): Promise<UgrowthUrate> {
    return pokemonApi.get(`/growth-rate/${idOrName}`);
  }
}
export const growthrateFetcher = new UgrowthUrateFetcher();
