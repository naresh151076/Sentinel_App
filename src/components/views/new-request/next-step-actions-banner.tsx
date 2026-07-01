import { TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NextStepActionsBanner({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white p-4">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100">
        <TrendingUp className="h-4 w-4 text-gray-700" />
      </div>
      <p className="flex-1 text-base font-bold text-gray-900">{text}</p>
      <div className="flex items-center gap-2">
        <Button variant="outline">Save draft</Button>
        <Button variant="outline">Add context</Button>
        <Button>Prepare assessment</Button>
      </div>
    </div>
  );
}
