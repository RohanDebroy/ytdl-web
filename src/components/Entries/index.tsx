import { Format } from "@/types";
import { getRecommendedFormat, sortFormats } from "@/utils/data";
import { Box, Typography, TypographyProps } from "@mui/material";
import React, { ElementType, FC, useState } from "react";
import Entry from "../Entry";

type EntriesProps = {
  formats: Format[];
  bestFormatId: string;
};

const Section: FC<{
  formats: Format[];
  title: string;
  keyPrefix?: string;
  TypographyProps?: Partial<TypographyProps>;
  titleComponent?: ElementType;
  variant?: TypographyProps["variant"];
}> = ({ formats, title, keyPrefix, titleComponent, variant = "h5" }) => {
  return formats && !!formats.length ? (
    <Box component="section" pt={1}>
      <Typography
        variant={variant}
        fontWeight="bold"
        component={titleComponent as any}
      >
        {title}
      </Typography>
      {formats.map((format) => {
        const key = keyPrefix
          ? `${keyPrefix}-${format.format_id}`
          : format.format_id;
        return <Entry key={key} format={format} />;
      })}
    </Box>
  ) : (
    <></>
  );
};

const Entries: FC<EntriesProps> = ({ bestFormatId, formats }) => {
  const [recommendedFormats] = useState(() =>
    getRecommendedFormat(formats, bestFormatId)
  );
  const [{ audio, both, video }] = useState(() => sortFormats(formats));
  return (
    <>
      <Section
        title="Recommended Formats"
        formats={recommendedFormats}
        keyPrefix="recommended"
      />
      <Box component="section" pt={2}>
        <Typography variant={"h5"} fontWeight="bold">
          All Available Formats
        </Typography>
        <Section
          title="Audio & Video"
          formats={both}
          titleComponent="h3"
          variant="h6"
        />
        <Section
          title="Audio Only"
          formats={audio}
          titleComponent="h3"
          variant="h6"
        />
        <Section
          title="Video Only"
          formats={video}
          titleComponent="h3"
          variant="h6"
        />
      </Box>
      {!recommendedFormats.length && !formats.length && (
        <h2>No formats available!!!</h2>
      )}
    </>
  );
};

export default Entries;
