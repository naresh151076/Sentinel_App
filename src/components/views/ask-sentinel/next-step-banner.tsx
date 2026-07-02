import { Button } from "@/components/ui/button";
import type { NextStepRecommendation } from "@/models/conversation";

export function NextStepBanner({
  nextStep,
}: {
  nextStep: NextStepRecommendation;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100">
        <nextStep.icon className="h-4 w-4 text-gray-700" />
      </div>
      <p className="flex-1 text-base font-bold text-gray-900">
        {nextStep.text}
      </p>
      <Button className="h-11 px-6 text-base font-semibold">{nextStep.actionLabel}</Button>
    </div>
  );
}
