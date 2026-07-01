import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import type { MonitoringStat } from "@/models/monitoring";
import { StatSparkline } from "@/components/views/monitoring/stat-sparkline";

export function MonitoringStatCard({ stat }: { stat: MonitoringStat }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
      <div
        className={cn(
          "text-3xl font-bold text-gray-900",
          stat.emphasis && "text-brand-red",
        )}
      >
        {stat.value}
      </div>
      <div className="mt-1 text-sm text-gray-500">{stat.label}</div>

      {stat.sparkline ? (
        <div className="mt-3">
          <StatSparkline data={stat.sparkline} />
        </div>
      ) : null}

      {stat.trend ? (
        <div className="mt-2 flex items-center gap-1 text-xs font-bold text-emerald-600">
          <ArrowUp className="h-3 w-3" />
          {stat.trend.label}
        </div>
      ) : (
        <div
          className={cn(
            "mt-2 text-xs",
            stat.emphasis ? "font-bold text-brand-red" : "text-gray-400",
          )}
        >
          {stat.sublabel}
        </div>
      )}
    </div>
  );
}
