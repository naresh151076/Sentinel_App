import { COMMON_PATTERNS } from "@/constants/patterns";
import type { UsagePattern } from "@/models/pattern";

export function getCommonPatterns(): UsagePattern[] {
  return COMMON_PATTERNS;
}
