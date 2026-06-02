import { pokemonApi } from '../api';
import type { GetEncounterConditionParams, EncounterCondition } from './types';

class EncounterConditionFetcher {
  getEncounterCondition({ idOrName }: GetEncounterConditionParams): Promise<EncounterCondition> {
    return pokemonApi.get(`/encounter-condition/${idOrName}`);
  }
}
export const encounterConditionFetcher = new EncounterConditionFetcher();
