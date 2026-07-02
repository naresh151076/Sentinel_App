"use client";

import { GovernanceFilters } from "@/components/views/my-requests/my-requests-filters";
import { GovernanceSearch } from "@/components/views/my-requests/my-requests-search";
import { GovernanceStats } from "@/components/views/my-requests/my-requests-stats";
import { GovernanceTable } from "@/components/views/my-requests/my-requests-table";
import { MyRequestsFilterBar } from "@/components/views/my-requests/my-requests-filters";
import {
  getMyAssessmentsFilters,
  getMyAssessmentsStats,
  getMyAssessmentsTable,
} from "@/controllers/assessments.controller";

export function MyAssessmentsWorkspace() {
  function handleFilterChange(_filterId: string) {
    // Filter logic can be implemented here when needed
  }

  return (
    <main className="flex flex-1 flex-col overflow-y-auto bg-surface-main">
      <div className="flex-1 space-y-6 p-8">
        <div className="space-y-1">
          <h1 className="font-heading text-3xl font-bold text-gray-900">
            My Assessments
          </h1>
          <p className="text-base text-gray-600">
            Governance assessments assigned to you for review and validation.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <GovernanceSearch placeholder="Search assessments..." />
          <MyRequestsFilterBar />
        </div>

        <GovernanceFilters
          filters={getMyAssessmentsFilters()}
          onFilterChange={handleFilterChange}
        />

        <GovernanceStats stats={getMyAssessmentsStats()} />

        <GovernanceTable rows={getMyAssessmentsTable()} />
      </div>
    </main>
  );
}
