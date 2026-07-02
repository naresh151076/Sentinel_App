"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getMyRequestsFilters } from "@/controllers/requests.controller";

export function GovernanceFilters({
  filters,
  onFilterChange,
}: {
  filters: { id: string; label: string }[];
  onFilterChange: (filterId: string) => void;
}) {
  const [activeFilter, setActiveFilter] = useState("all");

  function handleFilterClick(filterId: string) {
    setActiveFilter(filterId);
    onFilterChange(filterId);
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {filters.map((filter) => (
        <Button
          key={filter.id}
          variant={activeFilter === filter.id ? "default" : "outline"}
          size="sm"
          onClick={() => handleFilterClick(filter.id)}
          className="px-4"
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
}

export function MyRequestsFilters({
  onFilterChange,
}: {
  onFilterChange: (filterId: string) => void;
}) {
  return (
    <GovernanceFilters
      filters={getMyRequestsFilters()}
      onFilterChange={onFilterChange}
    />
  );
}

export function MyRequestsFilterBar() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateRangeFilter, setDateRangeFilter] = useState("any");
  const [sortFilter, setSortFilter] = useState("newest");

  return (
    <div className="flex items-center gap-3">
      <Select value={statusFilter} onValueChange={setStatusFilter}>
        <SelectTrigger className="!h-10 w-40 border-border bg-background text-sm py-0 px-3">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Status: All</SelectItem>
          <SelectItem value="in-progress">In Progress</SelectItem>
          <SelectItem value="awaiting-review">Awaiting Review</SelectItem>
          <SelectItem value="action-needed">Action Needed</SelectItem>
          <SelectItem value="approved">Approved</SelectItem>
          <SelectItem value="draft">Draft</SelectItem>
        </SelectContent>
      </Select>

      <Select value={dateRangeFilter} onValueChange={setDateRangeFilter}>
        <SelectTrigger className="!h-10 w-40 border-border bg-background text-sm py-0 px-3">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="any">Date Range: Any</SelectItem>
          <SelectItem value="today">Today</SelectItem>
          <SelectItem value="week">Past Week</SelectItem>
          <SelectItem value="month">Past Month</SelectItem>
          <SelectItem value="custom">Custom Range</SelectItem>
        </SelectContent>
      </Select>

      <Select value={sortFilter} onValueChange={setSortFilter}>
        <SelectTrigger className="!h-10 w-40 border-border bg-background text-sm py-0 px-3">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="newest">Sort: Newest</SelectItem>
          <SelectItem value="oldest">Oldest</SelectItem>
          <SelectItem value="a-z">A - Z</SelectItem>
          <SelectItem value="z-a">Z - A</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
