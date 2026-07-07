import { notFound } from "next/navigation";
import { RequestDetailWorkspace } from "@/components/views/request-detail/request-detail-workspace";
import { getRequestDetail, getMyRequestsTable } from "@/controllers/requests.controller";

interface RequestDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const requests = getMyRequestsTable();
  return requests.map((request) => ({
    id: request.id,
  }));
}

export default async function RequestDetailPage({
  params,
}: RequestDetailPageProps) {
  const { id } = await params;
  const request = getRequestDetail(id);

  if (!request) {
    notFound();
  }

  return <RequestDetailWorkspace request={request} />;
}
