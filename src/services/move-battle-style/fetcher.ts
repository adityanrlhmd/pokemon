import { pokemonApi } from '../api';
import type { GetMoveBattleStyleParams, MoveBattleStyle } from './types';

class MoveBattleStyleFetcher {
  getMoveBattleStyle({ idOrName }: GetMoveBattleStyleParams): Promise<MoveBattleStyle> {
    return pokemonApi.get(`/move-battle-style/${idOrName}`);
  }
}
export const moveBattleStyleFetcher = new MoveBattleStyleFetcher();
