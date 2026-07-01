import { PatternCard } from "@/components/views/ask-sentinel/pattern-card";
import { PatternViewAllCard } from "@/components/views/ask-sentinel/pattern-view-all-card";
import { getCommonPatterns } from "@/controllers/patterns.controller";

export function PatternGrid() {
  const patterns = getCommonPatterns();

  return (
    <div>
      <div className="mb-4 font-bold text-gray-900">
        Start with a common pattern
      </div>
      <div className="grid grid-cols-4 gap-4">
        {patterns.map((pattern) => (
          <PatternCard key={pattern.id} pattern={pattern} />
        ))}
        <PatternViewAllCard />
      </div>
    </div>
  );
}
