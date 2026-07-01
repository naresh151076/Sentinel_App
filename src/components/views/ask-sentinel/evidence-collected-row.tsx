import type { EvidenceItem } from "@/models/conversation";

export function EvidenceCollectedRow({ items }: { items: EvidenceItem[] }) {
  return (
    <div>
      <div className="mb-3 text-sm font-bold text-gray-900">
        Evidence collected
      </div>
      <div className="grid grid-cols-4 gap-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-3 shadow-sm"
          >
            <item.icon className="h-5 w-5 shrink-0 text-gray-700" />
            <div className="min-w-0">
              <div className="truncate text-xs font-bold text-gray-900">
                {item.label}
              </div>
              <div className="truncate text-[11px] text-gray-500">
                {item.sublabel}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
