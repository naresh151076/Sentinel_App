import Link from "next/link";
import { AlertTriangle, ChevronRight } from "lucide-react";
import { getAttentionItems } from "@/controllers/governance.controller";

export function AttentionRequired() {
  const items = getAttentionItems();

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="mb-8 flex flex-col gap-3">
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className="flex items-start gap-4 rounded-xl border-2 border-red-300 bg-white p-4 transition-colors hover:bg-red-50"
        >
          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-50">
            <AlertTriangle className="h-4 w-4 text-brand-red" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="mb-1 text-base font-bold leading-tight text-gray-900">
              {item.title}
            </div>
            <div className="text-sm leading-snug text-gray-600">
              {item.description}
            </div>
          </div>
          <ChevronRight className="mt-1.5 h-4 w-4 shrink-0 text-brand-red" />
        </Link>
      ))}
    </div>
  );
}
