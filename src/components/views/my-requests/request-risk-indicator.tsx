import { cn } from "@/lib/utils";
import type { RiskLevel } from "@/models/governance";

const RISK_DOT_CLASSES: Record<RiskLevel, string> = {
  low: "bg-emerald-600",
  medium: "bg-amber-600",
  high: "bg-brand-red",
  critical: "bg-gray-900",
};

const RISK_TEXT_CLASSES: Record<RiskLevel, string> = {
  low: "text-emerald-600",
  medium: "text-amber-600",
  high: "text-brand-red",
  critical: "text-gray-900",
};

const RISK_LABELS: Record<RiskLevel, string> = {
  low: "Low",
  medium: "Medium",
  high: "High",
  critical: "Critical",
};

export function RequestRiskIndicator({ riskLevel }: { riskLevel: RiskLevel }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm font-medium">
      <span
        className={cn(
          "h-1.5 w-1.5 shrink-0 rounded-full",
          RISK_DOT_CLASSES[riskLevel],
        )}
      />
      <span className={RISK_TEXT_CLASSES[riskLevel]}>
        {RISK_LABELS[riskLevel]}
      </span>
    </span>
  );
}
