import { cn } from "@/lib/utils";
import type { GovernanceStat } from "@/models/governance";

export function StatCard({ stat }: { stat: GovernanceStat }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
      <div
        className={cn(
          "mb-3 text-5xl font-bold",
          stat.emphasis && "text-brand-red",
        )}
      >
        {stat.value}
      </div>
      <div className="mb-2 text-base font-medium text-gray-900">
        {stat.label}
      </div>
      <div className="text-sm text-gray-500">{stat.sublabel}</div>
    </div>
  );
}
