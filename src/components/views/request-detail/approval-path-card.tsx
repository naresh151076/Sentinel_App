import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import type { ApprovalStep } from "@/models/governance";

export function ApprovalPathCard({ steps }: { steps: ApprovalStep[] }) {
  return (
    <Card>
      <CardContent className="pt-5">
        <CardTitle className="mb-4 text-base font-semibold">Estimated Approval Path</CardTitle>
        <div className="flex items-start gap-1.5">
          {steps.map((step, idx) => (
            <div key={idx} className="flex-1 flex items-start gap-2 min-w-0">
              <div className="flex flex-col items-center pt-0.5 shrink-0">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  {step.order}
                </div>
              </div>
              <div className="min-w-0">
                <div className="font-medium text-xs text-gray-900 break-words">
                  {step.role}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">{step.subtitle}</div>
              </div>
              {idx < steps.length - 1 && (
                <ArrowRight className="h-3 w-3 text-gray-400 mt-0.5 ml-0.5 shrink-0" />
              )}
            </div>
          ))}
        </div>
        <div className="mt-3 text-xs text-gray-500">~2-3 business days</div>
      </CardContent>
    </Card>
  );
}
