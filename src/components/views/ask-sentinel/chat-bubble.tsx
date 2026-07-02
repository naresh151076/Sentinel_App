import { cn } from "@/lib/utils";
import type { ChatMessage } from "@/models/conversation";

export function ChatBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";

  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[75%] rounded-2xl px-5 py-3 text-base leading-relaxed break-words",
          isUser
            ? "bg-foreground text-background"
            : "border border-gray-200 bg-white text-gray-700 shadow",
        )}
      >
        {message.text}
      </div>
    </div>
  );
}
