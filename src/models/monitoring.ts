import type { LucideIcon } from "lucide-react";

export interface MonitoringTrend {
  label: string;
  direction: "up" | "down";
}

export interface MonitoringStat {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  emphasis?: boolean;
  trend?: MonitoringTrend;
  sparkline?: number[];
}

export type AlertSeverity = "critical" | "warning" | "info";

export interface MonitoringAlert {
  id: string;
  severity: AlertSeverity;
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel: string;
  href: string;
}

export interface DomainApproval {
  id: string;
  label: string;
  count: number;
}

export interface MonitoringWorkflowStep {
  id: string;
  icon: LucideIcon;
  title: string;
  emphasis?: boolean;
}
