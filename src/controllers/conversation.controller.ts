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

const GENERIC_ACKNOWLEDGEMENT = "Got it, I've noted that.";

const FIXED_ANALYSIS_BUNDLE: EvidencePackBundle = {
  understandingText: "Sentinel understood this as a",
  understandingBoldFragment: "Data Usage + Cross-border Access",
  confidencePercent: 88,
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
      title: "One confirmation",
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
    {
      id: "sgi",
      icon: Shield,
      label: "SGI",
      sublabel: "Security classification",
    },
    {
      id: "datago",
      icon: Cloud,
      label: "DataGO",
      sublabel: "Transfer assessment",
    },
  ],
  nextStep: {
    icon: TrendingUp,
    text: "Recommended next step: Prepare first-cut risk assessment",
    actionLabel: "Prepare",
  },
};

export function getScenarioMessage(): string {
  return SCENARIO_MESSAGE;
}

export function getGenericAcknowledgement(): string {
  return GENERIC_ACKNOWLEDGEMENT;
}

export function getFixedAnalysisBundle(): EvidencePackBundle {
  return FIXED_ANALYSIS_BUNDLE;
}
