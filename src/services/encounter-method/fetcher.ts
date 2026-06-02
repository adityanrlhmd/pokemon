import { pokemonApi } from '../api';
import type { GetUencounterUmethodParams, UencounterUmethod } from './types';

class UencounterUmethodFetcher {
  getUencounterUmethod({ idOrName }: GetUencounterUmethodParams): Promise<UencounterUmethod> {
    return pokemonApi.get(`/encounter-method/${idOrName}`);
  }
}
export const encountermethodFetcher = new UencounterUmethodFetcher();
