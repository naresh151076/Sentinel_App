import { MonitoringStatCard } from "@/components/views/monitoring/monitoring-stat-card";
import { getMonitoringStats } from "@/controllers/monitoring.controller";

export function MonitoringStats() {
  const stats = getMonitoringStats();

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((stat) => (
        <MonitoringStatCard key={stat.id} stat={stat} />
      ))}
    </div>
  );
}
