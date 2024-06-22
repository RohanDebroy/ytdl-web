/* eslint-disable @next/next/no-img-element */
import FormatSection from "@/components/formats-section";
import ThemedBg from "@/components/themed-bg";
import { Accordion } from "@/components/ui/accordion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { filterFormats } from "@/utils/data";
import { getRelativeTime, humanizeNumber } from "@/utils/helpers";
import { Format, YtdlResponse } from "@/types";
import { RowSpacingIcon } from "@radix-ui/react-icons";
import { RedirectType, redirect } from "next/navigation";
import * as sd from "simple-duration";
import { getUrl } from "@/utils/url";

type ResultProps = {
  searchParams: {
    url: string | undefined;
  };
};

export default async function Result({ searchParams: { url } }: ResultProps) {
  console.log(url);
  // if (!url) redirect("/", RedirectType.replace);

  const response = await fetch(getUrl(`/api/info?url=${url}`));

  if (response.status !== 200) redirect("/", RedirectType.replace);
  const data = (await response.json()) as YtdlResponse;

  const { recommended, audio, both, video } = filterFormats(
    data.formats as unknown as Format[],
    data.format_id,
  );

  return (
    <>
      <ThemedBg thumbnail={data.thumbnail} />
      <div className="container relative h-[calc(100vh-4rem)] py-4 md:grid md:grid-cols-5 md:gap-6">
        <div className="space-y-2 md:col-span-2">
          <div className="space-y-2">
            <img
              src={data.thumbnail}
              alt=""
              className="w-full rounded max-md:h-72 max-md:object-cover"
            />
            <h1 className="min-md:text-3xl line-clamp-2 text-xl font-bold">
              {data.title}
            </h1>
            <div className="flex flex-wrap items-center  justify-between text-center text-xs text-muted-foreground">
              <span className="font-bold text-primary">By {data.uploader}</span>
              <Separator className="h-5" orientation="vertical" />
              <span>
                {humanizeNumber(data.channel_follower_count)} subscribers
              </span>
              <Separator className="h-5" orientation="vertical" />
              <span>{humanizeNumber(data.view_count)} views</span>
              <Separator className="h-5" orientation="vertical" />
              <span>{sd.stringify(Number(data.duration))} long</span>
              {!!data.release_timestamp && (
                <>
                  <Separator className="h-5" orientation="vertical" />
                  <span>{getRelativeTime(data.release_timestamp)}</span>
                </>
              )}
            </div>
            <Separator />
          </div>
          <ScrollArea className="hidden h-[calc(100vh-30rem)] md:block">
            <p className="h-3 whitespace-pre-wrap break-words ">
              {data.description}
            </p>
          </ScrollArea>
        </div>
        <div className="space-y-2 max-md:py-4 md:col-span-3">
          <ScrollArea className="md:h-[calc(100vh-6rem)]">
            <Accordion
              type="single"
              collapsible
              className="w-full space-y-6 md:pr-2"
            >
              <FormatSection title="Audio & Video" formats={both} />
              <FormatSection title="Best Formats" formats={recommended} />
              <Collapsible>
                <CollapsibleTrigger className="mb-4 flex w-full justify-between">
                  <h2>Show all available formats</h2>
                  <RowSpacingIcon />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <FormatSection title="Audio Only" formats={audio} />
                  <FormatSection title="Video Only" formats={video} />
                </CollapsibleContent>
              </Collapsible>
            </Accordion>
          </ScrollArea>
        </div>
      </div>
    </>
  );
}
