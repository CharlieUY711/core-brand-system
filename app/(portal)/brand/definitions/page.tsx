import type { Metadata } from "next";
import DefinitionsContent from "./DefinitionsContent";

export const metadata: Metadata = { title: "Brand Definitions" };

export default function DefinitionsPage() {
  return <DefinitionsContent />;
}
