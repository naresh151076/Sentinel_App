import { cn } from "@/lib/utils";
import type { UsagePattern } from "@/models/pattern";

interface PatternCardProps {
  pattern: UsagePattern;
  variant?: "dark" | "light";
}

export function PatternCard({ pattern, variant = "dark" }: PatternCardProps) {
  const Icon = pattern.icon;
  const isLight = variant === "light";

  return (
    <button
      type="button"
      className={cn(
        "flex h-32 flex-col items-start rounded-xl border p-4 text-left transition-shadow hover:shadow-md sm:h-36 sm:rounded-2xl sm:p-4",
        isLight
          ? "border-border bg-surface-main hover:border-border/80"
          : "border-white/15 bg-white/4 hover:border-white/25",
      )}
    >
      <div
        className={cn(
          "mb-3 flex h-10 w-10 items-center justify-center rounded-lg",
          isLight ? "bg-primary/10" : "bg-red-600/15",
        )}
      >
        <Icon className="h-6 w-6 stroke-1 text-brand-red" />
      </div>
      <div
        className={cn(
          "line-clamp-2 text-sm font-semibold leading-tight",
          isLight ? "text-foreground" : "text-gray-200",
        )}
      >
        {pattern.label}
      </div>
      <div
        className={cn(
          "mt-1 line-clamp-2 text-xs leading-tight",
          isLight ? "text-muted-foreground" : "text-gray-400",
        )}
      >
        {pattern.description}
      </div>
    </button>
  );
}
