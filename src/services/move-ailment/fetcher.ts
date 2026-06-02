import { pokemonApi } from '../api';
import type { GetMoveAilmentParams, MoveAilment } from './types';

class MoveAilmentFetcher {
  getMoveAilment({ idOrName }: GetMoveAilmentParams): Promise<MoveAilment> {
    return pokemonApi.get(`/move-ailment/${idOrName}`);
  }
}
export const moveAilmentFetcher = new MoveAilmentFetcher();
