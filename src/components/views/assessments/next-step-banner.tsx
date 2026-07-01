import { TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { NextStep } from "@/models/assessment";

export function NextStepBanner({ nextStep }: { nextStep: NextStep }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100">
        <TrendingUp className="h-4 w-4 text-gray-700" />
      </div>
      <p className="flex-1 text-base font-bold text-gray-900">
        {nextStep.text}
      </p>
      <div className="flex items-center gap-2">
        {nextStep.secondaryActionLabel ? (
          <Button variant="outline">{nextStep.secondaryActionLabel}</Button>
        ) : null}
        <Button>{nextStep.primaryActionLabel}</Button>
      </div>
    </div>
  );
}
