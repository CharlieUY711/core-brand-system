// CORE color system — frozen values from CORE Brand & System v1.0 (artifact source of truth).
// Do not change these values without an explicit new design decision.

export type Swatch = {
  name: string;
  hex: string;
  use: string;
};

export const primary: Swatch[] = [
  { name: "CORE Ink", hex: "#152238", use: "Primary — symbol, wordmark, brand surfaces" },
  { name: "CORE Ink Deep", hex: "#1F3153", use: "Hover / depth, never used as a base color" },
  { name: "CORE Signal", hex: "#0E8A82", use: "Accent — CTAs, active states, product focus" },
  { name: "CORE Signal Deep", hex: "#0B6F68", use: "Accent hover state" },
];

export const neutrals: Swatch[] = [
  { name: "Paper", hex: "#F5F6F8", use: "Light background" },
  { name: "Surface", hex: "#FFFFFF", use: "Cards, light panels" },
  { name: "Text", hex: "#101423", use: "Primary text on light" },
  { name: "Muted", hex: "#5B6273", use: "Secondary text" },
];

export const semantic: Swatch[] = [
  { name: "Success", hex: "#1F9D63", use: "Confirmation, ok state" },
  { name: "Warning", hex: "#C98A1B", use: "Attention, delay" },
  { name: "Error", hex: "#D64545", use: "Failure, blocked" },
  { name: "Info", hex: "#2E7FD6", use: "Neutral informational state" },
];
