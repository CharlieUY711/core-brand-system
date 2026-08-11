import type { Metadata } from "next";
import PageContainer from "@/components/ui/PageContainer";
import VerticalPage from "@/components/system/VerticalPage";
import { verticals } from "@/lib/content/verticals";

const vertical = verticals.find((v) => v.slug === "market")!;

export const metadata: Metadata = { title: vertical.name };

export default function Page() {
  return (
    <PageContainer>
      <VerticalPage vertical={vertical} />
    </PageContainer>
  );
}
