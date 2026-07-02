"use client";

import { useState } from "react";
import { HelpCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Recommendation } from "@/models/governance";

const VISIBLE_CONDITIONS_BY_DEFAULT = 2;

export function RecommendationCard({
  recommendation,
}: {
  recommendation: Recommendation;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasMoreConditions =
    recommendation.conditions.length > VISIBLE_CONDITIONS_BY_DEFAULT;
  const visibleConditions = expanded
    ? recommendation.conditions
    : recommendation.conditions.slice(0, VISIBLE_CONDITIONS_BY_DEFAULT);

  return (
    <Card className="h-full text-base">
      <CardHeader>
        <CardTitle className="font-semibold">Recommendation</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4 pt-0">
        <div className="rounded-lg border border-success-border bg-success-muted p-4">
          <div className="font-bold text-success-muted-foreground">
            {recommendation.title}
          </div>
          <p className="mt-1 text-sm text-success-muted-foreground/80">
            {recommendation.description}
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium text-foreground">Key conditions</p>
          <TooltipProvider>
            <ul className="space-y-2.5">
              {visibleConditions.map((condition, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between gap-2 rounded-lg border border-border bg-surface-main px-3 py-2.5"
                >
                  <div className="text-sm font-medium text-foreground">
                    {condition.label}
                  </div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        type="button"
                        className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
                        aria-label={`Details for ${condition.label}`}
                      >
                        <HelpCircle className="h-4 w-4" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="max-w-xs">
                      {condition.detail}
                    </TooltipContent>
                  </Tooltip>
                </li>
              ))}
            </ul>
          </TooltipProvider>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          <span className="font-medium text-foreground">Why: </span>
          {recommendation.rationale}
        </p>
      </CardContent>
      {hasMoreConditions && (
        <CardFooter className="mt-auto border-t-0 bg-transparent pt-0">
          <button
            type="button"
            onClick={() => setExpanded((current) => !current)}
            className="text-sm font-medium text-primary hover:underline"
          >
            {expanded ? "Hide" : "View details"}
          </button>
        </CardFooter>
      )}
    </Card>
  );
}
