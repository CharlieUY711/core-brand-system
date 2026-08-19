"use client";

import Section from "@/components/ui/Section";
import PageContainer from "@/components/ui/PageContainer";
import Card from "@/components/ui/Card";
import { verticals } from "@/lib/content/verticals";
import { entities } from "@/lib/content/entities";
import { useLocale } from "@/lib/i18n/LocaleContext";
import styles from "./system.module.css";

const operatorFacing = verticals.filter((v) => v.relations && v.relations.length > 0);
const transversal = verticals.filter((v) => !v.relations || v.relations.length === 0);

function operatorNames(v: (typeof verticals)[number]) {
  return (v.relations ?? [])
    .map((slug) => entities.find((e) => e.slug === slug)?.name)
    .filter(Boolean)
    .join(" · ");
}

export default function SystemContent() {
  const { dict, t } = useLocale();

  return (
    <PageContainer>
      <Section eyebrow={t("breadcrumb.system")} title={t("system.sectionTitle")} lede={t("system.lede")} />

      <div className={styles.group}>
        <span className={styles.groupLabel}>{t("system.operatorFacingLabel")}</span>
        <div className={styles.grid}>
          {operatorFacing.map((v) => (
            <Card href={`/system/${v.slug}`} key={v.slug} className={styles.card}>
              <span className={styles.dot} style={{ background: v.color }} aria-hidden="true" />
              <div className={styles.name}>{v.name}</div>
              <p className={styles.role}>{dict.verticals[v.slug].short}</p>
              <div className={styles.operator}>{operatorNames(v)}</div>
            </Card>
          ))}
        </div>
      </div>

      <div className={styles.group}>
        <span className={styles.groupLabel}>{t("system.transversalLabel")}</span>
        <div className={styles.grid}>
          {transversal.map((v) => (
            <Card href={`/system/${v.slug}`} key={v.slug} className={styles.card}>
              <span className={styles.dot} style={{ background: v.color }} aria-hidden="true" />
              <div className={styles.name}>{v.name}</div>
              <p className={styles.role}>{dict.verticals[v.slug].short}</p>
            </Card>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
