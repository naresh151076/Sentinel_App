"use client";

import type { FormEvent } from "react";
import { Paperclip, Image, Plus, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface IntakeInputBarProps {
  value: string;
  onValueChange: (value: string) => void;
  onSubmit: (value: string) => void;
  placeholder: string;
  variant?: "centered" | "pinned" | "dark" | "hero";
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
  const isHero = variant === "hero";
  const isOnDarkSurface = isDark || isHero;

  return (
    <form
      className={cn(
        "flex flex-col rounded-2xl border transition-all",
        isHero ? "gap-2.5 p-3 sm:gap-3 sm:p-4" : "gap-2 p-3",
        isHero
          ? "border-white/20 bg-white/10 shadow-none focus-within:border-brand-red/40 focus-within:bg-white/[0.14] focus-within:shadow-lg focus-within:shadow-brand-red/15"
          : isDark
            ? "border-white/15 bg-white/4 shadow-sm focus-within:border-brand-red/40 focus-within:shadow-lg focus-within:shadow-brand-red/20"
            : "border-gray-200 bg-white shadow-sm focus-within:border-brand-red focus-within:shadow-lg focus-within:shadow-brand-red/15",
        variant === "centered" && "mb-12",
      )}
      onSubmit={handleSubmit}
    >
      <textarea
        className={cn(
          "flex-1 resize-none border-none bg-transparent outline-none focus:ring-0",
          isHero
            ? "min-h-[5rem] text-base leading-relaxed text-white placeholder:text-gray-400 sm:min-h-[5.75rem] sm:text-lg"
            : isDark
              ? "text-base text-white placeholder-gray-400"
              : "text-base text-gray-900 placeholder-gray-400",
        )}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onValueChange(event.target.value)}
        rows={isHero ? 3 : 2}
      />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <button
            type="button"
            className={cn(
              "rounded-lg p-2 transition-colors",
              isOnDarkSurface
                ? "text-gray-500 hover:bg-white/5 hover:text-gray-300"
                : "text-gray-400 hover:bg-gray-50 hover:text-gray-600",
            )}
            aria-label="Attach a file"
            title="Attach a file"
          >
            <Paperclip className="h-4 w-4" />
          </button>
          <button
            type="button"
            className={cn(
              "rounded-lg p-2 transition-colors",
              isOnDarkSurface
                ? "text-gray-500 hover:bg-white/5 hover:text-gray-300"
                : "text-gray-400 hover:bg-gray-50 hover:text-gray-600",
            )}
            aria-label="Add image"
            title="Add image"
          >
            <Image className="h-4 w-4" />
          </button>
          <button
            type="button"
            className={cn(
              "rounded-lg p-2 transition-colors",
              isOnDarkSurface
                ? "text-gray-500 hover:bg-white/5 hover:text-gray-300"
                : "text-gray-400 hover:bg-gray-50 hover:text-gray-600",
            )}
            aria-label="Add more options"
            title="Add more options"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <button
          type="submit"
          className="rounded-full bg-brand-red p-3.5 text-white transition-colors hover:bg-red-700 active:scale-95"
          aria-label="Send"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
}
