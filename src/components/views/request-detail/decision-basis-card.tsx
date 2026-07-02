import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import type { DecisionBasisItem } from "@/models/governance";

export function DecisionBasisCard({ items }: { items: DecisionBasisItem[] }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <CardTitle className="mb-4 text-base">Decision Basis</CardTitle>
        <div className="space-y-3">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600 mt-0.5" />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-gray-900">{item.label}</div>
                <div className="text-sm text-gray-600">{item.detail}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <a
            href="#"
            className="text-sm font-medium text-primary hover:underline"
          >
            View details
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
