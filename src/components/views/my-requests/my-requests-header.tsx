import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";

export function MyRequestsHeader() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-6">
      <div>
        <h1 className="mb-1 text-2xl font-bold text-gray-900">
          My requests
        </h1>
        <p className="text-sm text-gray-500">
          Track every governance request from intake through decision
        </p>
      </div>
      <Button asChild>
        <Link href={ROUTES.newRequest}>
          <Plus className="h-3.5 w-3.5" />
          New request
        </Link>
      </Button>
    </div>
  );
}
