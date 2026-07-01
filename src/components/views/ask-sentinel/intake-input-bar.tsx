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
        "flex items-center gap-3 rounded-2xl bg-white p-2",
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
        className="rounded-xl bg-brand-red p-3 text-white transition-colors hover:bg-red-700 disabled:opacity-40 disabled:hover:bg-brand-red"
        aria-label="Send"
      >
        <Send className="h-5 w-5" />
      </button>
    </form>
  );
}
