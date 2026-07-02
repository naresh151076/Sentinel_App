import { Card, CardContent, CardTitle } from "@/components/ui/card";
import type { Recommendation } from "@/models/governance";

export function RecommendationCard({
  recommendation,
}: {
  recommendation: Recommendation;
}) {
  return (
    <Card>
      <CardContent className="pt-5">
        <CardTitle className="mb-4 text-base font-semibold">Recommendation</CardTitle>
        <div className="rounded-lg bg-green-50 border border-green-200 p-3 mb-4">
          <div className="font-bold text-sm text-green-900">{recommendation.title}</div>
          <p className="mt-1 text-xs text-green-800">
            {recommendation.description}
          </p>
        </div>
        <a
          href="#"
          className="text-xs font-medium text-primary hover:underline"
        >
          View conditions ({recommendation.conditionsCount})
        </a>
      </CardContent>
    </Card>
  );
}
