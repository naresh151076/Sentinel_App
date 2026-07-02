"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Bell, HelpCircle, AlertTriangle, X } from "lucide-react";
import Link from "next/link";
import { WORKSPACE_LABEL } from "@/constants/copy";
import { getPageTitle } from "@/controllers/navigation.controller";
import { MonitoringStatus } from "@/components/layout/monitoring-status";
import { getAttentionItems } from "@/controllers/governance.controller";

export function Topbar() {
  const pathname = usePathname();
  const pageTitle = getPageTitle(pathname);
  const attentionItems = getAttentionItems();
  const [isAlertVisible, setIsAlertVisible] = useState(true);

  return (
    <header className="flex flex-col shrink-0 bg-surface-low">
      {attentionItems.length > 0 && isAlertVisible && (
        <div className="animate-slideDown border-b-2 border-brand-red bg-red-50 px-8 py-4">
          <div className="space-y-3">
            {attentionItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="flex items-start gap-4 transition-colors hover:text-brand-red"
              >
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100">
                  <AlertTriangle className="h-4 w-4 text-brand-red" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-bold leading-tight text-gray-900">
                    {item.title}
                  </div>
                  <div className="text-sm leading-snug text-gray-600">
                    {item.description}
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsAlertVisible(false);
                  }}
                  className="mt-0.5 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </Link>
            ))}
          </div>
        </div>
      )}
      <div className="flex h-16 shrink-0 items-center px-8">
        {pathname !== "/" &&
         pathname !== "/requests" &&
         !pathname.startsWith("/requests/") && (
          <div className="flex items-center text-sm text-gray-500">
            <span>{WORKSPACE_LABEL}</span>
            <span className="mx-2">/</span>
            <span className="font-bold text-gray-900">{pageTitle}</span>
          </div>
        )}
        <div className="ml-auto flex items-center gap-4 text-gray-600">
          <MonitoringStatus />
          <button type="button" className="hover:text-black" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </button>
          <button type="button" className="hover:text-black" aria-label="Help">
            <HelpCircle className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
