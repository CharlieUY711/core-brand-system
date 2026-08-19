"use client";

import Section from "@/components/ui/Section";
import PageContainer from "@/components/ui/PageContainer";
import Badge from "@/components/ui/Badge";
import AssetPlaceholder from "@/components/brand/AssetPlaceholder";
import { useLocale } from "@/lib/i18n/LocaleContext";
import styles from "./assets.module.css";

export default function AssetsContent() {
  const { t } = useLocale();

  return (
    <PageContainer>
      <Section eyebrow={t("breadcrumb.resources")} title={t("nav.items.assets")} lede={t("resources.assetsPage.lede")}>
        <Badge>{t("resources.badgeComingNext")}</Badge>
      </Section>
      <div className={styles.stack}>
        <AssetPlaceholder label={t("resources.assetsPage.svgLabel")} note={t("resources.assetsPage.svgNote")} />
        <AssetPlaceholder label={t("resources.assetsPage.pngLabel")} note={t("resources.assetsPage.pngNote")} />
      </div>
    </PageContainer>
  );
}
