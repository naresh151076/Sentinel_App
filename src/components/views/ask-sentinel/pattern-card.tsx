import type { UsagePattern } from "@/models/pattern";

export function PatternCard({ pattern }: { pattern: UsagePattern }) {
  const Icon = pattern.icon;

  return (
    <button
      type="button"
      className="flex h-32 flex-col items-start rounded-xl border border-white/15 bg-white/4 p-4 text-left transition-shadow hover:border-white/25 hover:shadow-md sm:h-36 sm:rounded-2xl sm:p-4"
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/15">
        <Icon className="h-6 w-6 stroke-1 text-brand-red" />
      </div>
      <div className="line-clamp-2 text-sm font-semibold leading-tight text-gray-200">
        {pattern.label}
      </div>
      <div className="mt-1 line-clamp-2 text-xs leading-tight text-gray-400">
        {pattern.description}
      </div>
    </button>
  );
}
