import type { LucideIcon } from "lucide-react";

export type NavGroup = "workspace" | "knowledge";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  group: NavGroup;
}
