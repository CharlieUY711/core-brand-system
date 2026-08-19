import type { Metadata } from "next";
import ResourcesContent from "./ResourcesContent";

export const metadata: Metadata = { title: "Recursos" };

export default function ResourcesOverview() {
  return <ResourcesContent />;
}
