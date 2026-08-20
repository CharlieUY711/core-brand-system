"use client";

import Link from "next/link";
import CoreSymbol from "./CoreSymbol";
import { useLocale } from "@/lib/i18n/LocaleContext";
import styles from "./GuidelinesToc.module.css";

/** Anchor ids only — the labels come from the dictionary, in the same order,
 * so the index reads in the reader's language and can never drift from the
 * section headings it points at. */
const ids = [
  "concept", "symbol", "construction", "clear-space", "minimum-sizes",
  "palette", "typography", "wordmark", "core-group", "architecture",
  "oddy", "orbit", "reduction", "favicon", "app-icon", "versions",
  "misuse", "ui-tokens", "verticals", "applications", "rules",
] as const;

export default function GuidelinesToc() {
  const { t, dict } = useLocale();
  const labels = dict.guidelines.toc;

  return (
    <nav className={styles.toc} aria-label={t("guidelines.tocNavLabel")}>
      <div className={styles.brand}>
        <CoreSymbol size={26} className={styles.icon} />
        <div className={styles.text}>
          CORE
          <small>{t("guidelines.crumbVersion")}</small>
        </div>
      </div>
      <div className={styles.status}>&#9679; {t("guidelines.frozen")}</div>
      {ids.map((id, i) => (
        <Link key={id} href={`#${id}`} className={styles.link}>
          <span className={styles.n}>{String(i + 1).padStart(2, "0")}</span>
          {labels[i]}
        </Link>
      ))}
    </nav>
  );
}
