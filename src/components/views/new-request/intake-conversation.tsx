import type { ReactNode } from "react";
import { ChatBubble } from "@/components/views/ask-sentinel/chat-bubble";
import { IntakeInputBar } from "@/components/views/ask-sentinel/intake-input-bar";
import { cn } from "@/lib/utils";
import type { ChatMessage } from "@/models/conversation";
import type { ReplySegment } from "@/models/interpreted-request";

interface IntakeConversationProps {
  messages: ChatMessage[];
  reply: ReplySegment[] | null;
  draft: string;
  onDraftChange: (value: string) => void;
  onSubmit: (value: string) => void;
  placeholder: string;
  children?: ReactNode;
}

export function IntakeConversation({
  messages,
  reply,
  draft,
  onDraftChange,
  onSubmit,
  placeholder,
  children,
}: IntakeConversationProps) {
  return (
    <div className="flex h-full w-full flex-1 flex-col overflow-hidden">
      <div className="flex-1 space-y-4 overflow-y-auto pb-2">
        {messages.map((message) => (
          <ChatBubble key={message.id} message={message} />
        ))}
        {reply && (
          <div className="rounded-2xl bg-gray-50 p-4 text-base leading-relaxed text-gray-700">
            {reply.map((segment, index) => (
              <span
                key={index}
                className={cn(segment.emphasis && "font-bold text-brand-red")}
              >
                {segment.text}
              </span>
            ))}
          </div>
        )}
        {children}
      </div>

      <div className="mt-4 shrink-0">
        <IntakeInputBar
          value={draft}
          onValueChange={onDraftChange}
          onSubmit={onSubmit}
          placeholder={placeholder}
          variant="pinned"
        />
      </div>
    </div>
  );
}
