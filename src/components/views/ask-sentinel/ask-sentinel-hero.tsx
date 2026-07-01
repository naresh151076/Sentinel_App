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
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center">
      <h1 className="mb-10 text-4xl font-bold tracking-tight text-gray-900">
        What would you like to do with data today?
      </h1>
      <IntakeInputBar
        value={draft}
        onValueChange={onDraftChange}
        onSubmit={onSubmit}
        placeholder="e.g. I want to use customer purchase data for a loyalty programme in France"
        variant="centered"
      />
      <PatternGrid />
    </div>
  );
}
