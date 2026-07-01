import type { LucideIcon } from "lucide-react";

export type ChatMessageRole = "user" | "sentinel";

export interface ChatMessage {
  id: string;
  role: ChatMessageRole;
  text: string;
}

export type AnalysisCardTone = "default" | "attention";

export interface AnalysisCard {
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  tone?: AnalysisCardTone;
}

export interface EvidenceItem {
  id: string;
  icon: LucideIcon;
  label: string;
  sublabel: string;
}

export interface NextStepRecommendation {
  icon: LucideIcon;
  text: string;
  actionLabel: string;
}

export interface EvidencePackBundle {
  understandingText: string;
  understandingBoldFragment: string;
  confidencePercent: number;
  cards: AnalysisCard[];
  evidenceItems: EvidenceItem[];
  nextStep: NextStepRecommendation;
}
