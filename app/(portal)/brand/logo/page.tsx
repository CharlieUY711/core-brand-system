import type { Metadata } from "next";
import LogoContent from "./LogoContent";

export const metadata: Metadata = { title: "Logo y Assets" };

export default function LogoPage() {
  return <LogoContent />;
}
