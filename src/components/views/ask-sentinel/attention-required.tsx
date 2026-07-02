"use client";

import { useState } from "react";
import Link from "next/link";
import { AlertTriangle, ChevronRight, X } from "lucide-react";
import { getAttentionItems } from "@/controllers/governance.controller";

export function AttentionRequired() {
  const items = getAttentionItems();
  const [isOpen, setIsOpen] = useState(true);

  if (items.length === 0 || !isOpen) {
    return null;
  }

  return (
    <div className="border-b-2 border-brand-red bg-red-50 px-8 py-4">
      <div className="space-y-3">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="flex items-start gap-4 transition-colors hover:text-brand-red"
          >
            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100">
              <AlertTriangle className="h-4 w-4 text-brand-red" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-bold leading-tight text-gray-900">
                {item.title}
              </div>
              <div className="text-sm leading-snug text-gray-600">
                {item.description}
              </div>
            </div>
            <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
          </Link>
        ))}
      </div>
      <button
        onClick={() => setIsOpen(false)}
        className="absolute right-8 top-4 text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
}
