"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { getMyRequestsFilters } from "@/controllers/requests.controller";

export function MyRequestsFilters({
  onFilterChange,
}: {
  onFilterChange: (filterId: string) => void;
}) {
  const [activeFilter, setActiveFilter] = useState("all");
  const filters = getMyRequestsFilters();

  function handleFilterClick(filterId: string) {
    setActiveFilter(filterId);
    onFilterChange(filterId);
  }

  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => (
        <Button
          key={filter.id}
          variant={activeFilter === filter.id ? "default" : "outline"}
          size="sm"
          onClick={() => handleFilterClick(filter.id)}
          className="text-sm font-medium"
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
}
