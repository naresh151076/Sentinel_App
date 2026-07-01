"use client";

import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { getNavGroups } from "@/controllers/navigation.controller";
import { SidebarFooter } from "@/components/layout/sidebar-footer";
import { SidebarNavSection } from "@/components/layout/sidebar-nav-section";

export function Sidebar() {
  const navGroups = getNavGroups();

  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-gray-200 bg-surface-container">
      <div className="flex h-16 shrink-0 items-center border-b border-gray-100 px-6">
        <Link href={ROUTES.home} className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-black">
            <div className="h-4 w-4 rounded-sm bg-brand-red" />
          </div>
          <div>
            <div className="text-lg font-bold leading-tight">Sentinel</div>
            <div className="text-[10px] font-medium uppercase tracking-wider text-gray-500">
              Société Générale
            </div>
          </div>
        </Link>
      </div>
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
