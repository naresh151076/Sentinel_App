import { HelpCircle } from "lucide-react";

interface ClarifyingQuestionBannerProps {
  question: string;
}

export function ClarifyingQuestionBanner({
  question,
}: ClarifyingQuestionBannerProps) {
  return (
    <div className="rounded-xl bg-blue-50 border border-blue-200 p-6 flex gap-4 shadow">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100">
        <HelpCircle className="h-4 w-4 text-blue-600" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-blue-900">
          To better understand your request:
        </div>
        <div className="mt-2 text-sm text-blue-800">
          {question}
        </div>
      </div>
    </div>
  );
}
