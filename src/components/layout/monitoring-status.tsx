"use client";

import { CheckCircle2 } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { COMPLIANCE_DESCRIPTION } from "@/constants/copy";
import { getActiveApprovalsCount } from "@/controllers/governance.controller";

export function MonitoringStatus() {
  const activeApprovals = getActiveApprovalsCount();

  return (
    <HoverCard openDelay={150} closeDelay={100}>
      <HoverCardTrigger asChild>
        <button
          type="button"
          className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          {activeApprovals} approvals monitored
        </button>
      </HoverCardTrigger>
      <HoverCardContent align="end" className="w-72 rounded-xl p-4">
        <div className="mb-2 flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
          <span className="text-sm font-bold text-gray-900">
            Continuous compliance
          </span>
        </div>
        <p className="text-sm leading-relaxed text-gray-600">
          {COMPLIANCE_DESCRIPTION}
        </p>
        <p className="mt-3 text-sm font-bold text-gray-900">
          Monitoring is active across {activeApprovals} approvals
        </p>
      </HoverCardContent>
    </HoverCard>
  );
}
