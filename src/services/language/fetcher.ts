import { pokemonApi } from '../api';
import type { GetLanguageParams, Language } from './types';

class LanguageFetcher {
  getLanguage({ idOrName }: GetLanguageParams): Promise<Language> {
    return pokemonApi.get(`/language/${idOrName}`);
  }
}
export const languageFetcher = new LanguageFetcher();
