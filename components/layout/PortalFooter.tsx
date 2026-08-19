"use client";

import Link from "next/link";
import CoreSymbol from "@/components/brand/CoreSymbol";
import { useLocale } from "@/lib/i18n/LocaleContext";
import styles from "./PortalFooter.module.css";

export default function PortalFooter() {
  const year = new Date().getFullYear();
  const { t } = useLocale();
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.brand}>
          <CoreSymbol size={18} className={styles.icon} />
          <span className={styles.text}>{t("footer.tagline")}</span>
        </div>
        <p className={styles.legal}>{t("footer.legal", { year })}</p>
      </div>
      <nav className={styles.links} aria-label={t("a11y.footerNav")}>
        <Link href="/brand/guidelines">{t("footer.linkGuidelines")}</Link>
        <Link href="/architecture">{t("footer.linkArchitecture")}</Link>
        <Link href="/resources">{t("footer.linkResources")}</Link>
      </nav>
    </footer>
  );
}
