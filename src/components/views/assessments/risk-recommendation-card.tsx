import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import {
  riskLevelLabel,
  riskLevelTextClass,
} from "@/components/views/assessments/risk-level-badge";
import type { Recommendation, RiskOutcome } from "@/models/assessment";

export function RiskRecommendationCard({
  riskOutcome,
  recommendation,
}: {
  riskOutcome: RiskOutcome;
  recommendation: Recommendation;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6">
      <h2 className="mb-4 text-lg font-bold text-gray-900">Risk outcome</h2>
      <div className="mb-1 flex items-baseline gap-2">
        <span className="text-4xl font-bold text-gray-900">
          {riskOutcome.confidencePercent}%
        </span>
        <span className="text-base text-gray-500">confidence</span>
      </div>
      <p
        className={cn(
          "mb-3 text-sm font-bold",
          riskLevelTextClass(riskOutcome.riskLevel),
        )}
      >
        {riskLevelLabel(riskOutcome.riskLevel)}
      </p>
      <Progress value={riskOutcome.confidencePercent} />
      <p className="mt-3 mb-6 text-sm text-gray-500">{riskOutcome.summary}</p>

      <div className="rounded-xl bg-gray-50 p-4">
        <div className="mb-2 text-sm text-gray-500">Recommendation</div>
        <div className="mb-2 text-base font-bold text-gray-900">
          {recommendation.decision}
        </div>
        <p className="mb-3 text-sm text-gray-600">{recommendation.rationale}</p>
        <div className="mb-2 text-xs font-bold tracking-wide text-gray-400 uppercase">
          Conditions
        </div>
        <ul className="flex flex-col gap-1.5">
          {recommendation.conditions.map((condition) => (
            <li
              key={condition}
              className="text-sm text-gray-600 before:mr-2 before:text-brand-red before:content-['—']"
            >
              {condition}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
