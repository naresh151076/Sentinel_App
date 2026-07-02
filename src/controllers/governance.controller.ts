import { Cloud, Cpu, Globe } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import type {
  AttentionItem,
  GovernanceStat,
  RecentRequestItem,
} from "@/models/governance";

// TODO: replace mock data with real governance API calls once available.
const GOVERNANCE_STATS: GovernanceStat[] = [
  {
    id: "recent-requests",
    value: 12,
    label: "My recent requests",
    sublabel: "Updated today",
  },
  {
    id: "pending-reviews",
    value: 3,
    label: "Pending reviews",
    sublabel: "1 needs input",
  },
  {
    id: "active-approvals",
    value: 18,
    label: "Active approvals",
    sublabel: "Monitored usage",
  },
  {
    id: "alerts",
    value: 2,
    label: "Alerts",
    sublabel: "At risk of delay",
    emphasis: true,
  },
];

const RECENT_REQUESTS: RecentRequestItem[] = [
  {
    id: "eu-client-analytics",
    title: "EU client analytics",
    subtitle: "Awaiting requester confirmation",
    icon: Globe,
    badge: { label: "Needs input", variant: "critical" },
    href: `${ROUTES.myRequests}/eu-client-analytics`,
  },
  {
    id: "cloud-migration-review",
    title: "Cloud migration review",
    subtitle: "Evidence pack complete",
    icon: Cloud,
    badge: { label: "Ready for DUA", variant: "neutral" },
    href: `${ROUTES.myRequests}/cloud-migration-review`,
  },
  {
    id: "model-training-assessment",
    title: "Model training assessment",
    subtitle: "Expert review in progress",
    icon: Cpu,
    badge: { label: "High risk route", variant: "dark" },
    href: `${ROUTES.myRequests}/model-training-assessment`,
  },
];

const ATTENTION_ITEMS: AttentionItem[] = [
  {
    id: "hosting-region-changed",
    title: "Application hosting region changed",
    description:
      "2 active approvals may require revalidation before next release.",
    href: `${ROUTES.monitoring}/hosting-region-changed`,
  },
];

export function getGovernanceStats(): GovernanceStat[] {
  return GOVERNANCE_STATS;
}

export function getRecentRequests(): RecentRequestItem[] {
  return RECENT_REQUESTS;
}

export function getAttentionItems(): AttentionItem[] {
  return ATTENTION_ITEMS;
}

export function getActiveApprovalsCount(): number {
  const value = GOVERNANCE_STATS.find((stat) => stat.id === "active-approvals")
    ?.value;
  return typeof value === "number" ? value : 0;
}
