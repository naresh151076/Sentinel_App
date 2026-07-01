import type { LucideIcon } from "lucide-react";
import type { EvidenceItem } from "@/models/conversation";

export interface RequestTag {
  icon: LucideIcon;
  label: string;
}

export interface FoundItem {
  icon: LucideIcon;
  label: string;
  value: string;
}

export interface ConfirmationOption {
  icon: LucideIcon;
  label: string;
}

export interface NewRequestDraft {
  summaryText: string;
  tags: RequestTag[];
  confidencePercent: number;
  confirmationCount: number;
  readinessHelperText: string;
  foundItems: FoundItem[];
  confirmationQuestion: string;
  confirmationOptions: ConfirmationOption[];
  evidenceItems: EvidenceItem[];
  nextStepText: string;
}
