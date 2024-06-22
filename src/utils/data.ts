import { Format, YtdlResponse } from "@/types";
import * as sd from "simple-duration";

const getFilteredFormats = (formats: Format[]) =>
  formats.filter(
    (format) => format.acodec !== "none" || format.vcodec !== "none",
  );

export const getFilteredData = (data: YtdlResponse) => {
  const { formats, title, uploader, thumbnail, duration, format_id } = data;
  return {
    title,
    uploader,
    thumbnail,
    bestFormatId: format_id,
    duration: sd.stringify(Number(duration)),
    formats: getFilteredFormats(formats),
  };
};

export const getRecommendedFormat = (formats: Format[], formatId: string) => {
  const bestFormats = formatId.split("+");
  return formats.filter((format) => bestFormats.includes(format.format_id));
};

const getAudioOnlyFormats = (formats: Format[]) =>
  formats.filter((format) => format.vcodec === "none");

const getVideoOnlyFormats = (formats: Format[]) =>
  formats.filter((format) => format.acodec === "none");

const getAudioAndVideoFormats = (formats: Format[]) =>
  formats.filter(
    (format) => format.acodec !== "none" && format.vcodec !== "none",
  );

export const sortFormats = (formats: Format[]) => {
  return {
    both: getAudioAndVideoFormats(formats),
    audio: getAudioOnlyFormats(formats),
    video: getVideoOnlyFormats(formats),
  };
};

export function filterFormats(formats: Format[], bestFormat: string) {
  const filteredFormats = getFilteredFormats(formats);
  return {
    recommended: getRecommendedFormat(filteredFormats, bestFormat),
    both: getAudioAndVideoFormats(filteredFormats),
    audio: getAudioOnlyFormats(filteredFormats),
    video: getVideoOnlyFormats(filteredFormats),
  };
}
