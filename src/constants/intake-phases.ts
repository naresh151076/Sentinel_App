export const INTAKE_PHASES = [
  { id: "describe", label: "Describe" },
  { id: "enrich", label: "Enrich" },
  { id: "assess", label: "Assess" },
  { id: "confirm", label: "Confirm" },
] as const;

export type IntakePhaseId = (typeof INTAKE_PHASES)[number]["id"];
