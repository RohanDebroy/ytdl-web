"use client";

import { Format } from "@/types";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Badge } from "./ui/badge";
import { ReactNode, useRef, useState } from "react";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Copy, CopyCheck } from "lucide-react";

export const displayKeys = [
  "format",
  "format_id",
  "ext",
  "filesize",
  "format_note",
  "height",
  "width",
  "vcodec",
  "acodec",
] as const;

interface FormatSectionProps {
  title: string;
  formats: Format[];
}

export default function FormatSection({ formats, title }: FormatSectionProps) {
  const [isCopied, setIsCopied] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const handleCopyToClipboard = (url: string) => {
    clearTimeout(timeoutRef.current);
    navigator.clipboard.writeText(url);
    setIsCopied(true);
    timeoutRef.current = setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <section>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <>
        {formats.map((format) => (
          <AccordionItem key={format.format_id} value={format.format_id}>
            <AccordionTrigger>{format.format}</AccordionTrigger>
            <AccordionContent className="space-y-2">
              <div className="flex shrink-0 flex-wrap gap-2">
                {displayKeys.reduce((acc, key) => {
                  if (format[key]) {
                    const chip = (
                      <Badge key={key} variant="outline" className="bg-muted">
                        {`${key}: ${format[key]}`}
                      </Badge>
                    );
                    acc.push(chip);
                  }
                  return acc;
                }, [] as ReactNode[])}
              </div>
              <div className="flex items-center justify-end space-x-2">
                <Link
                  target="__blank"
                  rel="noreferrer"
                  className={buttonVariants({ size: "sm" })}
                  href={format.url}
                >
                  Open in new tab
                </Link>
                <Button
                  size="icon"
                  variant="secondary"
                  onClick={() => handleCopyToClipboard(format.url)}
                >
                  {!isCopied ? <Copy /> : <CopyCheck />}
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </>
    </section>
  );
}
