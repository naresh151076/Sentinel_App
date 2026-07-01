"use client";

import { useState } from "react";
import { Paperclip, Send } from "lucide-react";

export function IntakeInputBar() {
  const [value, setValue] = useState("");

  return (
    <form
      className="mb-12 flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-2 shadow-sm"
      onSubmit={(event) => event.preventDefault()}
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
        placeholder="e.g. I want to use customer purchase data for a loyalty programme in France"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
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
