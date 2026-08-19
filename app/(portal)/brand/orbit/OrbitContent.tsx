"use client";

import Section from "@/components/ui/Section";
import PageContainer from "@/components/ui/PageContainer";
import CoreOrbit from "@/components/brand/CoreOrbit";
import { useLocale } from "@/lib/i18n/LocaleContext";
import styles from "./orbit.module.css";

export default function OrbitContent() {
  const { t } = useLocale();

  return (
    <PageContainer wide>
      <Section eyebrow={t("breadcrumb.brand")} title="CORE Orbit" />
      <div className={styles.note}>
        <span className={styles.noteTag}>{t("brand.orbitPage.noteTag")}</span>
        <p>{t("brand.orbitPage.noteText")}</p>
      </div>
      <CoreOrbit />
    </PageContainer>
  );
}
