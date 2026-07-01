import { Cloud, Database, LayoutGrid, Shield } from "lucide-react";
import type { InterpretedRequest } from "@/models/interpreted-request";

// TODO: replace mock data with the real pattern-match/interpretation API once available.
const INTERPRETED_REQUEST: InterpretedRequest = {
  fields: [
    { label: "Intent", value: "Data Usage Approval" },
    { label: "Primary dataset", value: "EU + Singapore client data" },
    { label: "Data owner", value: "Retail Banking FR" },
    { label: "Geography", value: "France + Singapore (cross-border)" },
    { label: "Classification", value: "C2 · GDPR scope" },
    { label: "Purpose", value: "Risk modelling and management reporting" },
  ],
  matchedPatternName: "Data Usage — Risk & Regulatory Reporting",
  matchedPatternMeta:
    "Typical route: pattern fit review, cross-border transfer check, first-cut risk assessment, DUA review.",
  confidencePercent: 88,
  metadataSources: [
    { id: "data-catalog", icon: Database, label: "Data Catalog" },
    { id: "app-catalog", icon: LayoutGrid, label: "App Catalog" },
    { id: "datago", icon: Cloud, label: "DataGO" },
    { id: "sgi", icon: Shield, label: "SGI" },
  ],
  sentinelReply: [
    { text: "Checked your " },
    { text: "Data Catalog", emphasis: true },
    { text: ", " },
    { text: "App Catalog", emphasis: true },
    { text: ", " },
    { text: "DataGO", emphasis: true },
    { text: " and " },
    { text: "SGI", emphasis: true },
    { text: " records. This matches a " },
    { text: "pre-approved usage pattern", emphasis: true },
    { text: " at 88% confidence. Review the panel and confirm." },
  ],
};

export function getInterpretedRequest(): InterpretedRequest {
  return INTERPRETED_REQUEST;
}
