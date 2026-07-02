import { RequestDetailHeader } from "@/components/views/request-detail/request-detail-header";
import { RequestDetailTabs } from "@/components/views/request-detail/request-detail-tabs";
import type { RequestDetail } from "@/models/governance";

export function RequestDetailWorkspace({
  request,
}: {
  request: RequestDetail;
}) {
  return (
    <main className="flex flex-1 flex-col overflow-y-auto bg-surface-main">
      <div className="flex-1 space-y-4 p-8">
        <RequestDetailHeader request={request} />
        <RequestDetailTabs request={request} />
      </div>
    </main>
  );
}
