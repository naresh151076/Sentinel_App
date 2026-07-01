import { cn } from "@/lib/utils";
import type { GovernanceStat } from "@/models/governance";

export function StatCard({ stat }: { stat: GovernanceStat }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <div
        className={cn(
          "mb-1 text-3xl font-bold",
          stat.emphasis && "text-brand-red",
        )}
      >
        {stat.value}
      </div>
      <div className="mb-1 text-xs font-medium">{stat.label}</div>
      <div className="text-[10px] text-gray-400">{stat.sublabel}</div>
    </div>
  );
}
