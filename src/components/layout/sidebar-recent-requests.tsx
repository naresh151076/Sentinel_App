"use client";

import Link from "next/link";
import { getRecentRequests } from "@/controllers/governance.controller";
import { useActiveRequest } from "@/contexts/active-request.context";

export function SidebarRecentRequests() {
  const requests = getRecentRequests();
  const { activeRequestId } = useActiveRequest();

  return (
    <div className="space-y-2.5">
      <h3 className="px-3 text-xs font-bold text-gray-500">Recent requests</h3>
      <div className="space-y-1">
        {requests.map((item) => {
          const isActive = activeRequestId === item.id;
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex items-center px-3 py-2.5 font-medium rounded-lg transition-colors truncate ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
