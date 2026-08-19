"use client";

import Section from "@/components/ui/Section";
import PageContainer from "@/components/ui/PageContainer";
import CorporateModel from "@/components/architecture/CorporateModel";
import { useLocale } from "@/lib/i18n/LocaleContext";
import styles from "./architecture.module.css";

export default function ArchitectureContent() {
  const { t } = useLocale();

  return (
    <PageContainer>
      <Section eyebrow={t("architecture.sectionTitle")} title={t("architecture.sectionTitle")} lede={t("architecture.lede")} />

      <div className={styles.diagram}>
        <CorporateModel />
      </div>

      <div className={styles.rule}>
        <p>{t("architecture.ruleText")}</p>
      </div>

      <table className={styles.table}>
        <caption className={styles.caption}>{t("architecture.tableCaption")}</caption>
        <thead>
          <tr>
            <th scope="col">{t("architecture.tableColEntity")}</th>
            <th scope="col">{t("architecture.tableColRole")}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Charlie</td>
            <td>{t("architecture.tableRoles.charlie")}</td>
          </tr>
          <tr>
            <td>CORE</td>
            <td>{t("architecture.tableRoles.core")}</td>
          </tr>
          <tr>
            <td>ODDY</td>
            <td>{t("architecture.tableRoles.oddy")}</td>
          </tr>
          <tr>
            <td>OnDemand</td>
            <td>{t("architecture.tableRoles.ondemand")}</td>
          </tr>
          <tr>
            <td>COMITA</td>
            <td>{t("architecture.tableRoles.comita")}</td>
          </tr>
          <tr>
            <td>FACILIA</td>
            <td>{t("architecture.tableRoles.facilia")}</td>
          </tr>
          <tr>
            <td>KORA</td>
            <td>{t("architecture.tableRoles.kora")}</td>
          </tr>
          <tr>
            <td>ALMA</td>
            <td>{t("architecture.tableRoles.alma")}</td>
          </tr>
        </tbody>
      </table>
    </PageContainer>
  );
}
