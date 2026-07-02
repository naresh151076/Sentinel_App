import { IntakeInputBar } from "@/components/views/ask-sentinel/intake-input-bar";
import { PatternGrid } from "@/components/views/ask-sentinel/pattern-grid";
import { ComplianceMonitoringBanner } from "@/components/views/ask-sentinel/compliance-monitoring-banner";

interface AskSentinelHeroProps {
  draft: string;
  onDraftChange: (value: string) => void;
  onSubmit: (value: string) => void;
}

export function AskSentinelHero({
  draft,
  onDraftChange,
  onSubmit,
}: AskSentinelHeroProps) {
  return (
    <div className="space-y-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          How can Sentinel help you today?
        </h1>
      </div>
      <div className="mx-auto max-w-3xl">
        <IntakeInputBar
          value={draft}
          onValueChange={onDraftChange}
          onSubmit={onSubmit}
          placeholder="e.g. I want to use customer purchase data for a loyalty programme in France"
          variant="centered"
        />
      </div>
      <PatternGrid />
    </div>
  );
}
