import { API_BASE_URL } from '@/constants/api';
import { Http } from './core';

export const pokemonApi = new Http(API_BASE_URL);
