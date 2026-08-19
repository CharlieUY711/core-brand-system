"use client";

import Section from "@/components/ui/Section";
import PageContainer from "@/components/ui/PageContainer";
import Badge from "@/components/ui/Badge";
import TokenTable from "@/components/brand/TokenTable";
import { uiTokens } from "@/lib/content/tokens";
import { useLocale } from "@/lib/i18n/LocaleContext";

export default function TokensContent() {
  const { t } = useLocale();

  return (
    <PageContainer>
      <Section eyebrow={t("breadcrumb.resources")} title={t("nav.items.uiTokens")} lede={t("resources.tokensPage.lede")}>
        <Badge live>{t("resources.badgeLive")}</Badge>
      </Section>
      <TokenTable tokens={uiTokens} />
    </PageContainer>
  );
}
