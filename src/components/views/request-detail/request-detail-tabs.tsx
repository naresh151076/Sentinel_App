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
    <Tabs defaultValue="assessment-summary" className="w-full gap-0">
      <TabsList
        variant="line"
        className="h-auto w-full justify-start gap-8 border-0"
      >
        {TABS.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.id}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="assessment-summary" className="mt-8">
        <AssessmentSummaryTab request={request} />
      </TabsContent>

      {["required-approvals", "applicable-policies", "evidence", "history-changes"].map(
        (tabId) => (
          <TabsContent key={tabId} value={tabId} className="mt-8">
            <div className="py-12 text-center">
              <p className="text-base text-muted-foreground">Coming soon</p>
            </div>
          </TabsContent>
        ),
      )}
    </Tabs>
  );
}
