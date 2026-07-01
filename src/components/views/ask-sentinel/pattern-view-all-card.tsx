import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ROUTES } from "@/constants/routes";

export function PatternViewAllCard() {
  return (
    <Link
      href={ROUTES.patternsLibrary}
      className="flex min-h-40 flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-5 text-center transition-colors hover:border-gray-400 hover:bg-gray-100"
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-red">
        <ArrowRight className="h-5 w-5" />
      </div>
      <div className="text-sm font-bold text-brand-red">View all patterns</div>
    </Link>
  );
}
