import type { LucideIcon } from "lucide-react";
import type { RequestStatus, RiskLevel } from "@/models/governance";

export interface MyRequestItem {
  id: string;
  title: string;
  patternLabel: string;
  patternIcon: LucideIcon;
  status: RequestStatus;
  riskLevel: RiskLevel;
  submittedBy: string;
  lastUpdated: string;
  href: string;
}

export interface MyRequestsSummaryStat {
  id: string;
  value: number;
  label: string;
  sublabel: string;
  emphasis?: boolean;
}
