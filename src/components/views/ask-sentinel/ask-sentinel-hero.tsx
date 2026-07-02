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
    <div className="overflow-hidden rounded-lg shadow-sm sm:rounded-3xl">
      <div className="bg-black px-4 pt-10 pb-8 sm:px-6 sm:pt-16 sm:pb-10 lg:px-10 lg:pt-20 lg:pb-12">
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold tracking-tight text-white">
              How can Sentinel
            </h1>
            <h1 className="text-5xl font-bold tracking-tight text-brand-red">
              help you today?
            </h1>
          </div>
          <IntakeInputBar
            value={draft}
            onValueChange={onDraftChange}
            onSubmit={onSubmit}
            placeholder="e.g. I want to use customer purchase data for a loyalty programme in France"
            variant="hero"
          />
        </div>
      </div>
      <div className="bg-surface-container px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
        <PatternGrid variant="light" />
      </div>
    </div>
  );
}
