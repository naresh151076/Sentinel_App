import type { HistoryEvent } from "@/models/assessment";

export function HistoryTimeline({ events }: { events: HistoryEvent[] }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <h2 className="mb-4 text-lg font-bold text-gray-900">
        History &amp; changes
      </h2>
      <div className="flex flex-col">
        {events.map((event, index) => (
          <div key={event.id} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-red" />
              {index < events.length - 1 ? (
                <div className="w-px flex-1 bg-gray-200" />
              ) : null}
            </div>
            <div className={index < events.length - 1 ? "pb-6" : ""}>
              <div className="text-xs text-gray-400">{event.date}</div>
              <div className="text-sm font-bold text-gray-900">
                {event.actor}
              </div>
              <p className="text-sm text-gray-500">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
