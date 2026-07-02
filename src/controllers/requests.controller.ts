import {
  BarChart3,
  CheckCircle2,
  Shield,
  ArrowRight,
  Lock,
  Database,
  Zap,
  Eye,
  FileText,
  Settings,
} from "lucide-react";
import { ROUTES } from "@/constants/routes";
import type {
  GovernanceStat,
  RequestTableRow,
  RequestDetail,
  RiskLevel,
} from "@/models/governance";

// TODO: replace mock data with real governance API calls once available.

const MY_REQUESTS_STATS: GovernanceStat[] = [
  {
    id: "total-requests",
    value: 23,
    label: "Total requests",
    sublabel: "All data governance",
  },
  {
    id: "in-progress",
    value: 8,
    label: "In progress",
    sublabel: "Currently processing",
  },
  {
    id: "action-needed",
    value: 3,
    label: "Action needed",
    sublabel: "Needs your input",
    emphasis: true,
  },
  {
    id: "approved-this-year",
    value: 11,
    label: "Approved this year",
    sublabel: "Active approvals",
  },
  {
    id: "avg-approval-time",
    value: "3.2d",
    label: "Avg approval time",
    sublabel: "Days from submit to approval",
  },
];

const MY_REQUESTS_TABLE: RequestTableRow[] = [
  {
    id: "loyalty-model-fr-retail",
    title: "Loyalty Model — FR Retail Data",
    code: "DUA-2026-0821",
    dataset: "FR_RETAIL_TXN_HIST",
    pattern: "DS Lab",
    status: { label: "In review", variant: "warning" },
    risk: { label: "Medium", variant: "warning" },
    aiConfidence: 88,
    updated: "Today, 09:14",
    href: `${ROUTES.myRequests}/loyalty-model-fr-retail`,
  },
  {
    id: "aml-scoring-model",
    title: "AML Scoring Model — EMEA",
    code: "DUA-2026-0798",
    dataset: "EMEA_TXN_ALERTS",
    pattern: "AML/KYC",
    status: { label: "Approved", variant: "success" },
    risk: { label: "Low", variant: "success" },
    aiConfidence: 97,
    updated: "Yesterday",
    href: `${ROUTES.myRequests}/aml-scoring-model`,
  },
  {
    id: "cross-border-singapore",
    title: "Cross-border: FR → Singapore",
    code: "DUA-2026-0779",
    dataset: "FR_RETAIL_TXN_HIST",
    pattern: "Cross-border",
    status: { label: "Action needed", variant: "critical" },
    risk: { label: "High", variant: "critical" },
    aiConfidence: 51,
    updated: "3 days ago",
    href: `${ROUTES.myRequests}/cross-border-singapore`,
  },
  {
    id: "murex-hosting-azure",
    title: "Murex Hosting Change — Azure",
    code: "DUA-2026-0756",
    dataset: "MKT_POSITIONS_LIVE",
    pattern: "Cloud Migration",
    status: { label: "Blocked", variant: "critical" },
    risk: { label: "High", variant: "critical" },
    aiConfidence: 44,
    updated: "5 days ago",
    href: `${ROUTES.myRequests}/murex-hosting-azure`,
  },
  {
    id: "ecb-stress-test",
    title: "Regulatory Reporting — ECB Stress Test",
    code: "DUA-2026-0741",
    dataset: "SG_CAPITAL_RATIOS",
    pattern: "Reg Reporting",
    status: { label: "Approved", variant: "success" },
    risk: { label: "Low", variant: "success" },
    aiConfidence: 99,
    updated: "2 weeks ago",
    href: `${ROUTES.myRequests}/ecb-stress-test`,
  },
  {
    id: "igad-access-private-banking",
    title: "IGAD Access — Private Banking Data",
    code: "DUA-2026-0718",
    dataset: "PB_CLIENT_PORTFOLIO",
    pattern: "IGAD Access",
    status: { label: "Draft", variant: "neutral" },
    risk: { label: "Medium", variant: "warning" },
    aiConfidence: 72,
    updated: "1 month ago",
    href: `${ROUTES.myRequests}/igad-access-private-banking`,
  },
];

const REQUEST_DETAIL_MOCK: RequestDetail = {
  id: "loyalty-model-fr-retail",
  code: "REQ-2026-0617-00123",
  title: "Loyalty Program – France",
  type: "Data Usage Approval",
  createdLabel: "Created: Jun 17, 2026 10:15 AM",
  lastUpdatedLabel: "Updated: Today, 09:14 AM",
  owner: "Sarah Chen",
  currentApprovalStage: "Privacy Review",
  status: { label: "In Progress", variant: "warning" },
  decisionBasis: [
    { label: "Matched Pattern", detail: "Data Usage - Marketing / Loyalty" },
    { label: "Applicable Rules", detail: "12 rules evaluated" },
    { label: "Policy Alignment", detail: "All mandatory policies met" },
    {
      label: "Similar Approvals",
      detail: "7 similar requests (5 approved)",
    },
  ],
  outcome: {
    riskLevel: "low",
    riskLabel: "Low Risk",
    confidencePercent: 92,
    summary:
      "This request is recommended for approval with conditions.",
  },
  recommendation: {
    title: "Approve with conditions",
    description:
      "Subject to the approvals listed and adherence to the conditions.",
    conditionsCount: 2,
    conditions: [
      {
        label: "Marketing consent retained",
        detail:
          "Loyalty communications limited to opted-in retail customers only.",
      },
      {
        label: "EU residency enforced",
        detail:
          "Processing and storage remain within approved FR/EU hosting boundaries.",
      },
    ],
    rationale:
      "Pattern match, metadata completeness, and rule evaluation support a low-risk path. No blocking controls were flagged by Sentinel.",
  },
  evidence: [
    { id: "1", icon: Shield, label: "Dataset Classification", sublabel: "C2" },
    {
      id: "2",
      icon: Eye,
      label: "Geography Check",
      sublabel: "FR → EU Compliant",
    },
    {
      id: "3",
      icon: Lock,
      label: "Security Controls",
      sublabel: "AES-256 Encryption",
    },
    {
      id: "4",
      icon: Database,
      label: "Pseudonymization",
      sublabel: "Tokens Applied",
    },
    {
      id: "5",
      icon: Zap,
      label: "Retention Policy",
      sublabel: "24mo Auto-delete",
    },
    { id: "6", icon: FileText, label: "Access Controls", sublabel: "RBAC" },
  ],
  approvalPath: [
    { order: 1, role: "Data Owner", subtitle: "Retail Banking" },
    { order: 2, role: "Privacy Review", subtitle: "Data Protection" },
    { order: 3, role: "DUA Review", subtitle: "Data Usage" },
    { order: 4, role: "Compliance Sign-off", subtitle: "Group Policy" },
    { order: 5, role: "Requester Acceptance", subtitle: "Conditions acknowledgement" },
    { order: 6, role: "Final Validation", subtitle: "DataGO closure" },
  ],
  nextStep: {
    text: "Submit this request to start the approval workflow.",
    actionLabel: "Submit for Approval",
  },
};

const MY_REQUESTS_FILTERS = [
  { id: "all", label: "All" },
  { id: "in-progress", label: "In progress" },
  { id: "awaiting-review", label: "Awaiting review" },
  { id: "action-needed", label: "Action needed" },
  { id: "approved", label: "Approved" },
  { id: "draft", label: "Draft" },
];

export function getMyRequestsStats(): GovernanceStat[] {
  return MY_REQUESTS_STATS;
}

export function getMyRequestsFilters(): typeof MY_REQUESTS_FILTERS {
  return MY_REQUESTS_FILTERS;
}

export function getMyRequestsTable(): RequestTableRow[] {
  return MY_REQUESTS_TABLE;
}

function riskLabelToLevel(label: string): RiskLevel {
  const normalized = label.toLowerCase();
  if (normalized === "low") return "low";
  if (normalized === "medium") return "medium";
  if (normalized === "high") return "high";
  return "critical";
}

function buildRequestDetailFromRow(row: RequestTableRow): RequestDetail {
  return {
    ...REQUEST_DETAIL_MOCK,
    id: row.id,
    code: row.code,
    title: row.title,
    status: row.status,
    lastUpdatedLabel: `Updated: ${row.updated}`,
    outcome: {
      riskLevel: riskLabelToLevel(row.risk.label),
      riskLabel: `${row.risk.label} Risk`,
      confidencePercent: row.aiConfidence,
      summary: REQUEST_DETAIL_MOCK.outcome.summary,
    },
  };
}

export function getRequestDetail(id: string): RequestDetail | undefined {
  const row = MY_REQUESTS_TABLE.find((entry) => entry.id === id);
  if (row) {
    return buildRequestDetailFromRow(row);
  }
  return undefined;
}
