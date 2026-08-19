import Link from "next/link";
import styles from "./Breadcrumb.module.css";

type Crumb = { label: string; href?: string };

export default function Breadcrumb({ items, ariaLabel = "Breadcrumb" }: { items: Crumb[]; ariaLabel?: string }) {
  return (
    <nav className={styles.bar} aria-label={ariaLabel}>
      <ol className={styles.list}>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.label} className={styles.item}>
              {item.href && !isLast ? (
                <Link href={item.href}>{i === 0 ? <>&larr; {item.label}</> : item.label}</Link>
              ) : (
                <span className={styles.current} aria-current="page">{item.label}</span>
              )}
              {!isLast && <span className={styles.sep} aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
