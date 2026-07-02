"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { ROUTES } from "@/constants/routes";

export function WorkspaceShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === ROUTES.home;

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      {isHome ? (
        <div className="flex min-w-0 flex-1 overflow-hidden bg-surface-panel">
          {children}
        </div>
      ) : (
        <div className="flex min-w-0 flex-1 flex-col bg-surface-panel">
          <Topbar />
          <div className="flex flex-1 overflow-hidden">{children}</div>
        </div>
      )}
    </div>
  );
}
