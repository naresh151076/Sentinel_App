import { MonitoringHeader } from "@/components/views/monitoring/monitoring-header";
import { MonitoringStats } from "@/components/views/monitoring/monitoring-stats";
import { AlertsPanel } from "@/components/views/monitoring/alerts-panel";
import { DomainApprovalsPanel } from "@/components/views/monitoring/domain-approvals-panel";
import { WorkflowPanel } from "@/components/views/monitoring/workflow-panel";

export default function MonitoringPage() {
  return (
    <main className="flex-1 overflow-y-auto p-8">
      <div className="flex flex-col gap-6">
        <MonitoringHeader />
        <MonitoringStats />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <AlertsPanel />
          <DomainApprovalsPanel />
        </div>
        <WorkflowPanel />
      </div>
    </main>
  );
}
