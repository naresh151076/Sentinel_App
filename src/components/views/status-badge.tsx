import { cn } from "@/lib/utils";
import type { RequestBadgeVariant } from "@/models/governance";

const VARIANT_CLASSES: Record<RequestBadgeVariant, string> = {
  critical: "bg-red-100 text-red-800",
  neutral: "bg-gray-100 text-gray-800",
  dark: "bg-gray-900 text-white",
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
        "inline-flex items-center rounded px-2 py-0.5 text-[10px] font-bold",
        VARIANT_CLASSES[variant],
      )}
    >
      {label}
    </span>
  );
}
