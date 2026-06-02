import { pokemonApi } from '../api';
import type { GetUencounterUconditionParams, UencounterUcondition } from './types';

class UencounterUconditionFetcher {
  getUencounterUcondition({
    idOrName,
  }: GetUencounterUconditionParams): Promise<UencounterUcondition> {
    return pokemonApi.get(`/encounter-condition/${idOrName}`);
  }
}
export const encounterconditionFetcher = new UencounterUconditionFetcher();
