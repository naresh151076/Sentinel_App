import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ROUTES } from "@/constants/routes";

export function PatternViewAllCard() {
  return (
    <Link
      href={ROUTES.patternsLibrary}
      className="flex h-28 flex-col items-center justify-center rounded-2xl border border-dashed border-gray-700 bg-gray-800 p-4 text-center transition-colors hover:border-gray-600 hover:bg-gray-700"
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-700">
        <ArrowRight className="h-5 w-5 text-brand-red" />
      </div>
      <div className="text-base font-semibold text-brand-red">View all patterns</div>
    </Link>
  );
}
