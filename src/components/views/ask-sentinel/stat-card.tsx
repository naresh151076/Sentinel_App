import { cn } from "@/lib/utils";
import type { GovernanceStat } from "@/models/governance";

export function StatCard({ stat }: { stat: GovernanceStat }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm flex flex-col">
      <div
        className={cn(
          "text-5xl font-semibold leading-tight",
          stat.emphasis && "text-brand-red",
        )}
      >
        {stat.value}
      </div>
      <div className="mt-2 text-base font-medium text-gray-900">
        {stat.label}
      </div>
      <div className="mt-1 text-sm text-gray-500 line-clamp-2">{stat.sublabel}</div>
    </div>
  );
}
