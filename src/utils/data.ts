import { YtdlResponse } from "@/types";
import { ParsedUrlQuery } from "querystring";
import * as sd from "simple-duration";

export const getFilteredData = ({
  formats,
  title,
  uploader,
  thumbnail,
  duration,
}: YtdlResponse) => {
  return {
    title,
    uploader,
    thumbnail,
    duration: sd.stringify(duration),
    formats: formats.filter((format) => !!format.filesize),
  };
};

export const stringifyQuery = (query: ParsedUrlQuery) =>
  Object.entries(query)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
