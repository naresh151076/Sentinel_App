import type { UsagePattern } from "@/models/pattern";

export function PatternCard({ pattern }: { pattern: UsagePattern }) {
  const Icon = pattern.icon;

  return (
    <button
      type="button"
      className="flex h-28 flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-4 text-center transition-shadow hover:border-gray-300 hover:shadow-md"
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-red-50">
        <Icon className="h-6 w-6 stroke-1 text-brand-red" />
      </div>
      <div className="line-clamp-2 text-base font-semibold leading-snug text-gray-900">
        {pattern.label}
      </div>
    </button>
  );
}
