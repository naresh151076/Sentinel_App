import { cn } from "@/lib/utils";

const STAGES = ["Conversational intake", "Pattern match", "Confirm"];

export function StageBreadcrumb({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="flex shrink-0 items-center gap-2 text-base text-gray-400">
      {STAGES.map((stage, index) => (
        <span key={stage} className="flex items-center gap-2">
          <span className={cn(index === activeIndex && "font-bold text-gray-900")}>
            {stage}
          </span>
          {index < STAGES.length - 1 && (
            <span className="text-gray-300">→</span>
          )}
        </span>
      ))}
    </div>
  );
}
