import { StatCard } from "@/components/views/ask-sentinel/stat-card";
import { getGovernanceStats } from "@/controllers/governance.controller";

export function GovernanceGlance() {
  const stats = getGovernanceStats();

  return (
    <div className="space-y-4">
      <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500">
        At a glance
      </h2>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>
    </div>
  );
}
