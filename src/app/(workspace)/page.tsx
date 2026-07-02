import { Topbar } from "@/components/layout/topbar";
import { AskSentinelRightPanel } from "@/components/views/ask-sentinel/ask-sentinel-right-panel";
import { AskSentinelWorkspace } from "@/components/views/ask-sentinel/ask-sentinel-workspace";

export default function AskSentinelPage() {
  return (
    <div className="flex flex-1 overflow-hidden">
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <Topbar />
        <div className="flex flex-1 flex-col overflow-hidden bg-surface-panel px-8 py-8">
          <AskSentinelWorkspace />
        </div>
      </div>
      <div className="h-full w-[392px] shrink-0 overflow-hidden bg-surface-panel px-6 py-8">
        <AskSentinelRightPanel />
      </div>
    </div>
  );
}
