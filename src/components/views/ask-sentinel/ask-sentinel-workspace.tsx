"use client";

import { useState } from "react";
import { AskSentinelHero } from "@/components/views/ask-sentinel/ask-sentinel-hero";
import { ConversationView } from "@/components/views/ask-sentinel/conversation-view";
import {
  getGenericAcknowledgement,
  getScenarioMessage,
} from "@/controllers/conversation.controller";
import type { ChatMessage } from "@/models/conversation";

export function AskSentinelWorkspace() {
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);

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
      <div className="flex h-full flex-col rounded-3xl border border-gray-200 bg-surface-main p-12">
        {messages.length === 0 ? (
          <AskSentinelHero
            draft={draft}
            onDraftChange={setDraft}
            onSubmit={handleSubmit}
          />
        ) : (
          <ConversationView
            messages={messages}
            draft={draft}
            onDraftChange={setDraft}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </main>
  );
}
