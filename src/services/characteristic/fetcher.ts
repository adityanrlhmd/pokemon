import { pokemonApi } from '../api';
import type { GetCharacteristicParams, Characteristic } from './types';

class CharacteristicFetcher {
  getCharacteristic({ id }: GetCharacteristicParams): Promise<Characteristic> {
    return pokemonApi.get(`/characteristic/${id}`);
  }
}

export const characteristicFetcher = new CharacteristicFetcher();
