"use client";

import { useTheme } from "next-themes";

export default function ThemedBg({ thumbnail }: { thumbnail: string }) {
  const { resolvedTheme } = useTheme();
  return (
    <div
      className="fixed -z-50 h-screen w-screen bg-cover bg-no-repeat"
      style={
        resolvedTheme
          ? {
              backgroundImage:
                resolvedTheme === "dark"
                  ? `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.95)), url(${thumbnail})`
                  : `linear-gradient(rgba(255, 255,255, 0.9), rgba(255, 255, 255, 0.92)), url(${thumbnail})`,
            }
          : undefined
      }
    />
  );
}
