import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="container grid h-full max-w-screen-2xl place-items-center">
      <form
        action="/result"
        className="flex w-full max-w-[30rem] items-center space-x-2"
      >
        <div className="relative w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="url"
            placeholder="Enter a video URL"
            name="url"
            required
            className="w-full pl-8"
            aria-label="Enter a video URL"
            autoComplete="off"
          />
        </div>
        <Separator orientation="vertical" className="h-7" />
        <Button size="sm" type="submit">
          Go
        </Button>
      </form>
    </div>
  );
}
