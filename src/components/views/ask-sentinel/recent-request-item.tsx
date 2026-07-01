import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { StatusBadge } from "@/components/views/status-badge";
import type { RecentRequestItem as RecentRequestItemType } from "@/models/governance";

export function RecentRequestListItem({
  item,
}: {
  item: RecentRequestItemType;
}) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className="flex items-start gap-4 p-4 transition-colors hover:bg-gray-50"
    >
      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100">
        <Icon className="h-4 w-4 text-gray-600" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="text-base font-bold text-gray-900">
            {item.title}
          </div>
          <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-gray-400" />
        </div>
        <div className="mb-2 text-sm text-gray-500">{item.subtitle}</div>
        <StatusBadge label={item.badge.label} variant={item.badge.variant} />
      </div>
    </Link>
  );
}
