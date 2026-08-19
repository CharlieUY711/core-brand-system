import type { Metadata } from "next";
import TokensContent from "./TokensContent";

export const metadata: Metadata = { title: "UI Tokens" };

export default function TokensPage() {
  return <TokensContent />;
}
