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
  value: number;
  label: string;
  sublabel: string;
  emphasis?: boolean;
}

export type RequestBadgeVariant = "critical" | "neutral" | "dark";

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
