import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Recommendation } from "@/models/governance";

export function RecommendationCard({
  recommendation,
}: {
  recommendation: Recommendation;
}) {
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
          <ul className="space-y-2.5">
            {recommendation.conditions.map((condition, idx) => (
              <li
                key={idx}
                className="rounded-lg border border-border bg-surface-main px-3 py-2.5"
              >
                <div className="text-sm font-medium text-foreground">
                  {condition.label}
                </div>
                <div className="mt-0.5 text-sm text-muted-foreground">
                  {condition.detail}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          <span className="font-medium text-foreground">Why: </span>
          {recommendation.rationale}
        </p>
      </CardContent>
      <CardFooter className="mt-auto border-t-0 bg-transparent pt-0">
        <a href="#" className="text-sm font-medium text-primary hover:underline">
          View all conditions ({recommendation.conditionsCount})
        </a>
      </CardFooter>
    </Card>
  );
}
