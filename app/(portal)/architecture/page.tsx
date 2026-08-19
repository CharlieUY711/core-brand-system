import type { Metadata } from "next";
import ArchitectureContent from "./ArchitectureContent";

export const metadata: Metadata = { title: "Arquitectura Corporativa" };

export default function ArchitectureOverview() {
  return <ArchitectureContent />;
}
