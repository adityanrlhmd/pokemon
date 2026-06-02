import { pokemonApi } from '../api';
import type { GetEncounterConditionValueParams, EncounterConditionValue } from './types';

class EncounterConditionValueFetcher {
  getEncounterConditionValue({
    idOrName,
  }: GetEncounterConditionValueParams): Promise<EncounterConditionValue> {
    return pokemonApi.get(`/encounter-condition-value/${idOrName}`);
  }
}
export const encounterConditionValueFetcher = new EncounterConditionValueFetcher();
