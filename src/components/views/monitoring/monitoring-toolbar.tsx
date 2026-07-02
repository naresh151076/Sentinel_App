"use client";

import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function MonitoringToolbar() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Select defaultValue="all-domains">
        <SelectTrigger className="min-w-36 bg-surface-container">
          <SelectValue placeholder="All Domains" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all-domains">All Domains</SelectItem>
          <SelectItem value="retail-banking">Retail Banking</SelectItem>
          <SelectItem value="finance">Finance</SelectItem>
          <SelectItem value="hr">HR</SelectItem>
        </SelectContent>
      </Select>

      <Button variant="outline" size="sm">
        <SlidersHorizontal data-icon="inline-start" />
        Filters
      </Button>
    </div>
  );
}
