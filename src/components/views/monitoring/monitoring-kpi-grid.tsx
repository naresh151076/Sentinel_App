import {
  GovernanceHealthCard,
  MonitoringStatCard,
} from "@/components/views/monitoring/monitoring-kpi-card";
import { getMonitoringKpis } from "@/controllers/monitoring.controller";

export function MonitoringKpiGrid() {
  const kpis = getMonitoringKpis();

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
      <GovernanceHealthCard />
      {kpis.map((kpi) => (
        <MonitoringStatCard key={kpi.id} kpi={kpi} />
      ))}
    </div>
  );
}
