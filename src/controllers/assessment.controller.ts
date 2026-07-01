import {
  BadgeCheck,
  Building2,
  Cloud,
  Database,
  FileCheck2,
  Globe,
  LayoutGrid,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import type { Assessment, ApprovalStep } from "@/models/assessment";

// TODO: replace mock data with a real assessment lookup once the governance
// decision engine and an /assessments/[id] route exist.
const APPROVAL_PATH: ApprovalStep[] = [
  {
    id: "data-owner",
    icon: Database,
    title: "Data Owner",
    description: "Confirms dataset scope and classification is accurate.",
    status: "completed",
  },
  {
    id: "privacy-review",
    icon: ShieldCheck,
    title: "Privacy Review",
    description: "Validates purpose limitation and residency conditions.",
    status: "current",
  },
  {
    id: "dua-review",
    icon: FileCheck2,
    title: "DUA Review",
    description: "Final sign-off and recording in DataGO.",
    status: "upcoming",
  },
];

const ASSESSMENT: Assessment = {
  header: {
    referenceId: "REQ-2026-0453",
    title: "FR retail transaction data for loyalty / marketing model",
    status: "pending-approval",
    submittedBy: "You",
    lastUpdated: "2 hours ago",
  },
  decisionBasis: {
    matchedPattern: "Data Usage – Marketing / Loyalty",
    applicableRules: [
      "Purpose limitation: analytics/marketing use of retail transaction data requires documented customer consent basis",
      "Data residency: FR-originated retail data must remain within EEA (R2) unless a compliant transfer mechanism applies",
      "Sensitivity threshold: C2-classified dataset permits automated pattern-based review without escalation",
    ],
    policyAlignmentSummary:
      "Aligns with the approved Loyalty & Marketing Analytics usage pattern under the Master Data Sharing Agreement — no new regulatory interpretation required.",
    similarApprovals: [
      {
        id: "retail-loyalty-model-v1",
        title: "FR retail transaction data for loyalty scoring (v1)",
        outcome: "Approved with conditions",
        decidedOn: "Mar 2026",
        href: "#",
      },
      {
        id: "eu-client-marketing-segmentation",
        title: "EU client data for marketing segmentation",
        outcome: "Approved",
        decidedOn: "Jan 2026",
        href: "#",
      },
    ],
  },
  riskOutcome: {
    riskLevel: "low",
    confidencePercent: 92,
    summary:
      "Dataset classification, geography, and application hosting all match a pre-approved pattern with strong precedent.",
  },
  recommendation: {
    decision: "Approve with conditions",
    rationale:
      "Metadata confirms the dataset is C2-classified, EEA-hosted, and the requesting application meets residency requirements. Two standard conditions apply given this is a marketing use case.",
    conditions: [
      "Customer-level data must be pseudonymised before use in the marketing model",
      "Usage must be re-attested if the dataset classification or hosting location changes",
    ],
  },
  keyEvidence: [
    {
      id: "dataset-classification",
      icon: Database,
      label: "Dataset classification",
      sublabel: "C2 · Retail transaction data",
    },
    {
      id: "geography-check",
      icon: Globe,
      label: "Geography check",
      sublabel: "FR origin · EEA hosting confirmed",
    },
    {
      id: "security-controls",
      icon: ShieldCheck,
      label: "Security controls",
      sublabel: "Encryption at rest + in transit verified",
    },
    {
      id: "policy-mapping",
      icon: FileCheck2,
      label: "Policy mapping",
      sublabel: "Matched to Loyalty & Marketing pattern",
    },
  ],
  approvalPath: APPROVAL_PATH,
  nextStep: {
    text: "Next step: submit this assessment for Privacy Review sign-off",
    primaryActionLabel: "Submit for Approval",
    secondaryActionLabel: "Add context",
  },
  requiredApprovals: APPROVAL_PATH,
  applicablePolicies: [
    {
      id: "master-dsa",
      policyName: "Master Data Sharing Agreement — Loyalty & Marketing",
      rationale:
        "Pre-approved usage pattern covers retail transaction data used for loyalty/marketing analytics.",
    },
    {
      id: "data-residency-r2",
      policyName: "Data Localization — R2 Regional (EEA/GDPR)",
      rationale:
        "Dataset originates in FR and must remain within the EEA; hosting location confirmed compliant.",
    },
    {
      id: "sensitivity-c2",
      policyName: "Data Classification — C2 Handling Standard",
      rationale:
        "C2 sensitivity permits automated, pattern-based review without PCA/AI Authority escalation.",
    },
    {
      id: "purpose-limitation",
      policyName: "Purpose Limitation & Consent Policy",
      rationale:
        "Marketing use of customer transaction data requires a documented consent basis, tracked as a condition.",
    },
  ],
  evidenceDocuments: [
    {
      id: "dataset-classification-doc",
      icon: Database,
      label: "Dataset classification record",
      source: "Data Catalog",
      retrievedDate: "Retrieved today",
    },
    {
      id: "geography-doc",
      icon: MapPin,
      label: "Data residency & origin record",
      source: "Data Catalog",
      retrievedDate: "Retrieved today",
    },
    {
      id: "app-hosting-doc",
      icon: LayoutGrid,
      label: "Application hosting profile",
      source: "Application Catalog",
      retrievedDate: "Retrieved today",
    },
    {
      id: "sgi-initiative-doc",
      icon: Building2,
      label: "Initiative context & scoping",
      source: "SGI",
      retrievedDate: "Retrieved 2 hours ago",
    },
    {
      id: "datago-precedent-doc",
      icon: Cloud,
      label: "Prior transfer assessment history",
      source: "DataGO",
      retrievedDate: "Retrieved 2 hours ago",
    },
    {
      id: "pattern-match-doc",
      icon: BadgeCheck,
      label: "Pattern match confidence report",
      source: "Sentinel pattern register",
      retrievedDate: "Retrieved 2 hours ago",
    },
  ],
  history: [
    {
      id: "submitted",
      date: "2 hours ago",
      actor: "You",
      description: "Request submitted from New Request intake.",
    },
    {
      id: "matched",
      date: "2 hours ago",
      actor: "Sentinel",
      description:
        "Matched to Data Usage – Marketing / Loyalty pattern with 92% confidence.",
    },
    {
      id: "risk-assessed",
      date: "1 hour ago",
      actor: "Sentinel",
      description: "Risk assessment completed — Low risk, approve with conditions.",
    },
    {
      id: "data-owner-confirmed",
      date: "45 minutes ago",
      actor: "Data Owner",
      description: "Confirmed dataset scope and classification.",
    },
    {
      id: "privacy-review-started",
      date: "10 minutes ago",
      actor: "Privacy Review",
      description: "Privacy review started — residency conditions being validated.",
    },
  ],
};

export function getAssessment(): Assessment {
  return ASSESSMENT;
}

export function getApprovalPath(): ApprovalStep[] {
  return APPROVAL_PATH;
}
