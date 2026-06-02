import { pokemonApi } from '../api';
import type { GetMoveTargetParams, MoveTarget } from './types';

class MoveTargetFetcher {
  getMoveTarget({ idOrName }: GetMoveTargetParams): Promise<MoveTarget> {
    return pokemonApi.get(`/move-target/${idOrName}`);
  }
}
export const moveTargetFetcher = new MoveTargetFetcher();
