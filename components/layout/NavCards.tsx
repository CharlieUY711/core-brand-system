import Link from "next/link";
import styles from "./NavCards.module.css";

type Item = { label: string; href: string; live: boolean };
type Group = { title: string; items: Item[] };

const groups: Group[] = [
  {
    title: "Brand",
    items: [
      { label: "Brand Guidelines", href: "/brand/guidelines", live: true },
      { label: "Logo & Assets", href: "/brand/logo", live: true },
      { label: "Color System", href: "/brand/color", live: true },
      { label: "Typography", href: "/brand/typography", live: true },
      { label: "CORE Orbit", href: "/brand/orbit", live: true },
    ],
  },
  {
    title: "System",
    items: [
      { label: "CORE Logistics", href: "/system/logistics", live: true },
      { label: "CORE Rep", href: "/system/rep", live: true },
      { label: "CORE Market", href: "/system/market", live: true },
      { label: "CORE Services", href: "/system/services", live: true },
      { label: "CORE Intelligence", href: "/system/intelligence", live: true },
      { label: "CORE Finance", href: "/system/finance", live: true },
    ],
  },
  {
    title: "Corporate Architecture",
    items: [
      { label: "Overview", href: "/architecture", live: true },
      { label: "Charlie", href: "/architecture/charlie", live: true },
      { label: "ODDY", href: "/architecture/oddy", live: true },
      { label: "OnDemand", href: "/architecture/ondemand", live: true },
      { label: "COMITA", href: "/architecture/comita", live: true },
      { label: "FACILIA", href: "/architecture/facilia", live: true },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Assets", href: "/resources/assets", live: false },
      { label: "Icons", href: "/resources/icons", live: true },
      { label: "UI Tokens", href: "/resources/tokens", live: true },
    ],
  },
];

export default function NavCards() {
  return (
    <div className={styles.grid}>
      {groups.map((group) => (
        <div className={styles.card} key={group.title}>
          <h3 className={styles.heading}>{group.title}</h3>
          <ul className={styles.list}>
            {group.items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.link}>
                  <span className={`${styles.dot} ${item.live ? styles.live : ""}`} aria-hidden="true" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
