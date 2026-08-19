"use client";

import Section from "@/components/ui/Section";
import PageContainer from "@/components/ui/PageContainer";
import { useLocale } from "@/lib/i18n/LocaleContext";
import styles from "./definitions.module.css";

/** The ten brand documents are self-contained, print-ready HTML (A4) served
 * as static files from public/docs/. They are linked with plain <a>, not
 * next/link, because they are files rather than routes — the client router
 * would try to resolve them and 404.
 *
 * Order and accent colours mirror MASTER BRAND DEFINITIONS. `pending` marks
 * the brands whose identity is an initial definition, not yet approved —
 * the same distinction the master draws with its hollow status dot. */
const SHEETS: { slug: string; name: string; color: string; pending?: boolean }[] = [
  { slug: "charlie", name: "Charlie", color: "#F26522" },
  { slug: "core", name: "CORE", color: "#0E8A82" },
  { slug: "oddy", name: "ODDY", color: "#0B2A61" },
  { slug: "ondemand", name: "OnDemand", color: "#0169F5" },
  { slug: "facilia", name: "FACILIA", color: "#D97400" },
  { slug: "comita", name: "COMITA", color: "#1F7A4D" },
  { slug: "kora", name: "KORA", color: "#6D3FA3", pending: true },
  { slug: "alma", name: "ALMA", color: "#9B3050", pending: true },
];

export default function DefinitionsContent() {
  const { t } = useLocale();

  return (
    <PageContainer>
      <Section
        eyebrow={t("breadcrumb.brand")}
        title={t("brand.definitionsPage.title")}
        lede={t("brand.definitionsPage.lede")}
      />

      <div className={styles.primary}>
        <a className={styles.feature} href="/docs/master-brand-definitions.html">
          <span className={styles.featureKind}>{t("brand.definitionsPage.masterKind")}</span>
          <div className={styles.featureTitle}>{t("brand.definitionsPage.masterTitle")}</div>
          <p className={styles.featureText}>{t("brand.definitionsPage.masterText")}</p>
        </a>
        <a className={styles.feature} href="/docs/guia-de-uso.html">
          <span className={styles.featureKind}>{t("brand.definitionsPage.guideKind")}</span>
          <div className={styles.featureTitle}>{t("brand.definitionsPage.guideTitle")}</div>
          <p className={styles.featureText}>{t("brand.definitionsPage.guideText")}</p>
        </a>
      </div>

      <div className={styles.groupLabel}>{t("brand.definitionsPage.sheetsLabel")}</div>
      <div className={styles.sheets}>
        {SHEETS.map((s) => (
          <a key={s.slug} className={styles.sheet} href={`/docs/${s.slug}-brand-definition.html`}>
            <span className={styles.dot} style={{ background: s.color }} />
            <span className={styles.sheetName}>{s.name}</span>
            {s.pending && (
              <span className={styles.pending}>{t("brand.definitionsPage.pendingTag")}</span>
            )}
          </a>
        ))}
      </div>

      <p className={styles.note}>{t("brand.definitionsPage.note")}</p>
    </PageContainer>
  );
}
