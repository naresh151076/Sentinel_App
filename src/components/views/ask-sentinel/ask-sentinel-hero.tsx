import { IntakeInputBar } from "@/components/views/ask-sentinel/intake-input-bar";
import { PatternGrid } from "@/components/views/ask-sentinel/pattern-grid";

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
      <div className="space-y-2">
        <h1 className="text-5xl font-bold tracking-tight text-white">
          How can Sentinel
        </h1>
        <h1 className="text-5xl font-bold tracking-tight text-brand-red">
          help you today?
        </h1>
      </div>
      <div>
        <IntakeInputBar
          value={draft}
          onValueChange={onDraftChange}
          onSubmit={onSubmit}
          placeholder="e.g. I want to use customer purchase data for a loyalty programme in France"
          variant="hero"
        />
      </div>
      <div>
        <PatternGrid />
      </div>
    </div>
  );
}
