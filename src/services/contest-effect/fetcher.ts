import { pokemonApi } from '../api';
import type { ContestEffect, GetContestEffectParams } from './types';

class ContestEffectFetcher {
  getContestEffect({ id }: GetContestEffectParams): Promise<ContestEffect> {
    return pokemonApi.get(`/contest-effect/${id}`);
  }
}
export const contesteffectFetcher = new ContestEffectFetcher();
