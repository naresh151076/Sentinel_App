import {
  Activity,
  ClipboardCheck,
  FileText,
  LayoutTemplate,
  MessageSquare,
  Plus,
  ShieldCheck,
  BarChart3,
} from "lucide-react";
import { ROUTES } from "@/constants/routes";
import type { NavGroup, NavItem } from "@/models/navigation";

export const NAV_GROUP_LABELS: Record<NavGroup, string> = {
  workspace: "Workspace",
  knowledge: "Knowledge",
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "New request",
    href: ROUTES.home,
    icon: Plus,
    group: "workspace",
  },
  {
    label: "My requests",
    href: ROUTES.myRequests,
    icon: FileText,
    group: "workspace",
  },
  {
    label: "Assessments",
    href: ROUTES.assessments,
    icon: ClipboardCheck,
    group: "workspace",
  },
  {
    label: "Monitoring",
    href: ROUTES.monitoring,
    icon: Activity,
    group: "workspace",
  },
  {
    label: "Patterns library",
    href: ROUTES.patternsLibrary,
    icon: LayoutTemplate,
    group: "workspace",
  },
  {
    label: "Policies & controls",
    href: ROUTES.policiesAndControls,
    icon: ShieldCheck,
    group: "workspace",
  },
  {
    label: "Reports",
    href: ROUTES.reports,
    icon: BarChart3,
    group: "workspace",
  },
];
