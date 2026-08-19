"use client";

import CoreSymbol from "@/components/brand/CoreSymbol";
import CorporateModel from "@/components/architecture/CorporateModel";
import NavCards from "@/components/layout/NavCards";
import { useLocale } from "@/lib/i18n/LocaleContext";
import styles from "./home.module.css";

export default function Home() {
  const { t } = useLocale();

  const facts = [
    { q: t("home.fact1Q"), a: t("home.fact1A") },
    { q: t("home.fact2Q"), a: t("home.fact2A") },
    { q: t("home.fact3Q"), a: t("home.fact3A") },
    { q: t("home.fact4Q"), a: t("home.fact4A") },
  ];

  return (
    <>
      <section className={styles.hero}>
        <CoreSymbol size={84} className={styles.symbol} title="CORE symbol — D3-C" />
        <span className={styles.eyebrow}>{t("home.eyebrow")}</span>
        <h1 className={styles.h1}>CORE</h1>
        <div className={styles.sub}>{t("home.tagline")}</div>
        <p className={styles.lede}>
          {t("home.ledeBefore")}
          <strong>CORE</strong>
          {t("home.ledeAfter")}
        </p>
      </section>

      <div className={styles.body}>
        <section className={styles.facts} aria-label={t("home.metaTitle")}>
          {facts.map((f) => (
            <div className={styles.fact} key={f.q}>
              <h2 className={styles.factQ}>{f.q}</h2>
              <p className={styles.factA}>{f.a}</p>
            </div>
          ))}
        </section>

        <section className={styles.map}>
          <span className={styles.mapEyebrow}>{t("home.systemMapEyebrow")}</span>
          <h2 className={styles.mapTitle}>{t("home.systemMapTitle")}</h2>
          <NavCards />
        </section>

        <section className={styles.model}>
          <span className={styles.modelEyebrow}>{t("home.corporateModelEyebrow")}</span>
          <h2 className={styles.modelTitle}>{t("home.corporateModelTitle")}</h2>
          <p className={styles.modelLede}>{t("home.corporateModelLede")}</p>
          <CorporateModel />
        </section>
      </div>
    </>
  );
}
