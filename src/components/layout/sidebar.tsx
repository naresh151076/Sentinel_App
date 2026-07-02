"use client";

import { getNavItems } from "@/controllers/navigation.controller";
import { SidebarFooter } from "@/components/layout/sidebar-footer";
import { SidebarLogo } from "@/components/layout/sidebar-logo";
import { SidebarNavItem } from "@/components/layout/sidebar-nav-item";
import { SidebarRecentRequests } from "@/components/layout/sidebar-recent-requests";

export function Sidebar() {
  const navItems = getNavItems();

  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-gray-200 bg-surface-container">
      <SidebarLogo />
      <div className="scrollbar-hide flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-4">
        {navItems.map((item) => (
          <SidebarNavItem key={item.href} item={item} />
        ))}
        <div className="border-t border-gray-200 pt-6 mt-4">
          <SidebarRecentRequests />
        </div>
      </div>
      <SidebarFooter />
    </aside>
  );
}
