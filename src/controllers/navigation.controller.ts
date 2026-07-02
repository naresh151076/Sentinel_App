import { NAV_GROUP_LABELS, NAV_ITEMS } from "@/constants/navigation";
import { ROUTES } from "@/constants/routes";
import type { NavGroup, NavItem } from "@/models/navigation";

export function getNavItems(): NavItem[] {
  return NAV_ITEMS;
}

export function getNavGroups(): {
  group: NavGroup;
  label: string;
  items: NavItem[];
}[] {
  const groups: NavGroup[] = ["workspace", "knowledge"];
  return groups.map((group) => ({
    group,
    label: NAV_GROUP_LABELS[group],
    items: NAV_ITEMS.filter((item) => item.group === group),
  }));
}

export function getActiveNavItem(pathname: string): NavItem | undefined {
  const matches = NAV_ITEMS.filter((item) =>
    item.href === "/" ? pathname === "/" : pathname.startsWith(item.href),
  );
  return matches.sort((a, b) => b.href.length - a.href.length)[0];
}

export function isActiveRoute(pathname: string, href: string): boolean {
  return getActiveNavItem(pathname)?.href === href;
}

export function getPageTitle(pathname: string): string {
  return getActiveNavItem(pathname)?.label ?? "Sentinel";
}

export function isRequestDetailPage(pathname: string): boolean {
  const match = pathname.match(/^\/requests\/([^/]+)$/);
  return Boolean(match && match[1] !== "new");
}

export function isAssessmentDetailPage(pathname: string): boolean {
  return /^\/assessments\/([^/]+)$/.test(pathname);
}

export function shouldShowTopbarBreadcrumb(pathname: string): boolean {
  if (pathname === "/") return false;
  if (pathname === ROUTES.myRequests) return false;
  if (pathname === ROUTES.assessments) return false;
  if (pathname === ROUTES.monitoring) return false;
  if (pathname.startsWith("/requests/")) return false;
  if (pathname.startsWith("/assessments/")) return false;
  return true;
}
