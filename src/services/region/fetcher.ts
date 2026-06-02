import { pokemonApi } from '../api';
import type { GetRegionParams, Region } from './types';

class RegionFetcher {
  getRegion({ idOrName }: GetRegionParams): Promise<Region> {
    return pokemonApi.get(`/region/${idOrName}`);
  }
}
export const regionFetcher = new RegionFetcher();
