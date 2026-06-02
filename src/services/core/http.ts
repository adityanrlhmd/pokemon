import type { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';

import { ApiError } from './error';

export class Http {
  private api: AxiosInstance;

  constructor(baseURL: string) {
    this.api = axios.create({
      baseURL,
      headers: { 'Content-Type': 'application/json' },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.api.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        const data = error.response?.data ?? error;
        const message =
          (data as { message?: string })?.message ||
          error.message ||
          'Unexpected error occurred. Please try again.';

        throw new ApiError(message, {
          code: error.code,
          status: error.response?.status,
          data,
        });
      }
    );
  }

  async request<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const { data } = await this.api(url, config);
    return data as T;
  }

  get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>(url, { ...config, method: 'GET' });
  }
}
