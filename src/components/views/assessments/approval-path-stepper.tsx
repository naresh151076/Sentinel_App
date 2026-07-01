import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ApprovalStep } from "@/models/assessment";

export function ApprovalPathStepper({ steps }: { steps: ApprovalStep[] }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <h2 className="mb-5 text-lg font-bold text-gray-900">
        Estimated approval path
      </h2>
      <div className="flex items-center gap-3">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isCurrent = step.status === "current";
          const isCompleted = step.status === "completed";
          return (
            <div key={step.id} className="flex flex-1 items-center gap-3">
              <div
                className={cn(
                  "flex flex-1 flex-col items-center gap-3 rounded-lg px-4 py-6 text-center",
                  isCurrent ? "bg-red-50" : "bg-gray-50",
                )}
              >
                <div
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-full",
                    isCurrent
                      ? "bg-brand-red text-white ring-4 ring-red-100"
                      : isCompleted
                        ? "bg-gray-900 text-white"
                        : "bg-white text-gray-400 ring-1 ring-gray-200",
                  )}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">
                    {step.title}
                  </div>
                  <div className="mt-1 text-xs text-gray-500">
                    {step.description}
                  </div>
                </div>
              </div>
              {index < steps.length - 1 ? (
                <ArrowRight className="h-4 w-4 shrink-0 text-brand-red" />
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
