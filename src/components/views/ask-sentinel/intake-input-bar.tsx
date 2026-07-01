"use client";

import type { FormEvent } from "react";
import { Paperclip, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface IntakeInputBarProps {
  value: string;
  onValueChange: (value: string) => void;
  onSubmit: (value: string) => void;
  placeholder: string;
  variant?: "centered" | "pinned";
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

  return (
    <form
      className={cn(
        "flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-2 shadow-sm",
        variant === "centered" && "mb-12",
      )}
      onSubmit={handleSubmit}
    >
      <button
        type="button"
        className="rounded-xl p-3 text-gray-400 hover:bg-gray-50 hover:text-gray-600"
        aria-label="Attach a file"
      >
        <Paperclip className="h-5 w-5" />
      </button>
      <input
        className="flex-1 border-none bg-transparent py-3 text-base placeholder-gray-400 outline-none focus:ring-0"
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={(event) => onValueChange(event.target.value)}
      />
      <button
        type="submit"
        disabled={!value.trim()}
        aria-label="Ask Sentinel"
        className={cn(
          "flex items-center justify-center text-white transition-colors disabled:opacity-40 disabled:hover:bg-brand-red",
          variant === "centered"
            ? "gap-2 rounded-full bg-brand-red px-5 py-3 text-sm font-bold hover:bg-red-700"
            : "rounded-xl bg-brand-red p-3 hover:bg-red-700",
        )}
      >
        {variant === "centered" ? (
          <>
            Ask Sentinel
            <Send className="h-4 w-4" />
          </>
        ) : (
          <Send className="h-5 w-5" />
        )}
      </button>
    </form>
  );
}
