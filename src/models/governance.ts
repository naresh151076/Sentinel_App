export type RequestStatus =
  | "draft"
  | "in-review"
  | "pending-approval"
  | "approved"
  | "rejected"
  | "escalated";

export type RiskLevel = "low" | "medium" | "high" | "critical";

export type ResidencyTier = "R1" | "R2" | "R3" | "R4";
