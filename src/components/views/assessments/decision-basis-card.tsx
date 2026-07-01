import Link from "next/link";
import { ArrowRight, Target } from "lucide-react";
import type { DecisionBasis } from "@/models/assessment";

export function DecisionBasisCard({
  decisionBasis,
}: {
  decisionBasis: DecisionBasis;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <h2 className="mb-4 text-lg font-bold text-gray-900">Decision basis</h2>

      <div className="mb-4 flex items-start gap-3 rounded-xl bg-gray-50 p-4">
        <Target className="mt-0.5 h-5 w-5 shrink-0 text-gray-500" />
        <div>
          <div className="mb-1 text-sm text-gray-500">Matched pattern</div>
          <div className="text-base font-bold text-gray-900">
            {decisionBasis.matchedPattern}
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="mb-2 text-sm font-bold text-gray-900">
          Applicable rules
        </div>
        <ul className="flex flex-col gap-2">
          {decisionBasis.applicableRules.map((rule) => (
            <li
              key={rule}
              className="rounded-lg bg-gray-50 p-3 text-sm text-gray-600"
            >
              {rule}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <div className="mb-2 text-sm font-bold text-gray-900">
          Policy alignment
        </div>
        <p className="text-sm text-gray-600">
          {decisionBasis.policyAlignmentSummary}
        </p>
      </div>

      <div>
        <div className="mb-2 text-sm font-bold text-gray-900">
          Similar past approvals
        </div>
        <div className="flex flex-col gap-2">
          {decisionBasis.similarApprovals.map((approval) => (
            <div
              key={approval.id}
              className="flex items-center justify-between gap-4 rounded-lg bg-gray-50 p-3"
            >
              <div className="min-w-0">
                <div className="truncate text-sm font-medium text-gray-900">
                  {approval.title}
                </div>
                <div className="text-xs text-gray-500">
                  {approval.outcome} · {approval.decidedOn}
                </div>
              </div>
              <Link
                href={approval.href}
                className="flex shrink-0 items-center gap-1 text-xs font-bold text-brand-red hover:underline"
              >
                View details
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
