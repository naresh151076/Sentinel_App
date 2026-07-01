"use client";

import { SidebarNavItem } from "@/components/layout/sidebar-nav-item";
import type { NavItem } from "@/models/navigation";

export function SidebarNavSection({
  label,
  items,
}: {
  label: string;
  items: NavItem[];
}) {
  return (
    <div>
      <div className="mb-2 px-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
        {label}
      </div>
      <nav className="flex flex-col gap-1">
        {items.map((item) => (
          <SidebarNavItem key={item.href} item={item} />
        ))}
      </nav>
    </div>
  );
}
