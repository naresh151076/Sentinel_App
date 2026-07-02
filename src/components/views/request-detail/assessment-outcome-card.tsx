import { Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import type { AssessmentOutcome } from "@/models/governance";

const RISK_COLORS = {
  low: { bg: "bg-green-100", text: "text-green-700", dot: "bg-green-600" },
  medium: {
    bg: "bg-amber-100",
    text: "text-amber-700",
    dot: "bg-amber-600",
  },
  high: { bg: "bg-red-100", text: "text-red-700", dot: "bg-red-600" },
  critical: {
    bg: "bg-red-100",
    text: "text-red-700",
    dot: "bg-red-700",
  },
};

export function AssessmentOutcomeCard({
  outcome,
}: {
  outcome: AssessmentOutcome;
}) {
  const colors = RISK_COLORS[outcome.riskLevel];

  return (
    <Card>
      <CardContent className="pt-6">
        <CardTitle className="mb-6 text-base">Assessment Outcome</CardTitle>
        <div className="flex flex-col items-center gap-4">
          <div
            className={cn(
              "flex h-16 w-16 items-center justify-center rounded-full",
              colors.bg,
            )}
          >
            <Shield className={cn("h-8 w-8", colors.text)} />
          </div>
          <div className="text-center">
            <div className={cn("text-2xl font-bold", colors.text)}>
              {outcome.riskLabel}
            </div>
            <div className="mt-1 text-sm text-gray-600">
              Confidence: {outcome.confidencePercent}%
            </div>
          </div>
        </div>
        <p className="mt-4 text-center text-sm text-gray-600">
          {outcome.summary}
        </p>
      </CardContent>
    </Card>
  );
}
