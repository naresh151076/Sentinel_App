export const ROUTES = {
  home: "/",
  newRequest: "/requests/new",
  myRequests: "/requests",
  assessments: "/assessments",
  monitoring: "/monitoring",
  patternsLibrary: "/patterns",
  policiesAndControls: "/policies",
  reports: "/reports",
} as const;

export type RouteKey = keyof typeof ROUTES;
