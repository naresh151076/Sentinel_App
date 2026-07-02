"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

const TONE_COLORS = {
  neutral: "text-foreground",
  success: "text-success",
  destructive: "text-destructive",
  warning: "text-warning-foreground",
} as const;

function getSmoothLinePath(points: { x: number; y: number }[]): string {
  if (points.length < 2) return "";

  let path = `M ${points[0].x} ${points[0].y}`;

  for (let index = 0; index < points.length - 1; index += 1) {
    const previous = points[index - 1] ?? points[index];
    const current = points[index];
    const next = points[index + 1];
    const after = points[index + 2] ?? next;

    const controlPoint1X = current.x + (next.x - previous.x) / 6;
    const controlPoint1Y = current.y + (next.y - previous.y) / 6;
    const controlPoint2X = next.x - (after.x - current.x) / 6;
    const controlPoint2Y = next.y - (after.y - current.y) / 6;

    path += ` C ${controlPoint1X} ${controlPoint1Y}, ${controlPoint2X} ${controlPoint2Y}, ${next.x} ${next.y}`;
  }

  return path;
}

export function Sparkline({
  data,
  tone = "success",
  className,
}: {
  data: number[];
  tone?: keyof typeof TONE_COLORS;
  className?: string;
}) {
  const gradientId = useId();

  if (data.length < 2) return null;

  const width = 160;
  const height = 40;
  const padding = 2;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const points = data.map((value, index) => ({
    x: padding + (index / (data.length - 1)) * (width - padding * 2),
    y:
      height -
      padding -
      ((value - min) / range) * (height - padding * 2),
  }));

  const linePath = getSmoothLinePath(points);
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${height} L ${points[0].x} ${height} Z`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={cn("h-10 w-full", TONE_COLORS[tone], className)}
      aria-hidden
    >
      <defs>
        <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.18" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill={`url(#${gradientId})`} />
      <path
        d={linePath}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="drop-shadow-sm"
      />
    </svg>
  );
}
