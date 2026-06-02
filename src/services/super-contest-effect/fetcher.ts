import { pokemonApi } from '../api';
import type { GetSuperContestEffectParams, SuperContestEffect } from './types';

class SuperContestEffectFetcher {
  getSuperContestEffect({ idOrName }: GetSuperContestEffectParams): Promise<SuperContestEffect> {
    return pokemonApi.get(`/super-contest-effect/${idOrName}`);
  }
}
export const supercontesteffectFetcher = new SuperContestEffectFetcher();
