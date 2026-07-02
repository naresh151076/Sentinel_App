import { Card, CardContent, CardTitle } from "@/components/ui/card";
import type { EvidenceItem } from "@/models/conversation";

export function KeyEvidenceCard({ items }: { items: EvidenceItem[] }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <CardTitle className="mb-4 text-lg font-semibold">Key Evidence (auto-collected)</CardTitle>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-3 rounded-lg p-3 hover:bg-gray-50 transition-colors"
            >
              <item.icon className="h-5 w-5 shrink-0 text-gray-400 mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm text-gray-900">
                  {item.label}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">{item.sublabel}</div>
              </div>
            </div>
          ))}
        </div>
        <a
          href="#"
          className="text-sm font-medium text-primary hover:underline"
        >
          View all evidence
        </a>
      </CardContent>
    </Card>
  );
}
