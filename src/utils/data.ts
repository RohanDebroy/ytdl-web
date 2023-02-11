import { YtdlResponse } from "@/types";
import { ParsedUrlQuery } from "querystring";
import * as sd from "simple-duration";

export const getFilteredData = (data: YtdlResponse) => {
  const { formats, title, uploader, thumbnail, duration } = data;
  return {
    title,
    uploader,
    thumbnail,
    duration: sd.stringify(Number(duration)),
    formats: formats.filter(
      (format) => format.acodec !== "none" || format.vcodec !== "none"
    ),
  };
};

export const stringifyQuery = (query: ParsedUrlQuery) =>
  Object.entries(query)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
