import { ParsedUrlQuery } from "querystring";

export const stringifyQuery = (query: ParsedUrlQuery) =>
  Object.entries(query)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
