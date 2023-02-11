import React, { FC, ReactNode } from "react";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  AccordionActions,
  Button,
  IconButton,
  Chip,
} from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Format } from "@/types";

type EntryProps = {
  format: Format;
};

const Entry: FC<EntryProps> = ({ format }) => {
  const handleCopyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
  };
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography>{format.format}</Typography>
      </AccordionSummary>
      <AccordionDetails
        style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}
      >
        <Chips format={format} />
      </AccordionDetails>
      <AccordionActions sx={{ flex: 1, ml: "auto", gap: "10px" }}>
        <Button
          target="__blank"
          rel="noreferrer"
          href={format.url}
          variant="outlined"
        >
          Open in new tab
        </Button>
        <IconButton
          onClick={() => handleCopyToClipboard(format.url)}
          sx={{ color: "orange" }}
        >
          <ContentCopyIcon />
        </IconButton>
      </AccordionActions>
    </Accordion>
  );
};

export default Entry;

const Chips: FC<{ format: Format }> = ({ format }) => {
  const displayKeys: Array<keyof Format> = [
    "format",
    "format_id",
    "ext",
    "filesize",
    "format_note",
    "height",
    "width",
    "vcodec",
    "acodec",
  ];
  return (
    <>
      {displayKeys.reduce((acc, key) => {
        if (format[key]) {
          const chip = (
            <Chip
              key={key}
              variant="outlined"
              label={`${key}: ${format[key]}`}
            />
          );
          acc.push(chip);
        }
        return acc;
      }, [] as ReactNode[])}
    </>
  );
};
