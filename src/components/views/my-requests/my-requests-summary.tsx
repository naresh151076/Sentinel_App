import { cn } from "@/lib/utils";
import { getMyRequestsSummary } from "@/controllers/my-requests.controller";

export function MyRequestsSummary() {
  const stats = getMyRequestsSummary();

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.id} className="rounded-xl border border-gray-200 bg-white p-5">
          <div
            className={cn(
              "text-3xl font-bold text-gray-900",
              stat.emphasis && "text-brand-red",
            )}
          >
            {stat.value}
          </div>
          <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
          <div
            className={cn(
              "mt-2 text-xs",
              stat.emphasis ? "font-bold text-brand-red" : "text-gray-400",
            )}
          >
            {stat.sublabel}
          </div>
        </div>
      ))}
    </div>
  );
}
