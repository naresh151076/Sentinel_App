import type { UsagePattern } from "@/models/pattern";

export function PatternCard({ pattern }: { pattern: UsagePattern }) {
  const Icon = pattern.icon;

  return (
    <button
      type="button"
      className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-5 text-center transition-shadow hover:border-gray-300 hover:shadow-md"
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center text-gray-700">
        <Icon className="h-6 w-6" />
      </div>
      <div className="mb-2 text-sm font-bold text-gray-900">
        {pattern.label}
      </div>
      <div className="text-xs leading-relaxed text-gray-500">
        {pattern.description}
      </div>
    </button>
  );
}
