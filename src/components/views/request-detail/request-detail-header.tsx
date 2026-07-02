import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/views/status-badge";
import type { RequestDetail } from "@/models/governance";

export function RequestDetailHeader({ request }: { request: RequestDetail }) {
  return (
    <div className="space-y-2">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <h1 className="font-heading text-3xl font-bold text-foreground">
            {request.title}
          </h1>
          <StatusBadge
            label={request.status.label}
            variant={request.status.variant}
          />
        </div>

        <div className="flex shrink-0 gap-2">
          <Button variant="outline" size="sm">
            Export Summary
          </Button>
          <Button variant="ghost" size="icon-sm">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <p className="text-base text-muted-foreground">
        <span className="font-medium text-foreground">Request ID:</span>{" "}
        {request.code}
        <span className="mx-2 text-border">|</span>
        {request.createdLabel}
      </p>
    </div>
  );
}
