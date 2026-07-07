import { notFound } from "next/navigation";
import { RequestDetailWorkspace } from "@/components/views/request-detail/request-detail-workspace";
import { getAssessmentDetail, getMyAssessmentsTable } from "@/controllers/assessments.controller";

interface AssessmentDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const assessments = getMyAssessmentsTable();
  return assessments.map((assessment) => ({
    id: assessment.id,
  }));
}

export default async function AssessmentDetailPage({
  params,
}: AssessmentDetailPageProps) {
  const { id } = await params;
  const assessment = getAssessmentDetail(id);

  if (!assessment) {
    notFound();
  }

  return <RequestDetailWorkspace request={assessment} />;
}
