import { cn } from "@/lib/utils";
import { INTAKE_PHASES } from "@/constants/intake-phases";

interface IntakePhaseStepperProps {
  currentPhaseIndex: number;
}

export function IntakePhaseStepper({
  currentPhaseIndex,
}: IntakePhaseStepperProps) {
  return (
    <nav
      aria-label="Intake progress"
      className="mb-6 shrink-0 border-b border-border pb-6"
    >
      <ol className="grid w-full grid-cols-4">
        {INTAKE_PHASES.map((phase, index) => {
          const isCompleted = index < currentPhaseIndex;
          const isCurrent = index === currentPhaseIndex;
          const isUpcoming = index > currentPhaseIndex;

          return (
            <li
              key={phase.id}
              className="relative flex flex-col items-center gap-2"
            >
              {index > 0 && (
                <div
                  className={cn(
                    "absolute top-[18px] right-1/2 h-px w-full -translate-y-1/2",
                    index <= currentPhaseIndex ? "bg-foreground" : "bg-border",
                  )}
                  aria-hidden
                />
              )}

              <div
                className={cn(
                  "relative z-10 flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold",
                  isCompleted && "bg-foreground text-primary-foreground",
                  isCurrent && "bg-primary text-primary-foreground",
                  isUpcoming && "bg-border text-primary-foreground",
                )}
                aria-current={isCurrent ? "step" : undefined}
              >
                {index + 1}
              </div>

              <span
                className={cn(
                  "relative z-10 whitespace-nowrap text-sm",
                  isCompleted && "font-semibold text-foreground",
                  isCurrent && "font-semibold text-primary",
                  isUpcoming && "font-medium text-muted-foreground",
                )}
              >
                {phase.label}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
