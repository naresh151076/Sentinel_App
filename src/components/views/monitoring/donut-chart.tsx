import type { GovernanceHealthBreakdown } from "@/models/monitoring";

const SEGMENT_COLORS = {
  healthy: "stroke-success",
  amber: "stroke-warning-foreground",
  red: "stroke-destructive",
} as const;

export function DonutChart({
  breakdown,
}: {
  breakdown: GovernanceHealthBreakdown;
}) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const segments = [
    { key: "healthy", value: breakdown.healthyPercent, color: SEGMENT_COLORS.healthy },
    { key: "amber", value: breakdown.amberPercent, color: SEGMENT_COLORS.amber },
    { key: "red", value: breakdown.redPercent, color: SEGMENT_COLORS.red },
  ];

  let offset = 0;

  return (
    <div className="relative h-24 w-24 shrink-0">
      <svg viewBox="0 0 96 96" className="h-full w-full -rotate-90">
        <circle
          cx="48"
          cy="48"
          r={radius}
          fill="none"
          strokeWidth="10"
          className="stroke-muted"
        />
        {segments.map((segment) => {
          const length = (segment.value / 100) * circumference;
          const circle = (
            <circle
              key={segment.key}
              cx="48"
              cy="48"
              r={radius}
              fill="none"
              strokeWidth="10"
              strokeDasharray={`${length} ${circumference - length}`}
              strokeDashoffset={-offset}
              strokeLinecap="butt"
              className={segment.color}
            />
          );
          offset += length;
          return circle;
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-lg font-bold leading-none text-foreground">
          {breakdown.healthyPercent}%
        </span>
        <span className="mt-0.5 text-xs text-muted-foreground">Healthy</span>
      </div>
    </div>
  );
}
