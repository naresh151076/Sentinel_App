import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DonutChart } from "@/components/views/monitoring/donut-chart";
import { Sparkline } from "@/components/views/monitoring/sparkline";
import { getGovernanceHealth } from "@/controllers/monitoring.controller";
import type { MonitoringKpi } from "@/models/monitoring";

function ViewDetailsLink() {
  return (
    <Button variant="link" className="mt-auto h-auto justify-start p-0 text-sm">
      View details
    </Button>
  );
}

export function GovernanceHealthCard() {
  const breakdown = getGovernanceHealth();

  return (
    <Card className="h-full">
      <CardContent className="flex h-full flex-col">
        <p className="text-sm font-medium text-foreground">Governance Health</p>
        <div className="mt-4 flex flex-1 items-center gap-4">
          <DonutChart breakdown={breakdown} />
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-success" />
              Green ({breakdown.healthyPercent}%)
            </li>
            <li className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-warning-foreground" />
              Amber ({breakdown.amberPercent}%)
            </li>
            <li className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-destructive" />
              Red ({breakdown.redPercent}%)
            </li>
          </ul>
        </div>
        <ViewDetailsLink />
      </CardContent>
    </Card>
  );
}

export function MonitoringStatCard({ kpi }: { kpi: MonitoringKpi }) {
  return (
    <Card className="h-full">
      <CardContent className="flex h-full flex-col">
        <p
          className={cn(
            "text-3xl font-bold leading-none text-foreground",
            kpi.emphasis && "text-destructive",
          )}
        >
          {typeof kpi.value === "number"
            ? kpi.value.toLocaleString()
            : kpi.value}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">{kpi.label}</p>

        {kpi.trend ? (
          <p
            className={cn(
              "mt-2 flex items-center gap-1 text-sm",
              kpi.trend.positive ? "text-success" : "text-muted-foreground",
            )}
          >
            {kpi.trend.positive ? <ArrowUp className="size-3.5" /> : null}
            {kpi.trend.label}
          </p>
        ) : null}

        {kpi.sparkline ? (
          <div className="mt-3">
            <Sparkline data={kpi.sparkline} tone={kpi.sparklineTone ?? "success"} />
          </div>
        ) : (
          <div className="flex-1" />
        )}

        <ViewDetailsLink />
      </CardContent>
    </Card>
  );
}
