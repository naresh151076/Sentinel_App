"use client";

import { usePathname } from "next/navigation";
import { Bell, HelpCircle } from "lucide-react";
import { WORKSPACE_LABEL } from "@/constants/copy";
import { getPageTitle } from "@/controllers/navigation.controller";
import { MonitoringStatus } from "@/components/layout/monitoring-status";

export function Topbar() {
  const pathname = usePathname();
  const pageTitle = getPageTitle(pathname);

  return (
    <header className="flex h-16 shrink-0 items-center justify-between bg-surface-low px-8">
      <div className="flex items-center text-sm text-gray-500">
        <span>{WORKSPACE_LABEL}</span>
        <span className="mx-2">/</span>
        <span className="font-bold text-gray-900">{pageTitle}</span>
      </div>
      <div className="flex items-center gap-4 text-gray-600">
        <MonitoringStatus />
        <button type="button" className="hover:text-black" aria-label="Notifications">
          <Bell className="h-5 w-5" />
        </button>
        <button type="button" className="hover:text-black" aria-label="Help">
          <HelpCircle className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
