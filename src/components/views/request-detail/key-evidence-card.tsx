import { CircleCheck } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { EvidenceItem } from "@/models/conversation";

export function KeyEvidenceCard({ items }: { items: EvidenceItem[] }) {
  return (
    <Card className="h-full text-base">
      <CardHeader>
        <CardTitle className="font-semibold">
          Key Evidence{" "}
          <span className="font-normal text-muted-foreground">(auto-collected)</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col pt-0">
        <ul className="space-y-4">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-start gap-3 rounded-lg border border-border/60 bg-surface-main px-4 py-3"
            >
              <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-success" />
              <div className="min-w-0 flex-1">
                <div className="font-medium text-foreground">{item.label}</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {item.sublabel}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto border-t-0 bg-transparent pt-0">
        <a href="#" className="text-sm font-medium text-primary hover:underline">
          View all evidence
        </a>
      </CardFooter>
    </Card>
  );
}
