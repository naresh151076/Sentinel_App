import { AskSentinelRightPanel } from "@/components/views/ask-sentinel/ask-sentinel-right-panel";
import { EvidenceCollectedRow } from "@/components/views/ask-sentinel/evidence-collected-row";
import { ConfirmationCard } from "@/components/views/new-request/confirmation-card";
import { FoundItemsCard } from "@/components/views/new-request/found-items-card";
import { NextStepActionsBanner } from "@/components/views/new-request/next-step-actions-banner";
import { ReadinessCard } from "@/components/views/new-request/readiness-card";
import { RequestSummaryCard } from "@/components/views/new-request/request-summary-card";
import { getNewRequestDraft } from "@/controllers/new-request.controller";

export default function NewRequestPage() {
  const draft = getNewRequestDraft();

  return (
    <div className="flex flex-1 gap-8 overflow-hidden p-8">
      <main className="flex min-w-0 flex-1 flex-col overflow-y-auto">
        <div className="flex flex-col gap-8 rounded-3xl border border-gray-100 bg-surface-main p-12 shadow-sm">
          <div>
            <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-900">
              New request
            </h1>
            <p className="text-base text-gray-500">
              Review and confirm the draft Sentinel prepared for you.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <RequestSummaryCard draft={draft} />
            </div>
            <ReadinessCard draft={draft} />
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <FoundItemsCard draft={draft} />
            </div>
            <ConfirmationCard draft={draft} />
          </div>

          <EvidenceCollectedRow items={draft.evidenceItems} />

          <NextStepActionsBanner text={draft.nextStepText} />
        </div>
      </main>
      <AskSentinelRightPanel />
    </div>
  );
}
