import { pokemonApi } from '../api';
import type { GetUsuperUcontestUeffectParams, UsuperUcontestUeffect } from './types';

class UsuperUcontestUeffectFetcher {
  getUsuperUcontestUeffect({
    idOrName,
  }: GetUsuperUcontestUeffectParams): Promise<UsuperUcontestUeffect> {
    return pokemonApi.get(`/super-contest-effect/${idOrName}`);
  }
}
export const supercontesteffectFetcher = new UsuperUcontestUeffectFetcher();
