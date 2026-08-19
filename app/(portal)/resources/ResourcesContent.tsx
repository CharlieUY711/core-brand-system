"use client";

import Section from "@/components/ui/Section";
import PageContainer from "@/components/ui/PageContainer";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { useLocale } from "@/lib/i18n/LocaleContext";
import styles from "./resources.module.css";

const itemKeys = [
  { key: "assets", href: "/resources/assets", live: false },
  { key: "icons", href: "/resources/icons", live: true },
  { key: "tokens", href: "/resources/tokens", live: true },
] as const;

export default function ResourcesContent() {
  const { t } = useLocale();

  return (
    <PageContainer>
      <Section eyebrow={t("breadcrumb.resources")} title={t("resources.sectionTitle")} lede={t("resources.lede")} />
      <div className={styles.grid}>
        {itemKeys.map((item) => (
          <Card href={item.href} key={item.href} className={styles.card}>
            <span className={styles.kind}>{t(`resources.items.${item.key}.kind`)}</span>
            <div className={styles.name}>{t(`resources.items.${item.key}.label`)}</div>
            <p className={styles.text}>{t(`resources.items.${item.key}.text`)}</p>
            <Badge live={item.live}>{item.live ? t("resources.badgeLive") : t("resources.badgeComingNext")}</Badge>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
}
