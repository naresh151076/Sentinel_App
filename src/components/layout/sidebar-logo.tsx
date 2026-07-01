import Link from "next/link";
import { ROUTES } from "@/constants/routes";

export function SidebarLogo() {
  return (
    <div className="flex h-16 shrink-0 items-center border-b border-gray-100 px-6">
      <Link href={ROUTES.home} className="flex flex-col items-start gap-1">
        <span className="text-lg font-bold leading-tight text-gray-900">
          Sentinel
        </span>
        {/* eslint-disable-next-line @next/next/no-img-element -- static brand asset, no next/image optimization needed */}
        <img
          src="/logo_dark.svg"
          alt="Société Générale"
          className="h-4 w-auto"
        />
      </Link>
    </div>
  );
}
