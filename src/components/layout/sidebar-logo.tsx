import Link from "next/link";
import { ROUTES } from "@/constants/routes";

export function SidebarLogo() {
  return (
    <div className="flex shrink-0 flex-col border-b border-gray-100 px-6 py-5">
      <Link href={ROUTES.home} className="flex flex-col items-start gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element -- static brand asset, no next/image optimization needed */}
        <img
          src="/logo_dark.svg"
          alt="Société Générale"
          className="h-7 w-auto"
        />
        <div className="w-full border-t border-gray-100" />
        <span className="text-sm font-semibold text-gray-500">Sentinel</span>
      </Link>
    </div>
  );
}
