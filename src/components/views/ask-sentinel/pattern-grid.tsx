import { PatternCard } from "@/components/views/ask-sentinel/pattern-card";
import { getCommonPatterns } from "@/controllers/patterns.controller";

export function PatternGrid() {
  const patterns = getCommonPatterns();

  return (
    <div>
      <div className="mb-4 font-bold text-gray-900">
        Start with a common pattern
      </div>
      <div className="grid grid-cols-7 gap-3">
        {patterns.map((pattern) => (
          <PatternCard key={pattern.id} pattern={pattern} />
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <button
          type="button"
          className="rounded-lg border border-transparent px-4 py-2 text-sm font-bold text-gray-900 hover:bg-gray-100 hover:text-gray-600"
        >
          View all patterns
        </button>
      </div>
    </div>
  );
}
