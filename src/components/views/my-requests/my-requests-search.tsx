import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function MyRequestsSearch() {
  return (
    <div className="flex gap-2">
      <div className="flex flex-1 items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-2.5">
        <Search className="h-4 w-4 text-gray-400 flex-shrink-0" />
        <Input
          placeholder="Search requests..."
          className="border-0 bg-transparent p-0 text-sm placeholder:text-gray-500 focus-visible:ring-0"
        />
      </div>
      <Button variant="outline" size="sm">
        <SlidersHorizontal className="h-4 w-4" />
      </Button>
    </div>
  );
}
