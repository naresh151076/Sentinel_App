import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import type { ApprovalStep } from "@/models/governance";

export function ApprovalPathCard({ steps }: { steps: ApprovalStep[] }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <CardTitle className="mb-6 text-base">Estimated Approval Path</CardTitle>
        <div className="flex items-start gap-2">
          {steps.map((step, idx) => (
            <div key={idx} className="flex-1 flex items-start gap-2 min-w-0">
              <div className="flex flex-col items-center pt-1 shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  {step.order}
                </div>
              </div>
              <div className="min-w-0 pt-0.5">
                <div className="font-medium text-sm text-gray-900 break-words">
                  {step.role}
                </div>
                <div className="text-xs text-gray-500">{step.subtitle}</div>
              </div>
              {idx < steps.length - 1 && (
                <ArrowRight className="h-4 w-4 text-gray-400 mt-1 ml-1 shrink-0" />
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 text-xs text-gray-500">~2-3 business days</div>
      </CardContent>
    </Card>
  );
}
