"use client";

import type { FormEvent } from "react";
import { Paperclip, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface IntakeInputBarProps {
  value: string;
  onValueChange: (value: string) => void;
  onSubmit: (value: string) => void;
  placeholder: string;
  variant?: "centered" | "pinned" | "dark";
}

export function IntakeInputBar({
  value,
  onValueChange,
  onSubmit,
  placeholder,
  variant = "centered",
}: IntakeInputBarProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onSubmit(trimmed);
  }

  const isDark = variant === "dark";

  return (
    <form
      className={cn(
        "flex items-center gap-3 rounded-2xl border p-2 shadow-sm",
        isDark
          ? "border-white/15 bg-white/4"
          : "border-gray-200 bg-white",
        variant === "centered" && "mb-12",
      )}
      onSubmit={handleSubmit}
    >
      <button
        type="button"
        className={cn(
          "rounded-xl p-3 transition-colors",
          isDark
            ? "text-gray-400 hover:bg-white/5 hover:text-gray-200"
            : "text-gray-400 hover:bg-gray-50 hover:text-gray-600",
        )}
        aria-label="Attach a file"
      >
        <Paperclip className="h-5 w-5" />
      </button>
      <input
        className={cn(
          "flex-1 border-none bg-transparent py-3 text-base outline-none focus:ring-0",
          isDark
            ? "text-white placeholder-gray-400"
            : "text-gray-900 placeholder-gray-400",
        )}
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={(event) => onValueChange(event.target.value)}
      />
      <button
        type="submit"
        className="rounded-xl bg-brand-red p-3 text-white transition-colors hover:bg-red-700"
        aria-label="Send"
      >
        <Send className="h-5 w-5" />
      </button>
    </form>
  );
}
