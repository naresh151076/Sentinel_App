import { AskSentinelRightPanel } from "@/components/views/ask-sentinel/ask-sentinel-right-panel";
import { AskSentinelWorkspace } from "@/components/views/ask-sentinel/ask-sentinel-workspace";

export default function AskSentinelPage() {
  return (
    <div className="flex flex-1 gap-8 overflow-hidden bg-surface-container p-8">
      <AskSentinelWorkspace />
      <AskSentinelRightPanel />
    </div>
  );
}
