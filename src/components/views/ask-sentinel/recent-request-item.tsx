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
      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100">
        <Icon className="h-4 w-4 text-gray-600" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-bold text-gray-900">
          {item.title}
        </div>
        <div className="mb-2 truncate text-xs text-gray-500">
          {item.subtitle}
        </div>
        <StatusBadge label={item.badge.label} variant={item.badge.variant} />
      </div>
      <ChevronRight className="mt-2 h-4 w-4 shrink-0 text-gray-400" />
    </Link>
  );
}
