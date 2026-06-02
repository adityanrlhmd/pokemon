import { pokemonApi } from '../api';
import type { GetMoveCategoryParams, MoveCategory } from './types';

class MoveCategoryFetcher {
  getMoveCategory({ idOrName }: GetMoveCategoryParams): Promise<MoveCategory> {
    return pokemonApi.get(`/move-category/${idOrName}`);
  }
}
export const moveCategoryFetcher = new MoveCategoryFetcher();
