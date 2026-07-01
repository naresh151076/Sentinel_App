import type { LucideIcon } from "lucide-react";

export interface InterpretedField {
  label: string;
  value: string;
}

export interface MetadataSource {
  id: string;
  icon: LucideIcon;
  label: string;
}

export interface ReplySegment {
  text: string;
  emphasis?: boolean;
}

export interface InterpretedRequest {
  fields: InterpretedField[];
  matchedPatternName: string;
  matchedPatternMeta: string;
  confidencePercent: number;
  metadataSources: MetadataSource[];
  sentinelReply: ReplySegment[];
}
