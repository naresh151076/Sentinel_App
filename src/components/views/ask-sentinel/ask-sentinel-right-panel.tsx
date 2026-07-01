import { AttentionRequired } from "@/components/views/ask-sentinel/attention-required";
import { GovernanceGlance } from "@/components/views/ask-sentinel/governance-glance";
import { RecentRequests } from "@/components/views/ask-sentinel/recent-requests";

export function AskSentinelRightPanel() {
  return (
    <aside className="scrollbar-hide w-[340px] shrink-0 overflow-y-auto">
      <GovernanceGlance />
      <RecentRequests />
      <AttentionRequired />
    </aside>
  );
}
