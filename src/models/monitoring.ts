import type { LucideIcon } from "lucide-react";

export interface GovernanceHealthBreakdown {
  healthyPercent: number;
  amberPercent: number;
  redPercent: number;
}

export interface MonitoringKpi {
  id: string;
  label: string;
  value: string | number;
  trend?: {
    label: string;
    positive?: boolean;
  };
  emphasis?: boolean;
  sparkline?: number[];
  sparklineTone?: "success" | "destructive" | "warning";
}

export type MonitoringAlertImpact = "High" | "Medium" | "Low";

export type MonitoringAlertStatus = "New" | "In Review" | "Informational";

export interface MonitoringAlert {
  id: string;
  title: string;
  impact: MonitoringAlertImpact;
  affectedApprovals: number;
  detected: string;
  status: MonitoringAlertStatus;
}

export interface DomainDistribution {
  name: string;
  percent: number;
}

export interface CapabilityItem {
  title: string;
  description: string;
  icon: LucideIcon;
  iconTone: "success" | "primary" | "info";
}
