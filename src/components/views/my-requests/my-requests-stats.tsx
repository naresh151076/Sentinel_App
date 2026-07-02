import { StatCard } from "@/components/views/ask-sentinel/stat-card";
import type { GovernanceStat } from "@/models/governance";
import { getMyRequestsStats } from "@/controllers/requests.controller";

export function GovernanceStats({ stats }: { stats: GovernanceStat[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-5">
      {stats.map((stat) => (
        <StatCard key={stat.id} stat={stat} />
      ))}
    </div>
  );
}

export function MyRequestsStats() {
  return <GovernanceStats stats={getMyRequestsStats()} />;
}
