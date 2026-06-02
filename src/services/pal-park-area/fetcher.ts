import { pokemonApi } from '../api';
import type { GetPalParkAreaParams, PalParkArea } from './types';

class PalParkAreaFetcher {
  getPalParkArea({ idOrName }: GetPalParkAreaParams): Promise<PalParkArea> {
    return pokemonApi.get(`/pal-park-area/${idOrName}`);
  }
}
export const palParkAreaFetcher = new PalParkAreaFetcher();
