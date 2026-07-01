import type { NewRequestDraft } from "@/models/new-request";

export function FoundItemsCard({ draft }: { draft: NewRequestDraft }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <h2 className="mb-4 text-lg font-bold text-gray-900">
        What Sentinel found
      </h2>
      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
        {draft.foundItems.map((item) => (
          <div key={item.label} className="flex items-start gap-3">
            <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-gray-500" />
            <div>
              <div className="mb-1 text-sm text-gray-500">{item.label}</div>
              <div className="text-base font-bold text-gray-900">
                {item.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
