"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n/LocaleContext";
import styles from "./NavCards.module.css";

type Item = { key: string; href: string; live: boolean };
type Group = { groupKey: string; items: Item[] };

const groups: Group[] = [
  {
    groupKey: "brand",
    items: [
      { key: "brandGuidelines", href: "/brand/guidelines", live: true },
      { key: "logoAssets", href: "/brand/logo", live: true },
      { key: "colorSystem", href: "/brand/color", live: true },
      { key: "typography", href: "/brand/typography", live: true },
      { key: "coreOrbit", href: "/brand/orbit", live: true },
    ],
  },
  {
    groupKey: "system",
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
    groupKey: "architecture",
    items: [
      { key: "overview", href: "/architecture", live: true },
      { key: "charlie", href: "/architecture/charlie", live: true },
      { key: "oddy", href: "/architecture/oddy", live: true },
      { key: "ondemand", href: "/architecture/ondemand", live: true },
      { key: "comita", href: "/architecture/comita", live: true },
      { key: "facilia", href: "/architecture/facilia", live: true },
    ],
  },
  {
    groupKey: "resources",
    items: [
      { key: "assets", href: "/resources/assets", live: false },
      { key: "icons", href: "/resources/icons", live: true },
      { key: "uiTokens", href: "/resources/tokens", live: true },
    ],
  },
];

export default function NavCards() {
  const { t } = useLocale();
  return (
    <div className={styles.grid}>
      {groups.map((group) => (
        <div className={styles.card} key={group.groupKey}>
          <h3 className={styles.heading}>{t(`nav.groups.${group.groupKey}`)}</h3>
          <ul className={styles.list}>
            {group.items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.link}>
                  <span className={`${styles.dot} ${item.live ? styles.live : ""}`} aria-hidden="true" />
                  {t(`nav.items.${item.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
