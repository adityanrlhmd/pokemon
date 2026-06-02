import { pokemonApi } from '../api';
import type { GetLocationParams, Location } from './types';

class LocationFetcher {
  getLocation({ idOrName }: GetLocationParams): Promise<Location> {
    return pokemonApi.get(`/location/${idOrName}`);
  }
}
export const locationFetcher = new LocationFetcher();
