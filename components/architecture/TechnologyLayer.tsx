"use client";

import { useLocale } from "@/lib/i18n/LocaleContext";
import styles from "./TechnologyLayer.module.css";

type TechnologyLayerProps = {
  operator: string;
  operatorRole: string;
  layer: string;
};

/**
 * Two-node relationship diagram: the operating entity on top, the CORE
 * technology layer underneath it. Used to make explicit that a CORE
 * vertical is a platform for an operator, never the operator itself.
 */
export default function TechnologyLayer({ operator, operatorRole, layer }: TechnologyLayerProps) {
  const { t } = useLocale();
  return (
    <div className={styles.flow}>
      <div className={`${styles.node} ${styles.strong}`}>
        <div className={styles.t}>{operator}</div>
        <div className={styles.d}>{operatorRole}</div>
      </div>
      <div className={styles.stem} aria-hidden="true" />
      <div className={styles.node}>
        <div className={styles.t}>{layer}</div>
        <div className={styles.d}>{t("technologyLayer.technologyPlatform")}</div>
      </div>
    </div>
  );
}
