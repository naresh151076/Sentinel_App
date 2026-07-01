import { Pencil } from "lucide-react";
import type { NewRequestDraft } from "@/models/new-request";

export function RequestSummaryCard({ draft }: { draft: NewRequestDraft }) {
  return (
    <div className="rounded-2xl bg-white p-6">
      <h2 className="mb-4 text-lg font-bold text-gray-900">
        Request summary
      </h2>
      <div className="mb-4 flex items-start justify-between gap-4 rounded-xl bg-gray-50 p-4">
        <p className="text-base text-gray-900">{draft.summaryText}</p>
        <button
          type="button"
          className="shrink-0 rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          aria-label="Edit request summary"
        >
          <Pencil className="h-4 w-4" />
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {draft.tags.map((tag) => (
          <div
            key={tag.label}
            className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700"
          >
            <tag.icon className="h-4 w-4" />
            {tag.label}
          </div>
        ))}
      </div>
    </div>
  );
}
