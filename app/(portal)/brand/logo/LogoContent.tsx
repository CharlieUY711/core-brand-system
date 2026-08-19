"use client";

import Link from "next/link";
import Section from "@/components/ui/Section";
import PageContainer from "@/components/ui/PageContainer";
import CoreSymbol from "@/components/brand/CoreSymbol";
import { useLocale } from "@/lib/i18n/LocaleContext";
import styles from "./logo.module.css";

export default function LogoContent() {
  const { t } = useLocale();

  return (
    <PageContainer>
      <Section eyebrow={t("breadcrumb.brand")} title={t("nav.items.logoAssets")} lede={t("brand.logoPage.lede")} />
      <div className={styles.grid}>
        <div className={styles.card}>
          <CoreSymbol size={64} className={styles.symbol} title="CORE symbol" />
          <div className={styles.caption}>{t("brand.logoPage.symbolCaption")}</div>
        </div>
        <div className={styles.card}>
          <div className={styles.lockup}>
            <CoreSymbol size={30} className={styles.symbol} />
            <span className={styles.wordmark}>CORE</span>
          </div>
          <div className={styles.caption}>{t("brand.logoPage.wordmarkCaption")}</div>
        </div>
        <div className={styles.card}>
          <div className={styles.lockup}>
            <CoreSymbol size={30} className={styles.symbol} />
            <span className={styles.wordmark}>
              CORE<small>Group</small>
            </span>
          </div>
          <div className={styles.caption}>{t("brand.logoPage.groupCaption")}</div>
        </div>
      </div>
      <p className={styles.footnote}>
        {t("brand.logoPage.footnotePrefix")} <strong>{t("brand.logoPage.footnoteGuidelinesRef")}</strong>
        {t("brand.logoPage.footnoteMid")}{" "}
        <Link href="/resources/assets" className={styles.link}>
          {t("brand.logoPage.footnoteLink")}
        </Link>{" "}
        {t("brand.logoPage.footnoteSuffix")}
      </p>
    </PageContainer>
  );
}
