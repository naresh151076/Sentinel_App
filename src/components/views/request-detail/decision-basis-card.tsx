import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { DecisionBasisItem } from "@/models/governance";

export function DecisionBasisCard({ items }: { items: DecisionBasisItem[] }) {
  return (
    <Card className="h-full text-base">
      <CardHeader>
        <CardTitle className="font-semibold">Decision Basis</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col pt-0">
        <div className="space-y-4">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success text-success-foreground">
                <Check className="h-3 w-3 stroke-[3]" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="font-medium text-foreground">{item.label}</div>
                <div className="text-sm text-muted-foreground">{item.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="mt-auto border-t-0 bg-transparent pt-0">
        <a href="#" className="text-sm font-medium text-primary hover:underline">
          View details
        </a>
      </CardFooter>
    </Card>
  );
}
