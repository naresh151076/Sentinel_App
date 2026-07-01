import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getMonitoringAlerts } from "@/controllers/monitoring.controller";
import type { AlertSeverity } from "@/models/monitoring";

const SEVERITY_CLASSES: Record<AlertSeverity, string> = {
  critical: "border-red-100 bg-red-50 text-brand-red",
  warning: "border-amber-100 bg-amber-50 text-amber-600",
  info: "border-gray-100 bg-gray-50 text-gray-400",
};

export function AlertsPanel() {
  const alerts = getMonitoringAlerts();

  return (
    <div className="rounded-xl bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900">
          Alerts requiring attention
        </h2>
        <Badge
          variant="outline"
          className="border-red-200 text-brand-red uppercase"
        >
          {alerts.length} new
        </Badge>
      </div>
      <div className="flex flex-col gap-1">
        {alerts.map((alert) => {
          const Icon = alert.icon;
          return (
            <div key={alert.id} className="flex items-center gap-4 rounded-lg bg-gray-50 px-3 py-4">
              <div
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border",
                  SEVERITY_CLASSES[alert.severity],
                )}
              >
                <Icon className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-bold text-gray-900">
                  {alert.title}
                </div>
                <div className="truncate text-xs text-gray-500">
                  {alert.description}
                </div>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href={alert.href}>{alert.actionLabel}</Link>
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
