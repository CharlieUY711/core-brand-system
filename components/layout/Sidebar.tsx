"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CoreSymbol from "@/components/brand/CoreSymbol";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import { useLocale } from "@/lib/i18n/LocaleContext";
import styles from "./Sidebar.module.css";

type NavItem = { key: string; href: string; live: boolean };
type NavGroup = { index: string; groupKey: string; href?: string; items: NavItem[] };

const groups: NavGroup[] = [
  {
    index: "01",
    groupKey: "brand",
    items: [
      { key: "brandGuidelines", href: "/brand/guidelines", live: true },
      { key: "brandDefinitions", href: "/brand/definitions", live: true },
      { key: "logoAssets", href: "/brand/logo", live: true },
      { key: "colorSystem", href: "/brand/color", live: true },
      { key: "typography", href: "/brand/typography", live: true },
      { key: "coreOrbit", href: "/brand/orbit", live: true },
    ],
  },
  {
    index: "02",
    groupKey: "system",
    href: "/system",
    items: [
      { key: "logistics", href: "/system/logistics", live: true },
      { key: "rep", href: "/system/rep", live: true },
      { key: "market", href: "/system/market", live: true },
      { key: "services", href: "/system/services", live: true },
      { key: "intelligence", href: "/system/intelligence", live: true },
      { key: "finance", href: "/system/finance", live: true },
    ],
  },
  {
    index: "03",
    groupKey: "architecture",
    href: "/architecture",
    items: [
      { key: "charlie", href: "/architecture/charlie", live: true },
      { key: "oddy", href: "/architecture/oddy", live: true },
      { key: "ondemand", href: "/architecture/ondemand", live: true },
      { key: "comita", href: "/architecture/comita", live: true },
      { key: "facilia", href: "/architecture/facilia", live: true },
    ],
  },
  {
    index: "04",
    groupKey: "resources",
    href: "/resources",
    items: [
      { key: "assets", href: "/resources/assets", live: false },
      { key: "icons", href: "/resources/icons", live: true },
      { key: "uiTokens", href: "/resources/tokens", live: true },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { t } = useLocale();

  return (
    <div className={styles.wrap}>
      <div className={styles.mobileBar}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          <CoreSymbol size={22} className={styles.brandIcon} />
          <span className={styles.brandText}>
            CORE
            <small>{t("nav.tagline")}</small>
          </span>
        </Link>
        <div className={styles.mobileControls}>
          <LanguageSwitcher />
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles.toggleBars} aria-hidden="true" />
            {open ? t("a11y.menuClose") : t("a11y.menuOpen")}
          </button>
        </div>
      </div>

      <nav id="primary-nav" className={`${styles.sidebar} ${open ? styles.open : ""}`} aria-label={t("a11y.primaryNav")}>
        <Link href="/" className={`${styles.brand} ${styles.brandDesktop}`}>
          <CoreSymbol size={26} className={styles.brandIcon} />
          <span className={styles.brandText}>
            CORE
            <small>{t("nav.tagline")}</small>
          </span>
        </Link>
        <div className={styles.version}>
          <span>{t("nav.portalVersion")}</span>
          <LanguageSwitcher />
        </div>

        {groups.map((group) => (
          <div className={styles.group} key={group.groupKey}>
            {group.href ? (
              <Link
                href={group.href}
                onClick={() => setOpen(false)}
                className={`${styles.groupLabel} ${styles.groupLink} ${pathname === group.href ? styles.groupActive : ""}`}
              >
                <span className={styles.groupIndex}>{group.index}</span>
                {t(`nav.groups.${group.groupKey}`)}
              </Link>
            ) : (
              <span className={styles.groupLabel}>
                <span className={styles.groupIndex}>{group.index}</span>
                {t(`nav.groups.${group.groupKey}`)}
              </span>
            )}
            {group.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`${styles.navItem} ${pathname === item.href ? styles.active : ""}`}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                <span className={`${styles.dot} ${item.live ? styles.live : ""}`} aria-hidden="true" />
                {t(`nav.items.${item.key}`)}
              </Link>
            ))}
          </div>
        ))}
      </nav>
    </div>
  );
}
