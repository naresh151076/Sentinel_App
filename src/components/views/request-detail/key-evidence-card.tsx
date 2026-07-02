import { Card, CardContent, CardTitle } from "@/components/ui/card";
import type { EvidenceItem } from "@/models/conversation";

export function KeyEvidenceCard({ items }: { items: EvidenceItem[] }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <CardTitle className="mb-4 text-base">Key Evidence (auto-collected)</CardTitle>
        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-3 rounded-lg border border-gray-200 p-3"
            >
              <item.icon className="h-4 w-4 shrink-0 text-gray-600 mt-0.5" />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm text-gray-900">
                  {item.label}
                </div>
                <div className="text-xs text-gray-500">{item.sublabel}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <a
            href="#"
            className="text-sm font-medium text-primary hover:underline"
          >
            View all evidence
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
