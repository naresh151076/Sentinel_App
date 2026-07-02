import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function MyRequestsSearch() {
  return (
    <div className="flex flex-1 items-center gap-3 rounded-lg border border-border bg-background px-4 h-10">
      <Search className="h-4 w-4 text-muted-foreground flex-shrink-0" />
      <Input
        placeholder="Search requests..."
        className="border-0 bg-transparent p-0 text-sm placeholder:text-muted-foreground focus-visible:ring-0"
      />
    </div>
  );
}
