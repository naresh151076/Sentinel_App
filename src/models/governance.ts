import type { LucideIcon } from "lucide-react";

export type RequestStatus =
  | "draft"
  | "in-review"
  | "pending-approval"
  | "approved"
  | "rejected"
  | "escalated";

export type RiskLevel = "low" | "medium" | "high" | "critical";

export type ResidencyTier = "R1" | "R2" | "R3" | "R4";

export interface GovernanceStat {
  id: string;
  value: string | number;
  label: string;
  sublabel: string;
  emphasis?: boolean;
}

export type RequestBadgeVariant =
  | "critical"
  | "warning"
  | "success"
  | "neutral"
  | "dark";

export interface RequestBadge {
  label: string;
  variant: RequestBadgeVariant;
}

export interface RecentRequestItem {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  badge: RequestBadge;
  href: string;
}

export interface AttentionItem {
  id: string;
  title: string;
  description: string;
  href: string;
}

export interface RequestTableRow {
  id: string;
  title: string;
  code: string;
  dataset: string;
  pattern: string;
  status: RequestBadge;
  risk: RequestBadge;
  aiConfidence: number;
  updated: string;
  href: string;
}

export interface DecisionBasisItem {
  label: string;
  detail: string;
}

export interface AssessmentOutcome {
  riskLevel: RiskLevel;
  riskLabel: string;
  confidencePercent: number;
  summary: string;
}

export interface Recommendation {
  title: string;
  description: string;
  conditionsCount: number;
}

export interface ApprovalStep {
  order: number;
  role: string;
  subtitle: string;
}

export interface RequestDetailTab {
  id: string;
  label: string;
}

export interface RequestDetail {
  id: string;
  code: string;
  title: string;
  type: string;
  createdLabel: string;
  lastUpdatedLabel: string;
  owner: string;
  currentApprovalStage: string;
  status: RequestBadge;
  decisionBasis: DecisionBasisItem[];
  outcome: AssessmentOutcome;
  recommendation: Recommendation;
  evidence: any[];
  approvalPath: ApprovalStep[];
  nextStep: {
    text: string;
    actionLabel: string;
  };
}
