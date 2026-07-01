import { Sparkle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import type { EvidencePackBundle } from "@/models/conversation";

export function AiUnderstandingCard({
  bundle,
}: {
  bundle: EvidencePackBundle;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white p-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100">
        <Sparkle className="h-5 w-5 text-brand-red" />
      </div>
      <p className="flex-1 text-base text-gray-900">
        {bundle.understandingText}{" "}
        <strong className="font-bold">
          {bundle.understandingBoldFragment}
        </strong>{" "}
        request.
      </p>
      <div className="w-44 shrink-0 text-right">
        <div className="mb-1 text-sm font-bold text-gray-900">
          {bundle.confidencePercent}% confidence
        </div>
        <Progress value={bundle.confidencePercent} />
      </div>
    </div>
  );
}
