import { ChevronDown } from "lucide-react";
import { GOVERNANCE_PRINCIPLE } from "@/constants/copy";
import { getCurrentUser } from "@/controllers/user.controller";

export function SidebarFooter() {
  const user = getCurrentUser();

  return (
    <div className="flex shrink-0 flex-col gap-4 border-t border-gray-100 bg-white px-4 py-4">
      <div className="rounded-lg border border-gray-200 bg-white p-3">
        <h4 className="mb-1 text-xs font-bold">{GOVERNANCE_PRINCIPLE.title}</h4>
        <p className="text-xs leading-snug text-gray-500">
          {GOVERNANCE_PRINCIPLE.body}
        </p>
      </div>
      <div className="flex items-center justify-between border-t border-gray-100 pt-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-xs font-bold text-gray-600">
            {user.initials}
          </div>
          <div>
            <div className="text-xs font-bold">{user.name}</div>
            <div className="text-[10px] text-gray-500">
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
    </div>
  );
}
