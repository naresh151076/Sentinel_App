import { Button } from "@/components/ui/button";
import type { NextStepRecommendation } from "@/models/conversation";

export function NextStepBanner({
  nextStep,
}: {
  nextStep: NextStepRecommendation;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100">
        <nextStep.icon className="h-4 w-4 text-gray-700" />
      </div>
      <p className="flex-1 text-sm font-bold text-gray-900">
        {nextStep.text}
      </p>
      <Button size="sm">{nextStep.actionLabel}</Button>
    </div>
  );
}
