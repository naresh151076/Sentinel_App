import {
  AlertTriangle,
  Clock,
  CircleDot,
  History,
  Radar,
  Settings,
  ShieldAlert,
} from "lucide-react";
import { ROUTES } from "@/constants/routes";
import type {
  DomainApproval,
  MonitoringAlert,
  MonitoringStat,
  MonitoringWorkflowStep,
} from "@/models/monitoring";

// TODO: replace mock data with real governance API calls once available.
const MONITORING_STATS: MonitoringStat[] = [
  {
    id: "governance-health",
    value: "96%",
    label: "Governance health",
    sublabel: "+3% vs last month",
    trend: { label: "+3% vs last month", direction: "up" },
    sparkline: [40, 44, 42, 46, 50, 48, 60, 58, 66],
  },
  {
    id: "active-approvals",
    value: "128",
    label: "Active approvals",
    sublabel: "↑ 12 new this month",
  },
  {
    id: "approvals-at-risk",
    value: "5",
    label: "Approvals at risk",
    sublabel: "Metadata changed",
    emphasis: true,
  },
  {
    id: "overdue-revalidations",
    value: "3",
    label: "Overdue revalidations",
    sublabel: "Action required",
    emphasis: true,
  },
];

const MONITORING_ALERTS: MonitoringAlert[] = [
  {
    id: "dataset-classification-changed",
    severity: "critical",
    icon: History,
    title: "Dataset classification changed",
    description: "FR_RETAIL_TXN reclassified C2 → C3 · impacts 4 approved usages",
    actionLabel: "Review",
    href: `${ROUTES.monitoring}/dataset-classification-changed`,
  },
  {
    id: "application-rehosted",
    severity: "warning",
    icon: AlertTriangle,
    title: "Application re-hosted out of region",
    description: "Pricing app moved EU → non-EEA · 2 approvals affected",
    actionLabel: "Review",
    href: `${ROUTES.monitoring}/application-rehosted`,
  },
  {
    id: "data-owner-changed",
    severity: "info",
    icon: Clock,
    title: "Data owner changed",
    description: "HR analytics dataset · new owner must re-attest · 2 pending",
    actionLabel: "Review",
    href: `${ROUTES.monitoring}/data-owner-changed`,
  },
];

const DOMAIN_APPROVALS: DomainApproval[] = [
  { id: "retail-banking", label: "Retail Banking", count: 74 },
  { id: "finance-markets", label: "Finance & Markets", count: 52 },
  { id: "human-resources", label: "Human Resources", count: 38 },
  { id: "it-operations", label: "IT & Operations", count: 29 },
  { id: "compliance-legal", label: "Compliance & Legal", count: 17 },
];

const MONITORING_WORKFLOW_STEPS: MonitoringWorkflowStep[] = [
  { id: "continuous-monitoring", icon: Radar, title: "Continuous monitoring" },
  { id: "change-detected", icon: CircleDot, title: "Change detected" },
  { id: "risk-re-evaluated", icon: Settings, title: "Risk re-evaluated" },
  {
    id: "approval-flagged",
    icon: ShieldAlert,
    title: "Approval flagged",
    emphasis: true,
  },
];

export function getMonitoringStats(): MonitoringStat[] {
  return MONITORING_STATS;
}

export function getMonitoringAlerts(): MonitoringAlert[] {
  return MONITORING_ALERTS;
}

export function getDomainApprovals(): DomainApproval[] {
  return DOMAIN_APPROVALS;
}

export function getMonitoringWorkflowSteps(): MonitoringWorkflowStep[] {
  return MONITORING_WORKFLOW_STEPS;
}

export function getTotalMonitoredApprovals(): number {
  return DOMAIN_APPROVALS.reduce((total, domain) => total + domain.count, 0);
}
