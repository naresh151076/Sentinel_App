"use client";

import { useState, useEffect } from "react";
import { AskSentinelHero } from "@/components/views/ask-sentinel/ask-sentinel-hero";
import { ConversationView } from "@/components/views/ask-sentinel/conversation-view";
import { GovernanceGlance } from "@/components/views/ask-sentinel/governance-glance";
import {
  getGenericAcknowledgement,
  getScenarioMessage,
} from "@/controllers/conversation.controller";
import { findMatchingRequest } from "@/controllers/request-matching.controller";
import { getRecentRequests } from "@/controllers/governance.controller";
import { useActiveRequest } from "@/contexts/active-request.context";
import type { ChatMessage } from "@/models/conversation";

export function AskSentinelWorkspace() {
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [requestId, setRequestId] = useState<string | null>(null);
  const { setActiveRequestId } = useActiveRequest();

  useEffect(() => {
    if (messages.length > 0 && !requestId) {
      // Find the most relevant request based on user's first message
      const userMessage = messages.find((m) => m.role === "user")?.text || "";
      const availableRequests = getRecentRequests();
      const matchingRequest = findMatchingRequest(userMessage, availableRequests);

      if (matchingRequest) {
        setRequestId(matchingRequest.id);
        setActiveRequestId(matchingRequest.id);
      }
    }
  }, [messages.length, requestId, setActiveRequestId]);

  function handleSubmit(text: string) {
    const isFirstMessage = messages.length === 0;
    const displayedText = isFirstMessage ? getScenarioMessage() : text;
    const next: ChatMessage[] = [
      ...messages,
      { id: crypto.randomUUID(), role: "user", text: displayedText },
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
    <main className="flex min-w-0 flex-1 flex-col overflow-hidden">
      {messages.length === 0 ? (
        <div className="flex h-full flex-col overflow-y-auto gap-3 px-1 py-2 sm:gap-6 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
          <div className="mx-auto w-full max-w-none sm:max-w-6xl">
            <AskSentinelHero
              draft={draft}
              onDraftChange={setDraft}
              onSubmit={handleSubmit}
            />
            <div className="mt-3 sm:mt-6">
              <GovernanceGlance />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-full flex-col overflow-hidden px-1 py-2 sm:px-4 sm:py-4 lg:px-6 lg:py-6">
          <div className="mx-auto w-full max-w-none sm:max-w-6xl h-full flex flex-col overflow-hidden">
            <div className="flex h-full flex-col rounded-3xl border border-gray-100 bg-surface-main p-8 shadow-sm overflow-hidden">
              <ConversationView
                messages={messages}
                draft={draft}
                onDraftChange={setDraft}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
