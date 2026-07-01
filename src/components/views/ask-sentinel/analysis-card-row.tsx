import { cn } from "@/lib/utils";
import type { AnalysisCard } from "@/models/conversation";

export function AnalysisCardRow({ cards }: { cards: AnalysisCard[] }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {cards.map((card) => (
        <div
          key={card.label}
          className={cn(
            "flex flex-col gap-3 rounded-2xl p-4",
            card.tone === "attention" ? "bg-red-50" : "bg-white",
          )}
        >
          <div
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-lg",
              card.tone === "attention"
                ? "bg-red-50 text-brand-red"
                : "bg-gray-100 text-gray-700",
            )}
          >
            <card.icon className="h-4 w-4" />
          </div>
          <div className="text-sm font-medium text-gray-500">
            {card.label}
          </div>
          <div className="text-base font-bold leading-snug text-gray-900">
            {card.title}
          </div>
          <div className="text-sm leading-snug text-gray-500">
            {card.description}
          </div>
        </div>
      ))}
    </div>
  );
}
