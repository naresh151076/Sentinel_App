import { Badge } from "@/components/ui/badge";
import { AiUnderstandingCard } from "@/components/views/ask-sentinel/ai-understanding-card";
import { AnalysisCardRow } from "@/components/views/ask-sentinel/analysis-card-row";
import { ChatBubble } from "@/components/views/ask-sentinel/chat-bubble";
import { EvidenceCollectedRow } from "@/components/views/ask-sentinel/evidence-collected-row";
import { IntakeInputBar } from "@/components/views/ask-sentinel/intake-input-bar";
import { NextStepBanner } from "@/components/views/ask-sentinel/next-step-banner";
import { ClarifyingQuestionBanner } from "@/components/views/ask-sentinel/clarifying-question-banner";
import {
  getFixedAnalysisBundle,
  getClarifyingQuestion,
} from "@/controllers/conversation.controller";
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
  // Count user messages to determine conversation turn
  const userMessageCount = messages.filter((m) => m.role === "user").length;

  // Get analysis bundle appropriate for current turn
  const bundle = getFixedAnalysisBundle(userMessageCount);

  // Get clarifying question (shown after first user message only)
  const clarifyingQuestion = getClarifyingQuestion(userMessageCount);

  return (
    <div className="flex h-full w-full flex-1 flex-col overflow-hidden">
      <div className="mb-4 flex shrink-0 items-center justify-between">
        <span className="text-base font-bold text-gray-900">
          Conversation-led governance intake
        </span>
        <Badge
          variant="outline"
          className="h-7 gap-1.5 px-3 text-sm text-gray-600"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
          Evidence pack building in real time
        </Badge>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto pb-1">
        {messages.map((message) => (
          <ChatBubble key={message.id} message={message} />
        ))}

        {/* Show clarifying question after first user message only */}
        {clarifyingQuestion && (
          <ClarifyingQuestionBanner question={clarifyingQuestion} />
        )}

        {/* Show analysis bundle after first user message */}
        {userMessageCount >= 1 && (
          <>
            <AiUnderstandingCard bundle={bundle} />
            <AnalysisCardRow cards={bundle.cards} />
          </>
        )}

        {/* Show evidence and next steps after second user message (full analysis) */}
        {userMessageCount >= 2 && bundle.evidenceItems && (
          <>
            <EvidenceCollectedRow items={bundle.evidenceItems} />
            {bundle.nextStep && (
              <NextStepBanner nextStep={bundle.nextStep} />
            )}
          </>
        )}
      </div>

      <div className="mt-3 shrink-0">
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
