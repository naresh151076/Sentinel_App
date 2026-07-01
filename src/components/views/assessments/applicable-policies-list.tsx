import { ScrollText } from "lucide-react";
import type { PolicyAlignment } from "@/models/assessment";

export function ApplicablePoliciesList({
  policies,
}: {
  policies: PolicyAlignment[];
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <h2 className="mb-4 text-lg font-bold text-gray-900">
        Applicable policies
      </h2>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        {policies.map((policy) => (
          <div key={policy.id} className="rounded-xl bg-gray-50 p-4">
            <div className="mb-2 flex items-start gap-3">
              <ScrollText className="mt-0.5 h-5 w-5 shrink-0 text-gray-500" />
              <div className="text-sm font-bold text-gray-900">
                {policy.policyName}
              </div>
            </div>
            <p className="text-sm text-gray-500">{policy.rationale}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
