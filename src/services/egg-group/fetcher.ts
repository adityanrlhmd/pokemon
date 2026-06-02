import { pokemonApi } from '../api';
import type { GetEggGroupParams, EggGroup } from './types';

class EggGroupFetcher {
  getEggGroup({ idOrName }: GetEggGroupParams): Promise<EggGroup> {
    return pokemonApi.get(`/egg-group/${idOrName}`);
  }
}
export const eggGroupFetcher = new EggGroupFetcher();
