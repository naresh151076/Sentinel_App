import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ApprovalStep } from "@/models/governance";

export function ApprovalPathCard({ steps }: { steps: ApprovalStep[] }) {
  return (
    <Card className="h-full text-base">
      <CardHeader>
        <CardTitle className="font-semibold">Estimated Approval Path</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col pt-0">
        <ol className="space-y-0">
          {steps.map((step, idx) => (
            <li key={idx} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {step.order}
                </div>
                {idx < steps.length - 1 && (
                  <div className="my-1 w-px flex-1 min-h-8 bg-border" />
                )}
              </div>
              <div className={idx < steps.length - 1 ? "pb-6 pt-1" : "pt-1"}>
                <div className="font-medium text-foreground">{step.role}</div>
                <div className="mt-0.5 text-sm text-muted-foreground">
                  {step.subtitle}
                </div>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-muted-foreground">
          Estimated turnaround: ~2–3 business days
        </p>
      </CardContent>
    </Card>
  );
}
