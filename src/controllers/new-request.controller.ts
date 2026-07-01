import {
  BarChart3,
  Cloud,
  Cpu,
  Database,
  Globe,
  Laptop,
  LayoutGrid,
  Shield,
  Target,
  TrendingUp,
} from "lucide-react";
import type { NewRequestDraft } from "@/models/new-request";

// TODO: replace mock data with the real drafted request once intake analysis is wired up.
const NEW_REQUEST_DRAFT: NewRequestDraft = {
  summaryText:
    "Use EU and Singapore client data in a French application for risk modelling and management reporting.",
  tags: [
    { icon: Database, label: "Data usage" },
    { icon: Globe, label: "Cross-border access" },
    { icon: BarChart3, label: "Client analytics" },
  ],
  confidencePercent: 88,
  confirmationCount: 1,
  readinessHelperText: "Ready to prepare assessment after confirmation.",
  foundItems: [
    { icon: Globe, label: "Dataset", value: "EU + Singapore client data" },
    {
      icon: Laptop,
      label: "Application",
      value: "French hosted application",
    },
    {
      icon: Target,
      label: "Purpose",
      value: "Risk modelling and management reporting",
    },
    {
      icon: TrendingUp,
      label: "Typical route",
      value: "Pattern fit review, first-cut risk assessment, DUA review",
    },
  ],
  confirmationQuestion:
    "Will this data be used only for analytics and reporting, or also to train an AI model?",
  confirmationOptions: [
    { icon: BarChart3, label: "Analytics & reporting only" },
    { icon: Cpu, label: "Includes AI model training" },
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
      sublabel: "Initiative context found",
    },
    {
      id: "datago",
      icon: Cloud,
      label: "DataGO",
      sublabel: "transfer assessment history",
    },
  ],
  nextStepText: "Next step: prepare first-cut risk assessment",
};

export function getNewRequestDraft(): NewRequestDraft {
  return NEW_REQUEST_DRAFT;
}
