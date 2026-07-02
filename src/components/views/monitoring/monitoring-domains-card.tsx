import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getDomainDistribution } from "@/controllers/monitoring.controller";

export function MonitoringDomainsCard() {
  const domains = getDomainDistribution();

  return (
    <Card className="h-full">
      <CardHeader className="border-b">
        <CardTitle>Top Domains</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-3">
          {domains.map((domain) => (
            <li key={domain.name} className="space-y-1.5">
              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="text-foreground">{domain.name}</span>
                <span className="font-medium text-foreground">
                  {domain.percent}%
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-sm bg-muted">
                <div
                  className="h-full rounded-sm bg-primary"
                  style={{ width: `${domain.percent}%` }}
                />
              </div>
            </li>
          ))}
        </ul>

        <Button variant="link" className="h-auto p-0 text-sm">
          View full report
        </Button>
      </CardContent>
    </Card>
  );
}
