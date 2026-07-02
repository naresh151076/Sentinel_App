import { ClipboardList, Cloud, FolderOpen, Shield } from "lucide-react";
import { MONITORING_LOOP_INTRO, MONITORING_WORKFLOW_CAPTION } from "@/constants/copy";
import type {
  CapabilityItem,
  DomainDistribution,
  GovernanceHealthBreakdown,
  MonitoringAlert,
  MonitoringKpi,
} from "@/models/monitoring";

// TODO: replace mock data with real monitoring API calls once available.

const GOVERNANCE_HEALTH: GovernanceHealthBreakdown = {
  healthyPercent: 82,
  amberPercent: 13,
  redPercent: 5,
};

const MONITORING_KPIS: MonitoringKpi[] = [
  {
    id: "active-approvals",
    label: "Active approvals",
    value: 1248,
    trend: { label: "12% this week", positive: true },
    sparkline: [980, 1010, 1040, 1080, 1110, 1140, 1180, 1200, 1220, 1235, 1240, 1248],
    sparklineTone: "success",
  },
  {
    id: "approvals-at-risk",
    label: "Approvals at risk",
    value: 24,
    emphasis: true,
    sparkline: [14, 16, 15, 18, 17, 20, 19, 22, 21, 23, 22, 24],
    sparklineTone: "destructive",
  },
  {
    id: "metadata-changes",
    label: "Metadata changes impacting approvals",
    value: 17,
    sparkline: [8, 10, 9, 12, 11, 14, 13, 15, 14, 16, 15, 17],
    sparklineTone: "destructive",
  },
  {
    id: "overdue-revalidations",
    label: "Overdue revalidations",
    value: 8,
    emphasis: true,
    sparkline: [3, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 8],
    sparklineTone: "warning",
  },
];

const MONITORING_ALERTS: MonitoringAlert[] = [
  {
    id: "dataset-classification-changed",
    title: "Dataset classification changed",
    impact: "High",
    affectedApprovals: 3,
    detected: "Jun 17, 2026",
    status: "New",
  },
  {
    id: "application-moved-region",
    title: "Application moved region",
    impact: "Medium",
    affectedApprovals: 5,
    detected: "Jun 16, 2026",
    status: "In Review",
  },
  {
    id: "policy-retention-updated",
    title: "Policy updated: Data Retention",
    impact: "Low",
    affectedApprovals: 12,
    detected: "Jun 14, 2026",
    status: "Informational",
  },
];

const DOMAIN_DISTRIBUTION: DomainDistribution[] = [
  { name: "Retail Banking", percent: 45 },
  { name: "HR", percent: 22 },
  { name: "Finance", percent: 15 },
  { name: "IT & Operations", percent: 10 },
  { name: "Other", percent: 8 },
];

const CAPABILITY_ITEMS: CapabilityItem[] = [
  {
    title: "Continuous Monitoring",
    description:
      "Sentinel monitors metadata and context changes across all sources.",
    icon: Shield,
    iconTone: "success",
  },
  {
    title: "Change Detected",
    description: "Impacted approvals are identified and risk is assessed.",
    icon: FolderOpen,
    iconTone: "primary",
  },
  {
    title: "Action Taken",
    description: "Alerts raised, reviews triggered, and owners notified.",
    icon: ClipboardList,
    iconTone: "primary",
  },
  {
    title: "Data Security & Privacy by Design",
    description:
      "All evaluations respect data access policies and user entitlements.",
    icon: Cloud,
    iconTone: "info",
  },
];

export function getGovernanceHealth(): GovernanceHealthBreakdown {
  return GOVERNANCE_HEALTH;
}

export function getMonitoringKpis(): MonitoringKpi[] {
  return MONITORING_KPIS;
}

export function getMonitoringAlerts(): MonitoringAlert[] {
  return MONITORING_ALERTS;
}

export function getDomainDistribution(): DomainDistribution[] {
  return DOMAIN_DISTRIBUTION;
}

export function getCapabilityItems(): CapabilityItem[] {
  return CAPABILITY_ITEMS;
}

export function getMonitoringLoopIntro(): string {
  return MONITORING_LOOP_INTRO;
}

export function getMonitoringLoopCaption(): string {
  return MONITORING_WORKFLOW_CAPTION;
}
