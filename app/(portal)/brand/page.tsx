import type { Metadata } from "next";
import BrandContent from "./BrandContent";

export const metadata: Metadata = { title: "Marca" };

export default function BrandOverview() {
  return <BrandContent />;
}
