import { Cloud, Cpu, Database, Globe, Users } from "lucide-react";
import type { UsagePattern } from "@/models/pattern";

export const COMMON_PATTERNS: UsagePattern[] = [
  {
    id: "data-usage",
    label: "Data usage",
    description: "Use data for analytics, reporting or business use",
    icon: Database,
  },
  {
    id: "cloud-migration",
    label: "Cloud migration",
    description: "Move data or workloads to cloud environments",
    icon: Cloud,
  },
  {
    id: "share-third-party",
    label: "Share with third party",
    description: "Share or disclose data with external parties",
    icon: Users,
  },
  {
    id: "ai-model-training",
    label: "AI / model training",
    description: "Use data to train or run AI models",
    icon: Cpu,
  },
  {
    id: "cross-border-access",
    label: "Cross-border access",
    description: "Access or transfer data across regions",
    icon: Globe,
  },
];
