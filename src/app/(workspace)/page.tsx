import { AskSentinelHero } from "@/components/views/ask-sentinel/ask-sentinel-hero";
import { AskSentinelRightPanel } from "@/components/views/ask-sentinel/ask-sentinel-right-panel";

export default function AskSentinelPage() {
  return (
    <div className="flex flex-1 gap-8 overflow-hidden p-8">
      <AskSentinelHero />
      <AskSentinelRightPanel />
    </div>
  );
}
