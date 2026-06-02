/**
 * Base request structure with optional path and query params.
 * PokeAPI is read-only — no body requests needed.
 */
export interface BaseRequest<TPath = Record<string, string>, TParams = Record<string, unknown>> {
  path?: TPath;
  params?: TParams;
}

/**
 * Request with only path parameters.
 * @example GET /pokemon/:id
 */
export type PathOnlyRequest<TPath extends Record<string, string>> = BaseRequest<TPath, never>;

/**
 * Request with only query parameters.
 * @example GET /pokemon?limit=20&offset=0
 */
export type ParamsOnlyRequest<TParams extends Record<string, unknown>> = BaseRequest<
  never,
  TParams
>;

/**
 * Request with both path and query parameters.
 * @example GET /type/:id?limit=20
 */
export type PathParamsRequest<
  TPath extends Record<string, string>,
  TParams extends Record<string, unknown>,
> = BaseRequest<TPath, TParams>;
