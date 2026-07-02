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
      <CardHeader className="pb-3">
        <CardTitle className="font-semibold">
          Key Evidence{" "}
          <span className="font-normal text-muted-foreground">(auto-collected)</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col pt-0">
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-2.5 rounded-lg border border-border/60 bg-surface-main px-3 py-2"
            >
              <CircleCheck className="h-[1.125rem] w-[1.125rem] shrink-0 text-success" />
              <div className="min-w-0 flex-1 leading-tight">
                <div className="text-base font-semibold text-foreground">
                  {item.label}
                </div>
                <div className="text-sm text-muted-foreground">
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
