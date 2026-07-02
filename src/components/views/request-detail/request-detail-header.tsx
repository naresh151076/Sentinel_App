import Link from "next/link";
import { ChevronLeft, MoreVertical, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/views/status-badge";
import { ROUTES } from "@/constants/routes";
import type { RequestDetail } from "@/models/governance";

export function RequestDetailHeader({ request }: { request: RequestDetail }) {
  return (
    <div className="space-y-3 border-b border-gray-200 pb-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <Link
            href={ROUTES.myRequests}
            className="inline-flex items-center gap-1 text-xs text-primary hover:underline mb-2"
          >
            <ChevronLeft className="h-3 w-3" />
            Back to My Requests
          </Link>
          <div className="flex items-center gap-2">
            <h1 className="font-heading text-2xl font-bold text-gray-900">
              {request.title}
            </h1>
            <StatusBadge
              label={request.status.label}
              variant={request.status.variant}
            />
          </div>
        </div>

        <div className="flex gap-2 shrink-0">
          <Button variant="outline" size="sm" className="gap-2 text-sm">
            <Download className="h-4 w-4" />
            Evidence pack
          </Button>
          <Button variant="outline" size="sm" className="gap-2 text-sm">
            <Share2 className="h-4 w-4" />
            Share with reviewer
          </Button>
          <Button variant="ghost" size="icon-sm">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Compact Metadata */}
      <div className="text-xs text-gray-600 space-y-0.5">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="font-medium text-gray-900">{request.code}</span>
          <span>·</span>
          <span>{request.type}</span>
          <span>·</span>
          <span>{request.createdLabel.replace("Created: ", "")}</span>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <span>{request.lastUpdatedLabel.replace("Updated: ", "")}</span>
          <span>·</span>
          <span><span className="font-medium">Owner:</span> {request.owner}</span>
          <span>·</span>
          <span><span className="font-medium">Stage:</span> {request.currentApprovalStage}</span>
        </div>
      </div>
    </div>
  );
}
