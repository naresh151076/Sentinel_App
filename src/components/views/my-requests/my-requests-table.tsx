import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { StatusBadge } from "@/components/views/status-badge";
import { getMyRequestsTable } from "@/controllers/requests.controller";

export function MyRequestsTable() {
  const rows = getMyRequestsTable();

  return (
    <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
      <Table>
        <TableHeader className="bg-gray-50">
          <TableRow className="hover:bg-gray-50">
            <TableHead className="text-sm font-bold text-gray-700 uppercase tracking-wider">REQUEST</TableHead>
            <TableHead className="text-sm font-bold text-gray-700 uppercase tracking-wider">DATASET</TableHead>
            <TableHead className="text-sm font-bold text-gray-700 uppercase tracking-wider">PATTERN</TableHead>
            <TableHead className="text-sm font-bold text-gray-700 uppercase tracking-wider">STATUS</TableHead>
            <TableHead className="text-sm font-bold text-gray-700 uppercase tracking-wider">RISK</TableHead>
            <TableHead className="text-sm font-bold text-gray-700 uppercase tracking-wider">AI CONFIDENCE</TableHead>
            <TableHead className="text-sm font-bold text-gray-700 uppercase tracking-wider">UPDATED</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} className="cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-100">
              <TableCell className="py-4 pr-4">
                <Link href={row.href} className="hover:text-primary transition-colors">
                  <div className="font-semibold text-base text-gray-900">{row.title}</div>
                  <div className="text-sm text-gray-500 mt-0.5">{row.code}</div>
                </Link>
              </TableCell>
              <TableCell className="py-4 px-3">
                <div className="text-base text-gray-700">{row.dataset}</div>
              </TableCell>
              <TableCell className="py-4 px-3">
                <div className="text-base text-gray-700">{row.pattern}</div>
              </TableCell>
              <TableCell className="py-4 px-3">
                <StatusBadge
                  label={row.status.label}
                  variant={row.status.variant}
                />
              </TableCell>
              <TableCell className="py-4 px-3">
                <StatusBadge
                  label={row.risk.label}
                  variant={row.risk.variant}
                />
              </TableCell>
              <TableCell className="py-4 px-3">
                <div className="flex items-center gap-2">
                  <span className="text-base font-medium text-gray-700 w-10">
                    {row.aiConfidence}%
                  </span>
                  <Progress value={row.aiConfidence} className="w-16 flex-shrink-0" />
                </div>
              </TableCell>
              <TableCell className="py-4 px-3">
                <div className="text-base text-gray-600">{row.updated}</div>
              </TableCell>
              <TableCell className="py-4 px-3">
                <Link href={row.href}>
                  <ChevronRight className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
