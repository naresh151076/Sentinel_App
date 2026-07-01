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
      className="flex items-center gap-4 p-4 transition-colors hover:bg-gray-50"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100">
        <Icon className="h-4 w-4 text-gray-600" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-base font-bold text-gray-900">
          {item.title}
        </div>
        <div className="truncate text-sm text-gray-500">{item.subtitle}</div>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <StatusBadge label={item.badge.label} variant={item.badge.variant} />
        <ChevronRight className="h-4 w-4 shrink-0 text-gray-400" />
      </div>
    </Link>
  );
}
