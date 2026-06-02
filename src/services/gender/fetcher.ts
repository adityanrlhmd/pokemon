import { pokemonApi } from '../api';
import type { GetGenderParams, Gender } from './types';

class GenderFetcher {
  getGender({ idOrName }: GetGenderParams): Promise<Gender> {
    return pokemonApi.get(`/gender/${idOrName}`);
  }
}
export const genderFetcher = new GenderFetcher();
