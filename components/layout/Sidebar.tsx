"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import CoreSymbol from "@/components/brand/CoreSymbol";
import styles from "./Sidebar.module.css";

type NavItem = { label: string; href: string; live: boolean };
type NavGroup = { label: string; href?: string; items: NavItem[] };

const groups: NavGroup[] = [
  {
    label: "Brand",
    items: [
      { label: "Brand Guidelines", href: "/brand/guidelines", live: true },
      { label: "Logo & Assets", href: "/brand/logo", live: true },
      { label: "Color System", href: "/brand/color", live: true },
      { label: "Typography", href: "/brand/typography", live: true },
      { label: "CORE Orbit", href: "/brand/orbit", live: true },
    ],
  },
  {
    label: "System",
    href: "/system",
    items: [
      { label: "CORE Logistics", href: "/system/logistics", live: true },
      { label: "CORE Rep", href: "/system/rep", live: true },
      { label: "CORE Market", href: "/system/market", live: true },
      { label: "CORE Intelligence", href: "/system/intelligence", live: true },
      { label: "CORE Finance", href: "/system/finance", live: true },
    ],
  },
  {
    label: "Corporate Architecture",
    href: "/architecture",
    items: [
      { label: "Charlie", href: "/architecture/charlie", live: true },
      { label: "ODDY", href: "/architecture/oddy", live: true },
      { label: "OnDemand", href: "/architecture/ondemand", live: true },
      { label: "COMITA", href: "/architecture/comita", live: true },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    items: [
      { label: "Assets", href: "/resources/assets", live: false },
      { label: "Icons", href: "/resources/icons", live: true },
      { label: "UI Tokens", href: "/resources/tokens", live: true },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className={styles.sidebar} aria-label="Primary">
      <Link href="/" className={styles.brand}>
        <CoreSymbol size={26} className={styles.brandIcon} />
        <span className={styles.brandText}>
          CORE
          <small>Brand &amp; System</small>
        </span>
      </Link>
      <div className={styles.version}>Portal v1.0</div>

      {groups.map((group) => (
        <div className={styles.group} key={group.label}>
          {group.href ? (
            <Link
              href={group.href}
              className={`${styles.groupLabel} ${styles.groupLink} ${pathname === group.href ? styles.active : ""}`}
            >
              {group.label}
            </Link>
          ) : (
            <span className={styles.groupLabel}>{group.label}</span>
          )}
          {group.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navItem} ${pathname === item.href ? styles.active : ""}`}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              <span className={`${styles.dot} ${item.live ? styles.live : ""}`} aria-hidden="true" />
              {item.label}
            </Link>
          ))}
        </div>
      ))}
    </nav>
  );
}
