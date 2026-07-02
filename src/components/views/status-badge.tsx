import { cn } from "@/lib/utils";
import type { RequestBadgeVariant } from "@/models/governance";

const VARIANT_CLASSES: Record<RequestBadgeVariant, string> = {
  critical: "bg-destructive/10 text-destructive",
  warning: "bg-warning-muted text-warning-foreground",
  success: "bg-success-muted text-success-muted-foreground",
  neutral: "bg-muted text-muted-foreground",
  dark: "bg-foreground text-background",
};

export function StatusBadge({
  label,
  variant,
}: {
  label: string;
  variant: RequestBadgeVariant;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold",
        VARIANT_CLASSES[variant],
      )}
    >
      {label}
    </span>
  );
}
