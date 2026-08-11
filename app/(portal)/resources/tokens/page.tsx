import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import PageContainer from "@/components/ui/PageContainer";
import Badge from "@/components/ui/Badge";
import TokenTable from "@/components/brand/TokenTable";
import { uiTokens } from "@/lib/content/tokens";

export const metadata: Metadata = { title: "UI Tokens" };

export default function TokensPage() {
  return (
    <PageContainer>
      <Section
        eyebrow="Resources"
        title="UI Tokens"
        lede="Same system defined in Brand Guidelines § 18 — single source, not redefined here."
      >
        <Badge live>Live</Badge>
      </Section>
      <TokenTable tokens={uiTokens} />
    </PageContainer>
  );
}
