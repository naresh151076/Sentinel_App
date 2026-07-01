import {
  getDomainApprovals,
  getTotalMonitoredApprovals,
} from "@/controllers/monitoring.controller";

export function DomainApprovalsPanel() {
  const domains = getDomainApprovals();
  const total = getTotalMonitoredApprovals();
  const max = Math.max(...domains.map((domain) => domain.count));

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xs font-bold tracking-wide text-gray-400 uppercase">
        Approvals by business domain
      </h2>
      <div className="flex flex-col gap-4">
        {domains.map((domain) => (
          <div key={domain.id} className="flex items-center gap-4">
            <div className="w-32 shrink-0 text-sm font-medium text-gray-900">
              {domain.label}
            </div>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full bg-gray-900"
                style={{ width: `${(domain.count / max) * 100}%` }}
              />
            </div>
            <div className="w-6 shrink-0 text-right text-sm font-bold text-gray-900">
              {domain.count}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 text-xs text-gray-400">
        {total} monitored approvals across SG business domains.
      </p>
    </div>
  );
}
