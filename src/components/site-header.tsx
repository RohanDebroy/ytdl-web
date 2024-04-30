import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/utils/helpers";
import { Github } from "@/components/icons";
import { ThemeToggle } from "./theme-toggle";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { buttonVariants } from "./ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-auto flex items-center space-x-2">
          <span className="font-bold sm:inline-block">{siteConfig.name}</span>
        </Link>
        <nav className="flex items-center">
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <div
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                "w-9 px-0",
              )}
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
