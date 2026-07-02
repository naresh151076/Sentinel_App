import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getMonitoringAlerts } from "@/controllers/monitoring.controller";
import type {
  MonitoringAlertImpact,
  MonitoringAlertStatus,
} from "@/models/monitoring";

const IMPACT_STYLES: Record<MonitoringAlertImpact, string> = {
  High: "text-destructive",
  Medium: "text-warning-foreground",
  Low: "text-muted-foreground",
};

const STATUS_STYLES: Record<MonitoringAlertStatus, string> = {
  New: "bg-destructive/10 text-destructive border-destructive/20",
  "In Review": "bg-warning-muted text-warning-foreground border-warning-foreground/20",
  Informational: "bg-muted text-foreground border-border",
};

export function MonitoringAlertsCard() {
  const alerts = getMonitoringAlerts();

  return (
    <Card className="h-full">
      <CardHeader className="border-b">
        <CardTitle>Alerts Requiring Attention</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b text-left text-sm text-muted-foreground">
                <th className="px-(--card-spacing) py-3 font-medium">Alert</th>
                <th className="px-3 py-3 font-medium">Impact</th>
                <th className="px-3 py-3 font-medium">Affected Approvals</th>
                <th className="px-3 py-3 font-medium">Detected</th>
                <th className="px-(--card-spacing) py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {alerts.map((alert) => (
                <tr
                  key={alert.id}
                  className="border-b last:border-b-0 hover:bg-muted/40"
                >
                  <td className="px-(--card-spacing) py-3.5 font-medium text-foreground">
                    {alert.title}
                  </td>
                  <td
                    className={cn(
                      "px-3 py-3.5 font-medium",
                      IMPACT_STYLES[alert.impact],
                    )}
                  >
                    {alert.impact}
                  </td>
                  <td className="px-3 py-3.5 text-foreground">
                    {alert.affectedApprovals}
                  </td>
                  <td className="px-3 py-3.5 text-muted-foreground">
                    {alert.detected}
                  </td>
                  <td className="px-(--card-spacing) py-3.5">
                    <Badge
                      variant="outline"
                      className={STATUS_STYLES[alert.status]}
                    >
                      {alert.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="border-t px-(--card-spacing) py-3">
          <Button variant="link" className="h-auto p-0 text-sm">
            View all alerts
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
