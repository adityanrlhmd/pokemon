export class ApiError extends Error {
  code?: string;
  status?: number;
  data?: unknown;

  constructor(message: string, options?: { code?: string; status?: number; data?: unknown }) {
    super(message);
    this.name = 'ApiError';
    this.code = options?.code ?? 'UNKNOWN_ERROR';
    this.status = options?.status ?? 500;
    this.data = options?.data ?? null;
  }
}
