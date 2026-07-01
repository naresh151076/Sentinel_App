import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { AssessmentHeader } from "@/components/views/assessments/assessment-header";
import { DecisionBasisCard } from "@/components/views/assessments/decision-basis-card";
import { RiskRecommendationCard } from "@/components/views/assessments/risk-recommendation-card";
import { KeyEvidenceGrid } from "@/components/views/assessments/key-evidence-grid";
import { ApprovalPathStepper } from "@/components/views/assessments/approval-path-stepper";
import { NextStepBanner } from "@/components/views/assessments/next-step-banner";
import { RequiredApprovalsList } from "@/components/views/assessments/required-approvals-list";
import { ApplicablePoliciesList } from "@/components/views/assessments/applicable-policies-list";
import { EvidenceList } from "@/components/views/assessments/evidence-list";
import { HistoryTimeline } from "@/components/views/assessments/history-timeline";
import { getAssessment } from "@/controllers/assessment.controller";

export default function AssessmentsPage() {
  const assessment = getAssessment();

  return (
    <main className="flex-1 overflow-y-auto p-8">
      <div className="flex flex-col gap-6">
        <AssessmentHeader header={assessment.header} />

        <Tabs defaultValue="summary">
          <TabsList variant="line" className="border-b border-gray-200">
            <TabsTrigger value="summary">Assessment Summary</TabsTrigger>
            <TabsTrigger value="approvals">Required Approvals</TabsTrigger>
            <TabsTrigger value="policies">Applicable Policies</TabsTrigger>
            <TabsTrigger value="evidence">Evidence</TabsTrigger>
            <TabsTrigger value="history">History &amp; Changes</TabsTrigger>
          </TabsList>

          <TabsContent value="summary">
            <div className="flex flex-col gap-6 pt-6">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <DecisionBasisCard decisionBasis={assessment.decisionBasis} />
                <RiskRecommendationCard
                  riskOutcome={assessment.riskOutcome}
                  recommendation={assessment.recommendation}
                />
              </div>
              <KeyEvidenceGrid items={assessment.keyEvidence} />
              <ApprovalPathStepper steps={assessment.approvalPath} />
              <NextStepBanner nextStep={assessment.nextStep} />
            </div>
          </TabsContent>

          <TabsContent value="approvals">
            <div className="pt-6">
              <RequiredApprovalsList steps={assessment.requiredApprovals} />
            </div>
          </TabsContent>

          <TabsContent value="policies">
            <div className="pt-6">
              <ApplicablePoliciesList
                policies={assessment.applicablePolicies}
              />
            </div>
          </TabsContent>

          <TabsContent value="evidence">
            <div className="pt-6">
              <EvidenceList documents={assessment.evidenceDocuments} />
            </div>
          </TabsContent>

          <TabsContent value="history">
            <div className="pt-6">
              <HistoryTimeline events={assessment.history} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
