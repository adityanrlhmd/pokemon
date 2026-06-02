import { pokemonApi } from '../api';
import type { GetUencounterUconditionUvalueParams, UencounterUconditionUvalue } from './types';

class UencounterUconditionUvalueFetcher {
  getUencounterUconditionUvalue({
    idOrName,
  }: GetUencounterUconditionUvalueParams): Promise<UencounterUconditionUvalue> {
    return pokemonApi.get(`/encounter-condition-value/${idOrName}`);
  }
}
export const encounterconditionvalueFetcher = new UencounterUconditionUvalueFetcher();
