import { pokemonApi } from '../api';
import type { GetEncounterMethodParams, EncounterMethod } from './types';

class EncounterMethodFetcher {
  getEncounterMethod({ idOrName }: GetEncounterMethodParams): Promise<EncounterMethod> {
    return pokemonApi.get(`/encounter-method/${idOrName}`);
  }
}
export const encounterMethodFetcher = new EncounterMethodFetcher();
