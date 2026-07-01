import { cn } from "@/lib/utils";
import type { RequestStatus } from "@/models/governance";

const STATUS_LABELS: Record<RequestStatus, string> = {
  draft: "Draft",
  "in-review": "In review",
  "pending-approval": "Pending approval",
  approved: "Approved",
  rejected: "Rejected",
  escalated: "Escalated",
};

const STATUS_CLASSES: Record<RequestStatus, string> = {
  draft: "bg-gray-100 text-gray-600",
  "in-review": "bg-amber-50 text-amber-600",
  "pending-approval": "bg-amber-50 text-amber-600",
  approved: "bg-emerald-50 text-emerald-600",
  rejected: "bg-red-50 text-brand-red",
  escalated: "bg-gray-900 text-white",
};

export function AssessmentStatusBadge({ status }: { status: RequestStatus }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-bold",
        STATUS_CLASSES[status],
      )}
    >
      {STATUS_LABELS[status]}
    </span>
  );
}
