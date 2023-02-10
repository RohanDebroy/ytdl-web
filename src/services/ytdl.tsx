import { YtdlResponse } from "@/types";
import { getFilteredData } from "@/utils/data";

const ytdl = async (query: string, origin: string) => {
  const response = await fetch(`${origin}/api/info${query}`);
  const data = (await response.json()) as YtdlResponse;
  return getFilteredData(data);
};

export default ytdl;
