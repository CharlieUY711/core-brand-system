import type { Metadata } from "next";
import SystemContent from "./SystemContent";

export const metadata: Metadata = { title: "Sistema" };

export default function SystemOverview() {
  return <SystemContent />;
}
