import { pokemonApi } from '../api';
import type { GetLocationAreaParams, LocationArea } from './types';

class LocationAreaFetcher {
  getLocationArea({ idOrName }: GetLocationAreaParams): Promise<LocationArea> {
    return pokemonApi.get(`/location-area/${idOrName}`);
  }
}
export const locationAreaFetcher = new LocationAreaFetcher();
