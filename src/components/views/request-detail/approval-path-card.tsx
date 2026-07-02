import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ApprovalStep } from "@/models/governance";

export function ApprovalPathCard({ steps }: { steps: ApprovalStep[] }) {
  return (
    <Card className="flex h-full flex-col text-base">
      <CardHeader className="pb-3">
        <CardTitle className="font-semibold">Estimated Approval Path</CardTitle>
      </CardHeader>
      <CardContent className="flex min-h-0 flex-1 flex-col pt-0">
        <ol className="flex flex-1 flex-col">
          {steps.map((step, idx) => (
            <li key={idx} className="flex flex-1 gap-3.5">
              <div className="flex flex-col items-center self-stretch">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {step.order}
                </div>
                {idx < steps.length - 1 && (
                  <div className="my-1 w-px flex-1 bg-border" />
                )}
              </div>
              <div className="flex flex-col justify-center pb-1">
                <div className="text-base font-semibold text-foreground">
                  {step.role}
                </div>
                <div className="text-sm text-muted-foreground">
                  {step.subtitle}
                </div>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-3 shrink-0 text-sm text-muted-foreground">
          Estimated turnaround: ~{steps.length <= 3 ? "2–3" : "4–5"} business days
        </p>
      </CardContent>
    </Card>
  );
}
