import { IntakeInputBar } from "@/components/views/ask-sentinel/intake-input-bar";
import { PatternGrid } from "@/components/views/ask-sentinel/pattern-grid";

export function AskSentinelHero() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center overflow-y-auto p-8">
      <div className="flex h-full flex-col rounded-3xl border border-gray-100 bg-surface-main p-12 shadow-sm">
        <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center">
          <h1 className="mb-10 text-4xl font-bold tracking-tight text-gray-900">
            What would you like to do with data today?
          </h1>
          <IntakeInputBar />
          <PatternGrid />
        </div>
      </div>
    </main>
  );
}
