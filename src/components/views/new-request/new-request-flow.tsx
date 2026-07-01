"use client";

import { useState } from "react";
import { EvidenceCollectedRow } from "@/components/views/ask-sentinel/evidence-collected-row";
import { ConfirmationCard } from "@/components/views/new-request/confirmation-card";
import { FoundItemsCard } from "@/components/views/new-request/found-items-card";
import { IntakeConversation } from "@/components/views/new-request/intake-conversation";
import { InterpretedRequestPanel } from "@/components/views/new-request/interpreted-request-panel";
import { NextStepActionsBanner } from "@/components/views/new-request/next-step-actions-banner";
import { ReadinessCard } from "@/components/views/new-request/readiness-card";
import { RequestSummaryCard } from "@/components/views/new-request/request-summary-card";
import { StageBreadcrumb } from "@/components/views/new-request/stage-breadcrumb";
import {
  getGenericAcknowledgement,
  getScenarioMessage,
} from "@/controllers/conversation.controller";
import { getInterpretedRequest } from "@/controllers/interpreted-request.controller";
import { getNewRequestDraft } from "@/controllers/new-request.controller";
import type { ChatMessage } from "@/models/conversation";

export function NewRequestFlow({ initialMessage }: { initialMessage?: string }) {
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>(() =>
    initialMessage
      ? [{ id: crypto.randomUUID(), role: "user", text: getScenarioMessage() }]
      : [],
  );
  const [confirmed, setConfirmed] = useState(false);

  const interpreted = getInterpretedRequest();
  const draftData = getNewRequestDraft();
  const stageIndex = confirmed ? 2 : messages.length > 0 ? 1 : 0;
  const stageSubtitle = confirmed
    ? "Review and confirm the draft Sentinel prepared for you."
    : messages.length > 0
      ? "Sentinel matched this to a pre-approved pattern — review and confirm on the right."
      : "Describe what you want to do with data — Sentinel will interpret it against your catalogues.";
  const inputPlaceholder = confirmed
    ? "Ask Sentinel to continue, add evidence, or explain a policy requirement..."
    : "Describe the data you want to use and why...";

  function handleSubmit(text: string) {
    const isFirstMessage = messages.length === 0;
    const next: ChatMessage[] = [
      ...messages,
      {
        id: crypto.randomUUID(),
        role: "user",
        text: isFirstMessage ? getScenarioMessage() : text,
      },
    ];
    if (!isFirstMessage) {
      next.push({
        id: crypto.randomUUID(),
        role: "sentinel",
        text: getGenericAcknowledgement(),
      });
    }
    setMessages(next);
    setDraft("");
  }

  return (
    <div className="flex flex-1 gap-8 overflow-hidden bg-surface-container p-8">
      <main className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <div className="flex h-full flex-col gap-6 p-12">
          <div className="shrink-0">
            <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-900">
              New request
            </h1>
            <p className="mb-4 text-base text-gray-500">{stageSubtitle}</p>
            <StageBreadcrumb activeIndex={stageIndex} />
          </div>

          <IntakeConversation
            messages={messages}
            reply={messages.length > 0 ? interpreted.sentinelReply : null}
            draft={draft}
            onDraftChange={setDraft}
            onSubmit={handleSubmit}
            placeholder={inputPlaceholder}
          >
            {confirmed && (
              <div className="flex flex-col gap-6 pt-2">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-2">
                    <RequestSummaryCard draft={draftData} />
                  </div>
                  <ReadinessCard draft={draftData} />
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-2">
                    <FoundItemsCard draft={draftData} />
                  </div>
                  <ConfirmationCard draft={draftData} />
                </div>

                <EvidenceCollectedRow items={draftData.evidenceItems} />

                <NextStepActionsBanner text={draftData.nextStepText} />
              </div>
            )}
          </IntakeConversation>
        </div>
      </main>

      <InterpretedRequestPanel
        interpreted={messages.length > 0 ? interpreted : null}
        confirmed={confirmed}
        onConfirm={() => setConfirmed(true)}
      />
    </div>
  );
}
