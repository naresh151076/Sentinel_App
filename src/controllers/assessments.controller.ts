import { ROUTES } from "@/constants/routes";
import { getRequestDetail as getRequestDetailById } from "@/controllers/requests.controller";
import type { GovernanceStat, RequestDetail, RequestTableRow } from "@/models/governance";

// TODO: replace mock data with real governance API calls once available.

const MY_ASSESSMENTS_STATS: GovernanceStat[] = [
  {
    id: "total-assigned",
    value: 12,
    label: "Assigned to you",
    sublabel: "Active assessments",
  },
  {
    id: "pending-review",
    value: 4,
    label: "Pending my review",
    sublabel: "Awaiting your input",
    emphasis: true,
  },
  {
    id: "due-this-week",
    value: 2,
    label: "Due this week",
    sublabel: "Review deadline approaching",
  },
  {
    id: "completed-month",
    value: 5,
    label: "Completed this month",
    sublabel: "Reviews finalized",
  },
  {
    id: "avg-review-time",
    value: "1.8d",
    label: "Avg review time",
    sublabel: "Days to complete review",
  },
];

const MY_ASSESSMENTS_TABLE: RequestTableRow[] = [
  {
    id: "loyalty-model-fr-retail",
    title: "Loyalty Model — FR Retail Data",
    code: "DUA-2026-0821",
    dataset: "FR_RETAIL_TXN_HIST",
    pattern: "DS Lab",
    status: { label: "Pending my review", variant: "warning" },
    risk: { label: "Medium", variant: "warning" },
    aiConfidence: 88,
    updated: "Today, 09:14",
    href: `${ROUTES.assessments}/loyalty-model-fr-retail`,
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
    href: `${ROUTES.assessments}/cross-border-singapore`,
  },
  {
    id: "aml-scoring-model",
    title: "AML Scoring Model — EMEA",
    code: "DUA-2026-0798",
    dataset: "EMEA_TXN_ALERTS",
    pattern: "AML/KYC",
    status: { label: "In review", variant: "warning" },
    risk: { label: "Low", variant: "success" },
    aiConfidence: 97,
    updated: "Yesterday",
    href: `${ROUTES.assessments}/aml-scoring-model`,
  },
  {
    id: "murex-hosting-azure",
    title: "Murex Hosting Change — Azure",
    code: "DUA-2026-0756",
    dataset: "MKT_POSITIONS_LIVE",
    pattern: "Cloud Migration",
    status: { label: "Escalated", variant: "critical" },
    risk: { label: "High", variant: "critical" },
    aiConfidence: 44,
    updated: "5 days ago",
    href: `${ROUTES.assessments}/murex-hosting-azure`,
  },
  {
    id: "igad-access-private-banking",
    title: "IGAD Access — Private Banking Data",
    code: "DUA-2026-0718",
    dataset: "PB_CLIENT_PORTFOLIO",
    pattern: "IGAD Access",
    status: { label: "Completed", variant: "success" },
    risk: { label: "Medium", variant: "warning" },
    aiConfidence: 72,
    updated: "1 week ago",
    href: `${ROUTES.assessments}/igad-access-private-banking`,
  },
];

const MY_ASSESSMENTS_FILTERS = [
  { id: "all", label: "All" },
  { id: "pending-review", label: "Pending my review" },
  { id: "in-progress", label: "In progress" },
  { id: "completed", label: "Completed" },
  { id: "escalated", label: "Escalated" },
];

export function getMyAssessmentsStats(): GovernanceStat[] {
  return MY_ASSESSMENTS_STATS;
}

export function getMyAssessmentsFilters(): typeof MY_ASSESSMENTS_FILTERS {
  return MY_ASSESSMENTS_FILTERS;
}

export function getMyAssessmentsTable(): RequestTableRow[] {
  return MY_ASSESSMENTS_TABLE;
}

export function getAssessmentDetail(id: string): RequestDetail | undefined {
  const assessmentRow = MY_ASSESSMENTS_TABLE.find((entry) => entry.id === id);
  if (!assessmentRow) {
    return undefined;
  }

  const detail = getRequestDetailById(id);
  if (!detail) {
    return undefined;
  }

  return {
    ...detail,
    status: assessmentRow.status,
    lastUpdatedLabel: `Updated: ${assessmentRow.updated}`,
    outcome: {
      ...detail.outcome,
      riskLevel: detail.outcome.riskLevel,
      riskLabel: `${assessmentRow.risk.label} Risk`,
      confidencePercent: assessmentRow.aiConfidence,
    },
    nextStep: {
      text: "Review the assessment summary and confirm or escalate your decision.",
      actionLabel: "Complete Review",
    },
  };
}
