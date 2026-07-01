import {
  Cloud,
  Cpu,
  Database,
  FileClock,
  Globe,
  ShieldCheck,
  Users,
} from "lucide-react";
import { ROUTES } from "@/constants/routes";
import type { MyRequestItem, MyRequestsSummaryStat } from "@/models/my-requests";

// TODO: replace mock data with real governance API calls once available.
const MY_REQUESTS: MyRequestItem[] = [
  {
    id: "fr-retail-loyalty-model",
    title: "FR retail transaction data for loyalty model",
    patternLabel: "Data usage",
    patternIcon: Database,
    status: "approved",
    riskLevel: "low",
    submittedBy: "You",
    lastUpdated: "2 hours ago",
    href: ROUTES.assessments,
  },
  {
    id: "eu-client-analytics",
    title: "EU client analytics for marketing segmentation",
    patternLabel: "Data usage",
    patternIcon: Globe,
    status: "in-review",
    riskLevel: "medium",
    submittedBy: "You",
    lastUpdated: "5 hours ago",
    href: ROUTES.assessments,
  },
  {
    id: "cross-border-risk-access",
    title: "Cross-border access to APAC risk dataset",
    patternLabel: "Cross-border access",
    patternIcon: Globe,
    status: "pending-approval",
    riskLevel: "high",
    submittedBy: "Amline Fassi",
    lastUpdated: "Yesterday",
    href: ROUTES.assessments,
  },
  {
    id: "cloud-migration-review",
    title: "Cloud migration review for pricing application",
    patternLabel: "Cloud migration",
    patternIcon: Cloud,
    status: "escalated",
    riskLevel: "critical",
    submittedBy: "Marc Dubois",
    lastUpdated: "Yesterday",
    href: ROUTES.assessments,
  },
  {
    id: "loyalty-model-training",
    title: "AI model training on loyalty transaction history",
    patternLabel: "AI / model training",
    patternIcon: Cpu,
    status: "in-review",
    riskLevel: "high",
    submittedBy: "You",
    lastUpdated: "2 days ago",
    href: ROUTES.assessments,
  },
  {
    id: "third-party-sharing-agreement",
    title: "Third-party sharing agreement with loyalty partner",
    patternLabel: "Third-party sharing",
    patternIcon: Users,
    status: "pending-approval",
    riskLevel: "medium",
    submittedBy: "Sofia Moreau",
    lastUpdated: "3 days ago",
    href: ROUTES.assessments,
  },
  {
    id: "data-retention-policy-refresh",
    title: "Data retention policy refresh for retail accounts",
    patternLabel: "Data retention",
    patternIcon: FileClock,
    status: "approved",
    riskLevel: "low",
    submittedBy: "You",
    lastUpdated: "Jun 28, 2026",
    href: ROUTES.assessments,
  },
  {
    id: "kyc-access-review",
    title: "Access review for KYC screening dataset",
    patternLabel: "Access review",
    patternIcon: ShieldCheck,
    status: "rejected",
    riskLevel: "high",
    submittedBy: "You",
    lastUpdated: "Jun 24, 2026",
    href: ROUTES.assessments,
  },
  {
    id: "retail-loyalty-model-v2",
    title: "Loyalty model retraining with refreshed transaction data",
    patternLabel: "AI / model training",
    patternIcon: Cpu,
    status: "draft",
    riskLevel: "medium",
    submittedBy: "You",
    lastUpdated: "Jun 20, 2026",
    href: ROUTES.assessments,
  },
  {
    id: "apac-cloud-hosting-change",
    title: "APAC hosting change for transaction monitoring app",
    patternLabel: "Cloud migration",
    patternIcon: Cloud,
    status: "draft",
    riskLevel: "low",
    submittedBy: "Marc Dubois",
    lastUpdated: "Jun 18, 2026",
    href: ROUTES.assessments,
  },
];

const MY_REQUESTS_SUMMARY: MyRequestsSummaryStat[] = [
  {
    id: "total-requests",
    value: MY_REQUESTS.length,
    label: "Total requests",
    sublabel: "Across all patterns",
  },
  {
    id: "in-review",
    value: MY_REQUESTS.filter((item) => item.status === "in-review").length,
    label: "In review",
    sublabel: "Awaiting assessment",
  },
  {
    id: "pending-approval",
    value: MY_REQUESTS.filter((item) => item.status === "pending-approval")
      .length,
    label: "Pending approval",
    sublabel: "Awaiting sign-off",
    emphasis: true,
  },
  {
    id: "approved",
    value: MY_REQUESTS.filter((item) => item.status === "approved").length,
    label: "Approved",
    sublabel: "Monitored usage",
  },
];

export function getMyRequests(): MyRequestItem[] {
  return MY_REQUESTS;
}

export function getMyRequestsSummary(): MyRequestsSummaryStat[] {
  return MY_REQUESTS_SUMMARY;
}
