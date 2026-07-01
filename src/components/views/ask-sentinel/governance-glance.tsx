import { StatCard } from "@/components/views/ask-sentinel/stat-card";
import { getGovernanceStats } from "@/controllers/governance.controller";

export function GovernanceGlance() {
  const stats = getGovernanceStats();

  return (
    <div className="mb-8">
      <h2 className="mb-4 text-lg font-bold text-gray-900">
        Governance at a glance
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>
    </div>
  );
}
