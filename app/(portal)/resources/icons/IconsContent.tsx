"use client";

import Section from "@/components/ui/Section";
import PageContainer from "@/components/ui/PageContainer";
import Badge from "@/components/ui/Badge";
import CoreSymbol from "@/components/brand/CoreSymbol";
import { useLocale } from "@/lib/i18n/LocaleContext";
import styles from "./icons.module.css";

export default function IconsContent() {
  const { t } = useLocale();

  return (
    <PageContainer>
      <Section eyebrow={t("breadcrumb.resources")} title={t("nav.items.icons")} lede={t("resources.iconsPage.lede")}>
        <Badge live>{t("resources.badgeLive")}</Badge>
      </Section>

      <div className={styles.tabRow}>
        <div className={styles.tab}>
          <CoreSymbol size={13} className={styles.tabIcon} title="Favicon" />
          <span>{t("resources.iconsPage.faviconTab")}</span>
        </div>
      </div>

      <div className={styles.tiles}>
        <div className={styles.tile} style={{ width: 32, height: 32 }}>
          <CoreSymbol size={20} className={styles.dark} />
        </div>
        <div className={styles.tile} style={{ width: 48, height: 48, borderRadius: 11 }}>
          <CoreSymbol size={30} className={styles.dark} />
        </div>
        <div className={`${styles.tile} ${styles.solid}`} style={{ width: 64, height: 64, borderRadius: 15 }}>
          <CoreSymbol size={40} className={styles.light} />
        </div>
        <div className={`${styles.tile} ${styles.solid}`} style={{ width: 64, height: 64, borderRadius: 32 }}>
          <CoreSymbol size={38} className={styles.light} />
        </div>
      </div>
    </PageContainer>
  );
}
