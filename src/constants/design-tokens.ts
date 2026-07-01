export const COLORS = {
  brandRed: "#E9041E",
  black: "#000000",
  white: "#FFFFFF",
  bodyText: "#333333",
  neutralFill: "#F4F4F4",
  surfaceMain: "#F9F9F9",
  surfaceContainer: "#FFFFFF",
  surfaceLow: "#F3F3F4",
  surfaceChrome: "#E5E7EB",
} as const;

export const TYPOGRAPHY = {
  headingFontFamily: "Montserrat, sans-serif",
  bodyFontFamily: "'Source Sans 3', Arial, sans-serif",
  headingTracking: "-0.02em",
  bodyLineHeight: 1.5,
} as const;

export const RADIUS = {
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
} as const;

export type ColorToken = keyof typeof COLORS;
