import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ConfidenceGauge } from "@/components/views/request-detail/confidence-gauge";
import type { AssessmentOutcome } from "@/models/governance";

export function AssessmentOutcomeCard({
  outcome,
}: {
  outcome: AssessmentOutcome;
}) {
  return (
    <Card className="h-full text-base">
      <CardHeader className="pb-3">
        <CardTitle className="font-semibold">Assessment Outcome</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col items-center pt-0">
        <ConfidenceGauge
          percent={outcome.confidencePercent}
          riskLabel={outcome.riskLabel}
          riskLevel={outcome.riskLevel}
        />
        <p className="mt-4 text-center text-sm text-muted-foreground">
          {outcome.summary}
        </p>
      </CardContent>
    </Card>
  );
}
