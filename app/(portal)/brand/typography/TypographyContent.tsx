"use client";

import Section from "@/components/ui/Section";
import PageContainer from "@/components/ui/PageContainer";
import { useLocale } from "@/lib/i18n/LocaleContext";
import styles from "./typography.module.css";

const specimens = [
  { weight: 700, label: "IBM Plex Sans — Display 700 / 600", mono: false },
  { weight: 400, label: "IBM Plex Sans — Text 400 / 500", mono: false },
  { weight: 500, label: "IBM Plex Mono — UI / Data", mono: true },
];

export default function TypographyContent() {
  const { t } = useLocale();
  const rows: [string, string, string, string][] = [
    [t("brand.typographyPage.rows.display"), "700", "32–58px", "-0.02em"],
    [t("brand.typographyPage.rows.h2"), "700", "22–26px", "-0.015em"],
    [t("brand.typographyPage.rows.h3"), "600", "14–16px", "0"],
    [t("brand.typographyPage.rows.body"), "400", "14–16px", "0"],
    [t("brand.typographyPage.rows.uiLabel"), "600", "11–13px", "0.01em"],
    [t("brand.typographyPage.rows.mono"), "400–500", "9–13px", "0.02–0.08em"],
  ];

  return (
    <PageContainer>
      <Section eyebrow={t("breadcrumb.brand")} title={t("nav.items.typography")} lede={t("brand.typographyPage.lede")} />
      <div className={styles.grid}>
        {specimens.map((s) => (
          <div className={styles.card} key={s.label}>
            <div className={s.mono ? styles.glyphMono : styles.glyph} style={{ fontWeight: s.weight }}>
              Aa
            </div>
            <div className={styles.label}>{s.label}</div>
          </div>
        ))}
      </div>

      <table className={styles.scale}>
        <caption className={styles.caption}>{t("brand.typographyPage.tableCaption")}</caption>
        <thead>
          <tr>
            <th scope="col">{t("brand.typographyPage.tableColRole")}</th>
            <th scope="col">{t("brand.typographyPage.tableColWeight")}</th>
            <th scope="col">{t("brand.typographyPage.tableColSize")}</th>
            <th scope="col">{t("brand.typographyPage.tableColTracking")}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, i) => (
                <td key={i}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </PageContainer>
  );
}
