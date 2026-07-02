import { ArrowDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  getCapabilityItems,
  getMonitoringLoopCaption,
  getMonitoringLoopIntro,
} from "@/controllers/monitoring.controller";

const ICON_TONES = {
  success: "bg-success-muted text-success",
  primary: "bg-destructive/10 text-primary",
  info: "bg-muted text-foreground",
} as const;

function FlowArrow({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center text-primary",
        className,
      )}
      aria-hidden
    >
      <ArrowRight className="hidden size-4 lg:block" />
      <ArrowDown className="size-4 lg:hidden" />
    </div>
  );
}

export function MonitoringCapabilitiesCard() {
  const items = getCapabilityItems();
  const intro = getMonitoringLoopIntro();
  const caption = getMonitoringLoopCaption();

  return (
    <Card>
      <CardHeader className="border-b">
        <CardTitle>How continuous compliance works</CardTitle>
        <CardDescription>{intro}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="contents">
                <div className="flex flex-1 flex-col items-center rounded-xl border border-border bg-muted/20 px-4 py-6 text-center lg:px-5">
                  <div
                    className={cn(
                      "mb-3 flex size-11 items-center justify-center rounded-full",
                      ICON_TONES[item.iconTone],
                    )}
                  >
                    <Icon className="size-5" />
                  </div>
                  <p className="text-sm font-medium text-foreground">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                {index < items.length - 1 ? (
                  <FlowArrow className="py-2 lg:px-2 lg:py-0" />
                ) : null}
              </div>
            );
          })}
        </div>

        <p className="border-t pt-4 text-sm leading-relaxed text-muted-foreground">
          {caption}
        </p>
      </CardContent>
    </Card>
  );
}
