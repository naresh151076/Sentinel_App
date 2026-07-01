"use client";

import { getNavGroups } from "@/controllers/navigation.controller";
import { SidebarFooter } from "@/components/layout/sidebar-footer";
import { SidebarLogo } from "@/components/layout/sidebar-logo";
import { SidebarNavSection } from "@/components/layout/sidebar-nav-section";

export function Sidebar() {
  const navGroups = getNavGroups();

  return (
    <aside className="flex h-full w-64 shrink-0 flex-col bg-surface-container">
      <SidebarLogo />
      <div className="scrollbar-hide flex flex-1 flex-col gap-6 overflow-y-auto px-4 py-4">
        {navGroups.map((group) => (
          <SidebarNavSection
            key={group.group}
            label={group.label}
            items={group.items}
          />
        ))}
      </div>
      <SidebarFooter />
    </aside>
  );
}
