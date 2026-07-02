import type { RecentRequestItem } from "@/models/governance";

export function findMatchingRequest(
  userMessage: string,
  availableRequests: RecentRequestItem[]
): RecentRequestItem | null {
  if (!userMessage || availableRequests.length === 0) {
    return null;
  }

  const messageLower = userMessage.toLowerCase();
  const keywords: Record<string, string[]> = {
    "eu-client-analytics": [
      "eu",
      "client",
      "analytics",
      "european",
      "gdpr",
      "data",
      "marketing",
      "loyalty",
    ],
    "cloud-migration-review": [
      "cloud",
      "migration",
      "hosting",
      "aws",
      "azure",
      "gcp",
      "infrastructure",
      "deployment",
    ],
    "model-training-assessment": [
      "model",
      "training",
      "ai",
      "machine learning",
      "ml",
      "assessment",
      "risk modeling",
      "science",
    ],
  };

  // Score each request based on keyword matches
  const scores = availableRequests.map((request) => {
    const requestKeywords = keywords[request.id] || [];
    const titleAndSubtitle = `${request.title} ${request.subtitle}`.toLowerCase();

    // Count keyword matches in user message
    const messageMatches = requestKeywords.filter((keyword) =>
      messageLower.includes(keyword)
    ).length;

    // Count keyword matches in request title/subtitle
    const titleMatches = requestKeywords.filter((keyword) =>
      titleAndSubtitle.includes(keyword)
    ).length;

    // Weight message matches more heavily since user intent is primary
    const score = messageMatches * 2 + titleMatches;

    return { request, score };
  });

  // Sort by score and return the highest scoring request
  const sorted = scores.sort((a, b) => b.score - a.score);

  // Return the best match only if it has a positive score
  if (sorted[0]?.score > 0) {
    return sorted[0].request;
  }

  return null;
}
