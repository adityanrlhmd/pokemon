import { pokemonApi } from '../api';
import type { GetUversionUgroupParams, UversionUgroup } from './types';

class UversionUgroupFetcher {
  getUversionUgroup({ idOrName }: GetUversionUgroupParams): Promise<UversionUgroup> {
    return pokemonApi.get(`/version-group/${idOrName}`);
  }
}
export const versiongroupFetcher = new UversionUgroupFetcher();
