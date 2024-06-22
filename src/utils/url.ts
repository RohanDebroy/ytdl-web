import { ParsedUrlQuery } from "querystring";

export const stringifyQuery = (query: ParsedUrlQuery) =>
  Object.entries(query)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

// https://github.com/vercel/next.js/discussions/16429#discussioncomment-8842559
const BASE_URL =
  process.env.NODE_ENV === "production"
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000";

const INCLUDES_FORWARD_SLASH_AT_START_REGEX = /^\/(.|\n)*$/;
const INCLUDES_FORWARD_SLASH_AT_START = (string: string) =>
  INCLUDES_FORWARD_SLASH_AT_START_REGEX.test(string);

export const getUrl = (path: string) =>
  `${BASE_URL}${!INCLUDES_FORWARD_SLASH_AT_START(path) ? "/" : ""}${path}`;
