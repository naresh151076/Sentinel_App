import Link from "next/link";
import { ROUTES } from "@/constants/routes";

export function SidebarLogo() {
  return (
    <div className="flex h-16 shrink-0 items-center px-6">
      <Link href={ROUTES.home} className="flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element -- static brand asset, no next/image optimization needed */}
        <img
          src="/logo_dark.svg"
          alt="Société Générale"
          className="h-6 w-auto shrink-0"
        />
        <span className="text-base font-semibold text-gray-700">
          Sentinel
        </span>
      </Link>
    </div>
  );
}
