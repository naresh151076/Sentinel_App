import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import type { InterpretedRequest } from "@/models/interpreted-request";

interface InterpretedRequestPanelProps {
  interpreted: InterpretedRequest | null;
  confirmed?: boolean;
  onConfirm: () => void;
}

export function InterpretedRequestPanel({
  interpreted,
  confirmed = false,
  onConfirm,
}: InterpretedRequestPanelProps) {
  return (
    <aside className="scrollbar-hide w-[340px] shrink-0 overflow-y-auto rounded-3xl bg-surface-panel p-6">
      <div className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
        Interpreted request
      </div>

      {!interpreted ? (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 text-base text-gray-500">
          Describe your request on the left — Sentinel will interpret it here
          against your catalogues and past approvals.
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-gray-200 bg-white p-5">
            {interpreted.fields.map((field) => (
              <div key={field.label}>
                <div className="mb-1 text-sm text-gray-500">
                  {field.label}
                </div>
                <div className="text-base font-bold text-gray-900">
                  {field.value}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 flex items-center justify-between gap-2">
              <div className="text-base font-bold text-gray-900">
                {interpreted.matchedPatternName}
              </div>
              <Badge variant="outline">Pre-approved</Badge>
            </div>
            <p className="mb-4 text-sm text-gray-500">
              {interpreted.matchedPatternMeta}
            </p>
            <div className="flex items-center gap-3">
              <Progress
                value={interpreted.confidencePercent}
                className="flex-1"
              />
              <span className="text-base font-bold text-gray-900">
                {interpreted.confidencePercent}%
              </span>
            </div>
          </div>

          <div>
            <div className="mb-2 text-sm text-gray-500">
              Metadata sources
            </div>
            <div className="flex flex-wrap gap-2">
              {interpreted.metadataSources.map((source) => (
                <div
                  key={source.id}
                  className="flex items-center gap-1.5 rounded-lg bg-gray-100 px-2.5 py-1.5 text-sm font-medium text-gray-700"
                >
                  <source.icon className="h-4 w-4" />
                  {source.label}
                </div>
              ))}
            </div>
          </div>

          {confirmed ? (
            <div className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white p-4 text-sm font-bold text-gray-900">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-red" />
              Confirmed — preparing first-cut assessment
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button onClick={onConfirm}>Confirm & assess</Button>
              <Button variant="outline">Adjust</Button>
            </div>
          )}
        </div>
      )}
    </aside>
  );
}
