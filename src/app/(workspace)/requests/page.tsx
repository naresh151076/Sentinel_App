import { MyRequestsHeader } from "@/components/views/my-requests/my-requests-header";
import { MyRequestsSummary } from "@/components/views/my-requests/my-requests-summary";
import { MyRequestsTable } from "@/components/views/my-requests/my-requests-table";

export default function MyRequestsPage() {
  return (
    <main className="flex-1 overflow-y-auto p-8">
      <div className="flex flex-col gap-6">
        <MyRequestsHeader />
        <MyRequestsSummary />
        <MyRequestsTable />
      </div>
    </main>
  );
}
