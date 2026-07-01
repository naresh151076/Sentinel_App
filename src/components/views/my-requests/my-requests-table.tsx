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
import { RequestStatusBadge } from "@/components/views/my-requests/request-status-badge";
import { RequestRiskIndicator } from "@/components/views/my-requests/request-risk-indicator";
import { getMyRequests } from "@/controllers/my-requests.controller";

export function MyRequestsTable() {
  const requests = getMyRequests();

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4">
      <Table>
        <TableHeader>
          <TableRow className="border-gray-100 hover:bg-transparent">
            <TableHead className="text-gray-500">Request</TableHead>
            <TableHead className="text-gray-500">Status</TableHead>
            <TableHead className="text-gray-500">Risk</TableHead>
            <TableHead className="text-gray-500">Submitted by</TableHead>
            <TableHead className="text-gray-500">Last updated</TableHead>
            <TableHead className="w-8" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {requests.map((item) => {
            const Icon = item.patternIcon;
            return (
              <TableRow
                key={item.id}
                className="cursor-pointer border-gray-100"
              >
                <TableCell className="whitespace-normal">
                  <Link
                    href={item.href}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100">
                      <Icon className="h-4 w-4 text-gray-600" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-gray-900">
                        {item.title}
                      </div>
                      <div className="text-xs text-gray-500">
                        {item.patternLabel}
                      </div>
                    </div>
                  </Link>
                </TableCell>
                <TableCell>
                  <RequestStatusBadge status={item.status} />
                </TableCell>
                <TableCell>
                  <RequestRiskIndicator riskLevel={item.riskLevel} />
                </TableCell>
                <TableCell className="text-sm text-gray-500">
                  {item.submittedBy}
                </TableCell>
                <TableCell className="text-sm text-gray-400">
                  {item.lastUpdated}
                </TableCell>
                <TableCell>
                  <Link href={item.href} aria-label={`Open ${item.title}`}>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
