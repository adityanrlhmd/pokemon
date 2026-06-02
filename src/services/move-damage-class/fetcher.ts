import { pokemonApi } from '../api';
import type { GetMoveDamageClassParams, MoveDamageClass } from './types';

class MoveDamageClassFetcher {
  getMoveDamageClass({ idOrName }: GetMoveDamageClassParams): Promise<MoveDamageClass> {
    return pokemonApi.get(`/move-damage-class/${idOrName}`);
  }
}
export const moveDamageClassFetcher = new MoveDamageClassFetcher();
