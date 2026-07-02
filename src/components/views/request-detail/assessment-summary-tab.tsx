import { DecisionBasisCard } from "@/components/views/request-detail/decision-basis-card";
import { AssessmentOutcomeCard } from "@/components/views/request-detail/assessment-outcome-card";
import { RecommendationCard } from "@/components/views/request-detail/recommendation-card";
import { KeyEvidenceCard } from "@/components/views/request-detail/key-evidence-card";
import { ApprovalPathCard } from "@/components/views/request-detail/approval-path-card";
import { NextStepCard } from "@/components/views/request-detail/next-step-card";
import type { RequestDetail } from "@/models/governance";

export function AssessmentSummaryTab({ request }: { request: RequestDetail }) {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <DecisionBasisCard items={request.decisionBasis} />
        <AssessmentOutcomeCard outcome={request.outcome} />
        <RecommendationCard recommendation={request.recommendation} />
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[2fr_2fr_1.2fr]">
        <KeyEvidenceCard items={request.evidence} />
        <ApprovalPathCard steps={request.approvalPath} />
        <NextStepCard
          text={request.nextStep.text}
          actionLabel={request.nextStep.actionLabel}
        />
      </div>
    </div>
  );
}
