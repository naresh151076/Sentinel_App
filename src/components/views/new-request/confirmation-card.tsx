import { HelpCircle } from "lucide-react";
import type { NewRequestDraft } from "@/models/new-request";

export function ConfirmationCard({ draft }: { draft: NewRequestDraft }) {
  return (
    <div className="flex flex-col rounded-2xl bg-red-50 p-6">
      <div className="mb-4 flex items-start justify-between gap-3">
        <h2 className="text-lg font-bold text-gray-900">
          Need your confirmation
        </h2>
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-50 text-brand-red">
          <HelpCircle className="h-4 w-4" />
        </div>
      </div>
      <p className="mb-4 text-sm leading-snug text-gray-600">
        {draft.confirmationQuestion}
      </p>
      <div className="flex flex-col gap-3">
        {draft.confirmationOptions.map((option) => (
          <button
            key={option.label}
            type="button"
            className="flex items-center gap-3 rounded-xl bg-white p-4 text-left transition-colors hover:bg-gray-50"
          >
            <option.icon className="h-5 w-5 shrink-0 text-gray-700" />
            <span className="text-sm font-medium text-gray-900">
              {option.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
