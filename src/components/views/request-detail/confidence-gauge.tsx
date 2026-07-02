import { cn } from "@/lib/utils";
import type { RiskLevel } from "@/models/governance";

const GAUGE_COLORS: Record<RiskLevel, string> = {
  low: "stroke-success",
  medium: "stroke-warning-foreground",
  high: "stroke-destructive",
  critical: "stroke-destructive",
};

const LABEL_COLORS: Record<RiskLevel, string> = {
  low: "text-success",
  medium: "text-warning-foreground",
  high: "text-destructive",
  critical: "text-destructive",
};

const RADIUS = 52;
const STROKE = 9;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function ConfidenceGauge({
  percent,
  riskLabel,
  riskLevel,
}: {
  percent: number;
  riskLabel: string;
  riskLevel: RiskLevel;
}) {
  const offset = CIRCUMFERENCE - (percent / 100) * CIRCUMFERENCE;

  return (
    <div className="relative mx-auto h-40 w-40">
      <svg
        viewBox="0 0 120 120"
        className="h-full w-full -rotate-90"
        aria-hidden
      >
        <circle
          cx="60"
          cy="60"
          r={RADIUS}
          fill="none"
          className="stroke-muted"
          strokeWidth={STROKE}
        />
        <circle
          cx="60"
          cy="60"
          r={RADIUS}
          fill="none"
          className={cn(GAUGE_COLORS[riskLevel], "transition-all duration-700")}
          strokeWidth={STROKE}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className={cn("text-2xl font-bold leading-tight", LABEL_COLORS[riskLevel])}>
          {riskLabel}
        </span>
        <span className="mt-1 text-sm font-medium text-muted-foreground">
          {percent}% confidence
        </span>
      </div>
    </div>
  );
}
