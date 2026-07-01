import { Badge } from "@/components/ui/badge";
import { AiUnderstandingCard } from "@/components/views/ask-sentinel/ai-understanding-card";
import { AnalysisCardRow } from "@/components/views/ask-sentinel/analysis-card-row";
import { ChatBubble } from "@/components/views/ask-sentinel/chat-bubble";
import { EvidenceCollectedRow } from "@/components/views/ask-sentinel/evidence-collected-row";
import { IntakeInputBar } from "@/components/views/ask-sentinel/intake-input-bar";
import { NextStepBanner } from "@/components/views/ask-sentinel/next-step-banner";
import { getFixedAnalysisBundle } from "@/controllers/conversation.controller";
import type { ChatMessage } from "@/models/conversation";

interface ConversationViewProps {
  messages: ChatMessage[];
  draft: string;
  onDraftChange: (value: string) => void;
  onSubmit: (value: string) => void;
}

export function ConversationView({
  messages,
  draft,
  onDraftChange,
  onSubmit,
}: ConversationViewProps) {
  const bundle = getFixedAnalysisBundle();

  return (
    <div className="mx-auto flex h-full w-full max-w-3xl flex-1 flex-col overflow-hidden">
      <div className="mb-6 flex shrink-0 items-center justify-between">
        <span className="text-sm font-bold text-gray-900">
          Conversation-led governance intake
        </span>
        <Badge variant="outline" className="gap-1.5 text-gray-600">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
          Evidence pack building in real time
        </Badge>
      </div>

      <div className="flex-1 space-y-6 overflow-y-auto pb-2">
        {messages.map((message) => (
          <ChatBubble key={message.id} message={message} />
        ))}
        <AiUnderstandingCard bundle={bundle} />
        <AnalysisCardRow cards={bundle.cards} />
        <EvidenceCollectedRow items={bundle.evidenceItems} />
        <NextStepBanner nextStep={bundle.nextStep} />
      </div>

      <div className="mt-4 shrink-0">
        <IntakeInputBar
          value={draft}
          onValueChange={onDraftChange}
          onSubmit={onSubmit}
          placeholder="Ask Sentinel to continue, add evidence, or explain a policy requirement..."
          variant="pinned"
        />
      </div>
    </div>
  );
}
