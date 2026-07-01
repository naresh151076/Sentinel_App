import { cn } from "@/lib/utils";
import type { ApprovalStep, ApprovalStepStatus } from "@/models/assessment";

const STATUS_LABELS: Record<ApprovalStepStatus, string> = {
  completed: "Completed",
  current: "In progress",
  upcoming: "Upcoming",
};

const STATUS_CLASSES: Record<ApprovalStepStatus, string> = {
  completed: "bg-emerald-50 text-emerald-600",
  current: "bg-amber-50 text-amber-600",
  upcoming: "bg-gray-100 text-gray-600",
};

export function RequiredApprovalsList({ steps }: { steps: ApprovalStep[] }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <h2 className="mb-4 text-lg font-bold text-gray-900">
        Required approvals
      </h2>
      <div className="flex flex-col gap-3">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex items-center gap-4 rounded-xl bg-gray-50 p-4"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-gray-200">
              <step.icon className="h-4 w-4 text-gray-700" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-bold text-gray-900">
                {step.title}
              </div>
              <div className="text-xs text-gray-500">{step.description}</div>
            </div>
            <span
              className={cn(
                "inline-flex shrink-0 items-center rounded-full px-3 py-1 text-xs font-bold",
                STATUS_CLASSES[step.status],
              )}
            >
              {STATUS_LABELS[step.status]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
