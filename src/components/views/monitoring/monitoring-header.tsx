import { ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const FILTERS = ["All domains", "Last 30 days"] as const;

export function MonitoringHeader() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-6">
      <div>
        <h1 className="mb-1 text-2xl font-bold text-gray-900">
          Governance Control Tower
        </h1>
        <p className="text-sm text-gray-500">
          Continuous compliance across all approved usages
        </p>
      </div>
      <div className="flex items-center gap-2">
        {FILTERS.map((filter) => (
          <Button key={filter} variant="outline" size="sm">
            {filter}
            <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
          </Button>
        ))}
        <Button variant="outline" size="sm">
          <Download className="h-3.5 w-3.5" />
          Export
        </Button>
      </div>
    </div>
  );
}
