import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Page() {
  return (
    <div className="container grid place-items-center">
      <form
        className="inline-flex w-full max-w-[30rem] space-x-2"
        action="/result"
      >
        <Input type="search" name="url" placeholder="enter url..." required />
        <Button type="submit" size="icon">
          <Search />
        </Button>
      </form>
    </div>
  );
}
