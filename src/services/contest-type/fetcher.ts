import { pokemonApi } from '../api';
import type { GetContestTypeParams, ContestType } from './types';

class ContestTypeFetcher {
  getContestType({ idOrName }: GetContestTypeParams): Promise<ContestType> {
    return pokemonApi.get(`/contest-type/${idOrName}`);
  }
}
export const contestTypeFetcher = new ContestTypeFetcher();
