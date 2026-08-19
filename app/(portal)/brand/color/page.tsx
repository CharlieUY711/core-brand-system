import type { Metadata } from "next";
import ColorContent from "./ColorContent";

export const metadata: Metadata = { title: "Sistema de Color" };

export default function ColorPage() {
  return <ColorContent />;
}
