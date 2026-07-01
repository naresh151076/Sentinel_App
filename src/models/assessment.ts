import type { LucideIcon } from "lucide-react";
import type { RequestStatus, RiskLevel } from "@/models/governance";

export interface AssessmentHeader {
  referenceId: string;
  title: string;
  status: RequestStatus;
  submittedBy: string;
  lastUpdated: string;
}

export interface SimilarApproval {
  id: string;
  title: string;
  outcome: string;
  decidedOn: string;
  href: string;
}

export interface DecisionBasis {
  matchedPattern: string;
  applicableRules: string[];
  policyAlignmentSummary: string;
  similarApprovals: SimilarApproval[];
}

export interface RiskOutcome {
  riskLevel: RiskLevel;
  confidencePercent: number;
  summary: string;
}

export interface Recommendation {
  decision: string;
  rationale: string;
  conditions: string[];
}

export interface KeyEvidenceItem {
  id: string;
  icon: LucideIcon;
  label: string;
  sublabel: string;
}

export type ApprovalStepStatus = "completed" | "current" | "upcoming";

export interface ApprovalStep {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  status: ApprovalStepStatus;
}

export interface NextStep {
  text: string;
  primaryActionLabel: string;
  secondaryActionLabel?: string;
}

export interface PolicyAlignment {
  id: string;
  policyName: string;
  rationale: string;
}

export interface EvidenceDocument {
  id: string;
  icon: LucideIcon;
  label: string;
  source: string;
  retrievedDate: string;
}

export interface HistoryEvent {
  id: string;
  date: string;
  actor: string;
  description: string;
}

export interface Assessment {
  header: AssessmentHeader;
  decisionBasis: DecisionBasis;
  riskOutcome: RiskOutcome;
  recommendation: Recommendation;
  keyEvidence: KeyEvidenceItem[];
  approvalPath: ApprovalStep[];
  nextStep: NextStep;
  requiredApprovals: ApprovalStep[];
  applicablePolicies: PolicyAlignment[];
  evidenceDocuments: EvidenceDocument[];
  history: HistoryEvent[];
}
