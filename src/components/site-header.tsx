import { siteConfig } from "@/config/site";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { cn } from "@/utils/helpers";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between max-sm:px-4">
        <Link
          className={cn(
            buttonVariants({ variant: "link" }),
            "bg-gradient-to-tr from-orange-500 to-purple-500 bg-clip-text text-2xl hover:[-webkit-text-fill-color:transparent] max-sm:text-xl",
          )}
          href="/"
        >
          {siteConfig.name}
        </Link>

        <nav className="flex items-center space-x-2">
          <Link
            className={buttonVariants({
              variant: "ghost",
              size: "icon",
            })}
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
          >
            <GitHubLogoIcon className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            className={buttonVariants({ variant: "ghost", size: "icon" })}
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <TwitterLogoIcon className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
