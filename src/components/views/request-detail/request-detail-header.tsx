import Link from "next/link";
import { ChevronLeft, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/views/status-badge";
import { ROUTES } from "@/constants/routes";
import type { RequestDetail } from "@/models/governance";

export function RequestDetailHeader({ request }: { request: RequestDetail }) {
  return (
    <div className="space-y-4 border-b border-gray-200 pb-6">
      <Link
        href={ROUTES.myRequests}
        className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to My Requests
      </Link>

      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="font-heading text-2xl font-bold text-gray-900">
              {request.title}
            </h1>
            <StatusBadge
              label={request.status.label}
              variant={request.status.variant}
            />
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div>
              <span className="font-medium text-gray-900">Request ID: </span>
              {request.code}
            </div>
            <div>{request.createdLabel}</div>
          </div>
        </div>

        <div className="flex gap-2 shrink-0">
          <Button variant="outline" size="sm">
            Export Summary
          </Button>
          <Button variant="ghost" size="icon-sm">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
