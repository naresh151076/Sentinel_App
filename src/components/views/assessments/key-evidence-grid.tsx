import type { KeyEvidenceItem } from "@/models/assessment";

export function KeyEvidenceGrid({ items }: { items: KeyEvidenceItem[] }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <h2 className="mb-4 text-lg font-bold text-gray-900">Key evidence</h2>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 rounded-xl bg-gray-50 p-4"
          >
            <item.icon className="h-5 w-5 shrink-0 text-gray-700" />
            <div className="min-w-0">
              <div className="truncate text-sm font-bold text-gray-900">
                {item.label}
              </div>
              <div className="truncate text-xs text-gray-500">
                {item.sublabel}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
