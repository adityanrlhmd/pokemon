import { pokemonApi } from '../api';
import type { GetMoveLearnMethodParams, MoveLearnMethod } from './types';

class MoveLearnMethodFetcher {
  getMoveLearnMethod({ idOrName }: GetMoveLearnMethodParams): Promise<MoveLearnMethod> {
    return pokemonApi.get(`/move-learn-method/${idOrName}`);
  }
}
export const moveLearnMethodFetcher = new MoveLearnMethodFetcher();
