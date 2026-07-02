import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AssessmentSummaryTab } from "@/components/views/request-detail/assessment-summary-tab";
import type { RequestDetail } from "@/models/governance";

const TABS = [
  { id: "assessment-summary", label: "Assessment Summary" },
  { id: "required-approvals", label: "Required Approvals" },
  { id: "applicable-policies", label: "Applicable Policies" },
  { id: "evidence", label: "Evidence" },
  { id: "history-changes", label: "History & Changes" },
];

export function RequestDetailTabs({ request }: { request: RequestDetail }) {
  return (
    <Tabs defaultValue="assessment-summary" className="w-full">
      <TabsList variant="line" className="border-b border-gray-200 w-full justify-start gap-8">
        {TABS.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.id} className="text-sm px-0 py-2">
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="assessment-summary" className="pt-5">
        <AssessmentSummaryTab request={request} />
      </TabsContent>

      {["required-approvals", "applicable-policies", "evidence", "history-changes"].map(
        (tabId) => (
          <TabsContent key={tabId} value={tabId} className="pt-6">
            <div className="text-center py-12">
              <p className="text-gray-500">Coming soon</p>
            </div>
          </TabsContent>
        ),
      )}
    </Tabs>
  );
}
