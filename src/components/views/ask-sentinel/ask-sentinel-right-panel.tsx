import { AttentionRequired } from "@/components/views/ask-sentinel/attention-required";
import { ContinuousCompliance } from "@/components/views/ask-sentinel/continuous-compliance";
import { GovernanceGlance } from "@/components/views/ask-sentinel/governance-glance";
import { RecentRequests } from "@/components/views/ask-sentinel/recent-requests";

export function AskSentinelRightPanel() {
  return (
    <aside className="scrollbar-hide w-[340px] shrink-0 overflow-y-auto border-l border-gray-200 bg-surface-low px-6 py-6 pb-20">
      <GovernanceGlance />
      <RecentRequests />
      <AttentionRequired />
      <ContinuousCompliance />
    </aside>
  );
}
