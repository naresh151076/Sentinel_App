import { AlertCircle } from "lucide-react";

export function ComplianceMonitoringBanner() {
  return (
    <div className="mt-8 flex items-start gap-3 rounded-2xl border border-red-100 bg-red-50 p-4">
      <AlertCircle className="h-5 w-5 shrink-0 text-brand-red mt-0.5" />
      <p className="text-sm text-gray-700">
        <span className="font-semibold text-gray-900">
          Sentinel continuously monitors approved usages for compliance.
        </span>
        {" "}
        You will be notified if anything changes that may impact your approvals.
      </p>
    </div>
  );
}
