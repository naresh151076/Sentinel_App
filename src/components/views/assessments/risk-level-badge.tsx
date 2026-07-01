import { cn } from "@/lib/utils";
import type { RiskLevel } from "@/models/governance";

const RISK_LABELS: Record<RiskLevel, string> = {
  low: "Low risk",
  medium: "Medium risk",
  high: "High risk",
  critical: "Critical risk",
};

const RISK_CLASSES: Record<RiskLevel, string> = {
  low: "bg-emerald-50 text-emerald-600",
  medium: "bg-amber-50 text-amber-600",
  high: "bg-red-50 text-brand-red",
  critical: "bg-gray-900 text-white",
};

const RISK_TEXT_CLASSES: Record<RiskLevel, string> = {
  low: "text-emerald-600",
  medium: "text-amber-600",
  high: "text-brand-red",
  critical: "text-gray-900",
};

export function riskLevelLabel(riskLevel: RiskLevel): string {
  return RISK_LABELS[riskLevel];
}

export function riskLevelTextClass(riskLevel: RiskLevel): string {
  return RISK_TEXT_CLASSES[riskLevel];
}

export function RiskLevelBadge({ riskLevel }: { riskLevel: RiskLevel }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-bold",
        RISK_CLASSES[riskLevel],
      )}
    >
      {RISK_LABELS[riskLevel]}
    </span>
  );
}
