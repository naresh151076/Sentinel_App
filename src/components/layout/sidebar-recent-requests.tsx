import Link from "next/link";
import { getRecentRequests } from "@/controllers/governance.controller";

export function SidebarRecentRequests() {
  const requests = getRecentRequests();

  return (
    <div className="space-y-2.5">
      <h3 className="px-3 text-xs font-bold text-gray-500">Recent requests</h3>
      <div className="space-y-1">
        {requests.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="flex items-center px-3 py-2.5 font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors truncate"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
