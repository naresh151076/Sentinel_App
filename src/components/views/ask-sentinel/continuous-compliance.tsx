import { CheckCircle2 } from "lucide-react";
import { COMPLIANCE_DESCRIPTION } from "@/constants/copy";
import { getActiveApprovalsCount } from "@/controllers/governance.controller";

export function ContinuousCompliance() {
  const activeApprovals = getActiveApprovalsCount();

  return (
    <div>
      <h2 className="mb-4 text-lg font-bold text-gray-900">
        Continuous compliance
      </h2>
      <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
        <p className="mb-4 text-xs leading-relaxed text-gray-600">
          {COMPLIANCE_DESCRIPTION}
        </p>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-gray-900" />
          <div className="text-sm font-bold leading-tight text-gray-900">
            Monitoring is active across {activeApprovals} approvals
          </div>
        </div>
      </div>
    </div>
  );
}
