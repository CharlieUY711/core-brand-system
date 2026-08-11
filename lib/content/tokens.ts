// UI design tokens consumed by product surfaces. Derived from the CORE
// palette (lib/content/palette.ts) — do not create isolated per-app palettes.

export type Token = { name: string; value: string; role: string };

export const uiTokens: Token[] = [
  { name: "CORE Primary", value: "#152238", role: "Brand, symbol, text on light" },
  { name: "CORE Accent", value: "#0E8A82", role: "Interaction, focus, CTA" },
  { name: "CORE Background", value: "#F5F6F8", role: "General product background" },
  { name: "CORE Surface", value: "#FFFFFF", role: "Cards, panels" },
  { name: "CORE Border", value: "#E2E5EA", role: "Dividers, outlines" },
  { name: "CORE Text", value: "#101423", role: "Primary text" },
  { name: "CORE Muted", value: "#5B6273", role: "Secondary text, placeholders" },
  { name: "Success", value: "#1F9D63", role: "Confirmations" },
  { name: "Warning", value: "#C98A1B", role: "Attention" },
  { name: "Error", value: "#D64545", role: "Blocked, failed" },
  { name: "Info", value: "#2E7FD6", role: "Neutral informational states" },
];
