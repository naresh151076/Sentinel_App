"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { isActiveRoute } from "@/controllers/navigation.controller";
import type { NavItem } from "@/models/navigation";

export function SidebarNavItem({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const active = isActiveRoute(pathname, item.href);
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
