import {
  Cloud,
  Database,
  FileText,
  Globe,
  HelpCircle,
  LayoutGrid,
  Shield,
  TrendingUp,
} from "lucide-react";
import type { EvidencePackBundle } from "@/models/conversation";

// TODO: replace mock data with a real intake-understanding API once available.

const SCENARIO_MESSAGE =
  "I want to use EU and Singapore client data in a French application for risk modelling and management reporting.";

// Clarifying question for the first turn
const CLARIFYING_QUESTION =
  "Will this data be used to train an AI model, or only for analytics and reporting?";

// Initial understanding (after first user message)
const INITIAL_UNDERSTANDING: Partial<EvidencePackBundle> = {
  understandingText: "Sentinel understood this as a",
  understandingBoldFragment: "Data Usage + Cross-border Access request",
  confidencePercent: 78,
  cards: [
    {
      icon: Globe,
      label: "Matched pattern",
      title: "Client data analytics / reporting",
      description:
        "Typical route: Data usage with cross-border transfer for analytics and reporting.",
    },
    {
      icon: FileText,
      label: "What I know",
      title: "Dataset and app context found",
      description:
        "EU + Singapore client data used in a French app for risk modelling and management reporting.",
    },
    {
      icon: HelpCircle,
      label: "What I still need",
      title: "Clarify AI model training usage",
      description:
        "Will this data be used to train an AI model, or only for analytics and reporting?",
      tone: "attention",
    },
  ],
  evidenceItems: [
    {
      id: "data-catalog",
      icon: Database,
      label: "Data Catalog",
      sublabel: "2 datasets identified",
    },
    {
      id: "app-catalog",
      icon: LayoutGrid,
      label: "App Catalog",
      sublabel: "1 application identified",
    },
  ],
};

// Final understanding (after second user message - full analysis)
const FINAL_UNDERSTANDING: Partial<EvidencePackBundle> = {
  understandingText: "Sentinel understood this as a",
  understandingBoldFragment: "Data Usage + Cross-border Access request",
  confidencePercent: 88,
  cards: [
    {
      icon: Globe,
      label: "Matched pattern",
      title: "Client data analytics / reporting",
      description:
        "Route: EU + Singapore data for analytics only. Requires GDPR transfer assessment + Regional residency compliance (R2 category).",
    },
    {
      icon: FileText,
      label: "What I know",
      title: "Complete intake details",
      description:
        "Source: EU + Singapore clients. Purpose: Analytics & reporting (no training). Storage: France-based. Regulatory: GDPR + cross-border rules.",
    },
    {
      icon: Shield,
      label: "Classification",
      title: "Data residency: R2 Regional (EEA/GDPR)",
      description:
        "Data localization compliant. Risk: Medium-low. AI Authority review: Not required (analytics only).",
    },
  ],
  evidenceItems: [
    {
      id: "data-catalog",
      icon: Database,
      label: "Data Catalog",
      sublabel: "2 datasets identified",
    },
    {
      id: "app-catalog",
      icon: LayoutGrid,
      label: "App Catalog",
      sublabel: "1 application identified",
    },
    {
      id: "sgi",
      icon: Shield,
      label: "SGI",
      sublabel: "Security classification (C2)",
    },
    {
      id: "datago",
      icon: Cloud,
      label: "DataGO",
      sublabel: "Transfer assessment ready",
    },
  ],
  nextStep: {
    icon: TrendingUp,
    text: "Recommended next step: Prepare first-cut risk assessment & governance routing",
    actionLabel: "Prepare",
  },
};

export function getFixedAnalysisBundle(userMessageCount: number = 0): EvidencePackBundle {
  // Show initial understanding after first user message
  // Show final understanding after second user message
  const understanding =
    userMessageCount >= 2 ? FINAL_UNDERSTANDING : INITIAL_UNDERSTANDING;

  return {
    understandingText: understanding.understandingText || "",
    understandingBoldFragment:
      understanding.understandingBoldFragment || "",
    confidencePercent: understanding.confidencePercent || 0,
    cards: understanding.cards || [],
    evidenceItems: understanding.evidenceItems || [],
    nextStep: understanding.nextStep,
  };
}

export function getClarifyingQuestion(userMessageCount: number): string | null {
  // Only show question after first user message, hide after second
  if (userMessageCount === 1) {
    return CLARIFYING_QUESTION;
  }
  return null;
}

export function getScenarioMessage(): string {
  return SCENARIO_MESSAGE;
}

export function getGenericAcknowledgement(): string {
  return "Got it, I've noted that.";
}
