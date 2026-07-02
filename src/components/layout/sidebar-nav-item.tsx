"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { isActiveRoute } from "@/controllers/navigation.controller";
import { useActiveRequest } from "@/contexts/active-request.context";
import type { NavItem } from "@/models/navigation";

export function SidebarNavItem({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const { activeRequestId } = useActiveRequest();
  let active = isActiveRoute(pathname, item.href);

  // Deactivate "New request" nav item if there's an active request conversation
  if (item.label === "New request" && activeRequestId) {
    active = false;
  }

  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium transition-colors",
        active ? "bg-brand-red text-white" : "text-gray-700 hover:bg-gray-50",
      )}
    >
      <Icon
        className={cn("h-5 w-5", active ? "text-white" : "text-gray-400")}
      />
      {item.label}
    </Link>
  );
}
