import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getMonitoringWorkflowSteps } from "@/controllers/monitoring.controller";

export function WorkflowPanel() {
  const steps = getMonitoringWorkflowSteps();

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xs font-bold tracking-wide text-gray-400 uppercase">
        Continuous monitoring workflow
      </h2>
      <div className="flex items-center gap-3">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.id} className="flex flex-1 items-center gap-3">
              <div className="flex flex-1 flex-col items-center gap-3 rounded-lg bg-gray-50 px-4 py-6 text-center">
                <Icon
                  className={cn(
                    "h-5 w-5",
                    step.emphasis ? "text-brand-red" : "text-gray-900",
                  )}
                />
                <div className="text-sm font-bold text-gray-900">
                  {step.title}
                </div>
              </div>
              {index < steps.length - 1 ? (
                <ArrowRight className="h-4 w-4 shrink-0 text-brand-red" />
              ) : null}
            </div>
          );
        })}
      </div>
      <p className="mt-5 text-xs text-gray-400">
        A six-month-old approval does not stay valid by default. When the
        metadata it relied on shifts — classification, geography, ownership —
        Sentinel re-opens it for human review.
      </p>
    </div>
  );
}
