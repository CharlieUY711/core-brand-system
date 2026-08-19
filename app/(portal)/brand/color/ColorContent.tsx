"use client";

import Section from "@/components/ui/Section";
import PageContainer from "@/components/ui/PageContainer";
import Swatch from "@/components/brand/Swatch";
import { primary, neutrals, semantic } from "@/lib/content/palette";
import { useLocale } from "@/lib/i18n/LocaleContext";
import styles from "./color.module.css";

export default function ColorContent() {
  const { t } = useLocale();

  return (
    <PageContainer>
      <Section eyebrow={t("breadcrumb.brand")} title={t("nav.items.colorSystem")} lede={t("brand.colorPage.lede")} />
      <div className={styles.grid}>
        {primary.map((s) => (
          <Swatch swatch={s} key={s.name} />
        ))}
      </div>
      <h2 className={styles.h2}>{t("brand.colorPage.neutralsHeading")}</h2>
      <div className={styles.grid}>
        {neutrals.map((s) => (
          <Swatch swatch={s} key={s.name} />
        ))}
      </div>
      <h2 className={styles.h2}>{t("brand.colorPage.semanticHeading")}</h2>
      <div className={styles.grid}>
        {semantic.map((s) => (
          <Swatch swatch={s} key={s.name} />
        ))}
      </div>
    </PageContainer>
  );
}
