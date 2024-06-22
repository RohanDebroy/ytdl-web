"use client";

import { useTheme } from "next-themes";
import { CSSProperties, useEffect, useState } from "react";

export default function ThemedBg({ thumbnail }: { thumbnail: string }) {
  const { resolvedTheme } = useTheme();

  // INFO: Fix/Hack for weird server client mismatch
  const [style, setStyle] = useState<CSSProperties | undefined>(undefined);
  useEffect(() => {
    if (!resolvedTheme) return;

    setStyle({
      backgroundImage:
        resolvedTheme === "dark"
          ? `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.95)), url(${thumbnail})`
          : `linear-gradient(rgba(255, 255,255, 0.9), rgba(255, 255, 255, 0.92)), url(${thumbnail})`,
    });
  }, [resolvedTheme, thumbnail]);

  return (
    <div
      key={crypto.randomUUID()}
      className="fixed -z-50 h-screen w-screen bg-cover bg-no-repeat"
      style={style}
    />
  );
}
