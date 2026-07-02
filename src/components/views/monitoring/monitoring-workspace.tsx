import { MonitoringAlertsCard } from "@/components/views/monitoring/monitoring-alerts-card";
import { MonitoringCapabilitiesCard } from "@/components/views/monitoring/monitoring-capabilities-card";
import { MonitoringDomainsCard } from "@/components/views/monitoring/monitoring-domains-card";
import { MonitoringKpiGrid } from "@/components/views/monitoring/monitoring-kpi-grid";
import { MonitoringToolbar } from "@/components/views/monitoring/monitoring-toolbar";

export function MonitoringWorkspace() {
  return (
    <main className="flex flex-1 flex-col overflow-y-auto bg-surface-main">
      <div className="flex-1 space-y-6 p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold text-foreground">Monitoring</h1>
            <p className="text-base text-muted-foreground">
              Real-time visibility into approvals, compliance status, and
              governance health.
            </p>
          </div>
          <MonitoringToolbar />
        </div>

        <MonitoringKpiGrid />

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <MonitoringAlertsCard />
          </div>
          <MonitoringDomainsCard />
        </div>

        <MonitoringCapabilitiesCard />
      </div>
    </main>
  );
}
