import Link from "next/link";
import { RecentRequestListItem } from "@/components/views/ask-sentinel/recent-request-item";
import { ROUTES } from "@/constants/routes";
import { getRecentRequests } from "@/controllers/governance.controller";

export function RecentRequests() {
  const requests = getRecentRequests();

  return (
    <div className="mb-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900">Recent requests</h2>
        <Link
          href={ROUTES.myRequests}
          className="text-sm font-bold text-brand-red hover:underline"
        >
          View all
        </Link>
      </div>
      <div className="flex flex-col gap-1 rounded-xl border border-gray-200 bg-white">
        {requests.map((item) => (
          <RecentRequestListItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
