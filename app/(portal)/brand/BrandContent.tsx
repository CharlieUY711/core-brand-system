"use client";

import Section from "@/components/ui/Section";
import PageContainer from "@/components/ui/PageContainer";
import Card from "@/components/ui/Card";
import { useLocale } from "@/lib/i18n/LocaleContext";
import styles from "./brand.module.css";

const itemKeys = [
  { key: "guidelines", href: "/brand/guidelines" },
  { key: "logo", href: "/brand/logo" },
  { key: "color", href: "/brand/color" },
  { key: "typography", href: "/brand/typography" },
  { key: "orbit", href: "/brand/orbit" },
] as const;

export default function BrandContent() {
  const { t } = useLocale();

  return (
    <PageContainer>
      <Section eyebrow={t("breadcrumb.brand")} title={t("brand.sectionTitle")} lede={t("brand.lede")} />
      <div className={styles.grid}>
        {itemKeys.map((item) => (
          <Card href={item.href} key={item.href} className={styles.card}>
            <div className={styles.name}>{t(`brand.items.${item.key}.label`)}</div>
            <p className={styles.text}>{t(`brand.items.${item.key}.text`)}</p>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
}
