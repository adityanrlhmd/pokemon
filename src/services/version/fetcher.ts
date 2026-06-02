import { pokemonApi } from '../api';
import type { GetVersionParams, Version } from './types';

class VersionFetcher {
  getVersion({ idOrName }: GetVersionParams): Promise<Version> {
    return pokemonApi.get(`/version/${idOrName}`);
  }
}
export const versionFetcher = new VersionFetcher();
