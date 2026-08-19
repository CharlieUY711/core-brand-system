import type { Metadata } from "next";
import AssetsContent from "./AssetsContent";

export const metadata: Metadata = { title: "Assets" };

export default function AssetsPage() {
  return <AssetsContent />;
}
