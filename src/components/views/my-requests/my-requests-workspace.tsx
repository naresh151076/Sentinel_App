"use client";

import { useState } from "react";
import { MyRequestsStats } from "@/components/views/my-requests/my-requests-stats";
import { MyRequestsFilters, MyRequestsFilterBar } from "@/components/views/my-requests/my-requests-filters";
import { MyRequestsSearch } from "@/components/views/my-requests/my-requests-search";
import { MyRequestsTable } from "@/components/views/my-requests/my-requests-table";

export function MyRequestsWorkspace() {
  const [activeFilter] = useState("all");

  function handleFilterChange(filterId: string) {
    // Filter logic can be implemented here when needed
    // For now, all data is shown regardless of filter
  }

  return (
    <main className="flex flex-1 flex-col overflow-y-auto bg-surface-main">
      <div className="flex-1 space-y-6 p-8">
        <div className="space-y-1">
          <h1 className="font-heading text-3xl font-bold text-gray-900">
            My Requests
          </h1>
          <p className="text-base text-gray-600">
            All data governance requests you own, submitted, or sponsor.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <MyRequestsSearch />
          <MyRequestsFilterBar />
        </div>

        <MyRequestsFilters onFilterChange={handleFilterChange} />

        <MyRequestsStats />

        <MyRequestsTable />
      </div>
    </main>
  );
}
