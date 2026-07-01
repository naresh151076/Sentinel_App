import type { EvidenceDocument } from "@/models/assessment";

export function EvidenceList({ documents }: { documents: EvidenceDocument[] }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <h2 className="mb-4 text-lg font-bold text-gray-900">Evidence</h2>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="flex items-center gap-3 rounded-xl bg-gray-50 p-4"
          >
            <doc.icon className="h-5 w-5 shrink-0 text-gray-700" />
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-bold text-gray-900">
                {doc.label}
              </div>
              <div className="truncate text-xs text-gray-500">
                {doc.source} · {doc.retrievedDate}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
