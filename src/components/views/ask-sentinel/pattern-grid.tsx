import { PatternCard } from "@/components/views/ask-sentinel/pattern-card";
import { getCommonPatterns } from "@/controllers/patterns.controller";
import { ROUTES } from "@/constants/routes";

export function PatternGrid() {
  const patterns = getCommonPatterns();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">
          Common Patterns
        </h3>
        <a href={ROUTES.patternsLibrary} className="text-sm font-semibold text-brand-red hover:text-red-600">
          View all patterns →
        </a>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-5">
        {patterns.map((pattern) => (
          <PatternCard key={pattern.id} pattern={pattern} />
        ))}
      </div>
    </div>
  );
}
