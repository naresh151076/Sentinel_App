import {
  Cloud,
  Cpu,
  Database,
  Folder,
  Globe,
  User,
  Users,
} from "lucide-react";
import type { UsagePattern } from "@/models/pattern";

export const COMMON_PATTERNS: UsagePattern[] = [
  {
    id: "data-usage",
    label: "Data usage",
    description: "Use, copy, move, or transform data",
    icon: Database,
  },
  {
    id: "cross-border-access",
    label: "Cross-border access",
    description: "Country and residency checks",
    icon: Globe,
  },
  {
    id: "cloud-migration",
    label: "Cloud migration",
    description: "Hosting and application context",
    icon: Cloud,
  },
  {
    id: "third-party-sharing",
    label: "Third-party sharing",
    description: "Beneficiary and outsourcing review",
    icon: Users,
  },
  {
    id: "ai-model-training",
    label: "AI / model training",
    description: "AI purpose and control signals",
    icon: Cpu,
  },
  {
    id: "data-retention",
    label: "Data retention",
    description: "Retention period and deletion",
    icon: Folder,
  },
  {
    id: "access-review",
    label: "Access review",
    description: "User access and recertification",
    icon: User,
  },
];
