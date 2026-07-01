import Link from "next/link";
import { ChevronLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AssessmentStatusBadge } from "@/components/views/assessments/assessment-status-badge";
import { ROUTES } from "@/constants/routes";
import type { AssessmentHeader as AssessmentHeaderModel } from "@/models/assessment";

export function AssessmentHeader({
  header,
}: {
  header: AssessmentHeaderModel;
}) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4 rounded-xl border border-gray-200 bg-white p-6">
      <div>
        <Link
          href={ROUTES.myRequests}
          className="mb-2 inline-flex items-center gap-1 text-xs font-bold text-gray-400 hover:text-gray-600"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
          Back to My requests
        </Link>
        <div className="mb-2 flex flex-wrap items-center gap-3">
          <h1 className="text-2xl font-bold text-gray-900">
            {header.title}
          </h1>
          <AssessmentStatusBadge status={header.status} />
        </div>
        <p className="text-sm text-gray-500">
          {header.referenceId} · Submitted by {header.submittedBy} · Last
          updated {header.lastUpdated}
        </p>
      </div>
      <Button variant="outline">
        <Download className="h-3.5 w-3.5" />
        Export Summary
      </Button>
    </div>
  );
}
