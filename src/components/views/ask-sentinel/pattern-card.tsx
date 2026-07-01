import type { UsagePattern } from "@/models/pattern";

export function PatternCard({ pattern }: { pattern: UsagePattern }) {
  const Icon = pattern.icon;

  return (
    <button
      type="button"
      className="flex min-h-40 flex-col items-center rounded-2xl border border-gray-200 bg-white p-5 text-center transition-colors hover:border-gray-300 hover:bg-gray-50"
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center text-gray-700">
        <Icon className="h-6 w-6" />
      </div>
      <div className="mb-1.5 text-base font-bold leading-snug text-gray-900">
        {pattern.label}
      </div>
      <div className="text-sm leading-snug text-gray-500">
        {pattern.description}
      </div>
    </button>
  );
}
