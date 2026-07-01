import { ChevronDown } from "lucide-react";
import { getCurrentUser } from "@/controllers/user.controller";

export function SidebarFooter() {
  const user = getCurrentUser();

  return (
    <div className="m-3 flex shrink-0 items-center justify-between rounded-2xl border border-gray-200 bg-white p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-sm font-bold text-gray-600">
          {user.initials}
        </div>
        <div>
          <div className="text-base font-bold text-gray-900">{user.name}</div>
          <div className="text-sm text-gray-500">
            {user.location} · {user.role}
          </div>
        </div>
      </div>
      <button
        type="button"
        className="text-gray-400 hover:text-gray-600"
        aria-label="Account menu"
      >
        <ChevronDown className="h-4 w-4" />
      </button>
    </div>
  );
}
