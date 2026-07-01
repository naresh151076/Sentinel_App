import type { EvidenceItem } from "@/models/conversation";

export function EvidenceCollectedRow({ items }: { items: EvidenceItem[] }) {
  return (
    <div>
      <div className="mb-3 text-base font-bold text-gray-900">
        Evidence collected
      </div>
      <div className="grid grid-cols-4 gap-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4"
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
