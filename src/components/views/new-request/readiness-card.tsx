import { Progress } from "@/components/ui/progress";
import type { NewRequestDraft } from "@/models/new-request";

export function ReadinessCard({ draft }: { draft: NewRequestDraft }) {
  return (
    <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6">
      <h2 className="mb-4 text-lg font-bold text-gray-900">Readiness</h2>
      <div className="mb-1 flex items-baseline gap-2">
        <span className="text-4xl font-bold text-gray-900">
          {draft.confidencePercent}%
        </span>
        <span className="text-base text-gray-500">confidence</span>
      </div>
      <p className="mb-3 text-sm text-gray-500">
        {draft.confirmationCount} confirmation needed
      </p>
      <Progress value={draft.confidencePercent} />
      <p className="mt-3 text-sm text-gray-400">
        {draft.readinessHelperText}
      </p>
    </div>
  );
}
