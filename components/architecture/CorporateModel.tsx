import Link from "next/link";
import { entities } from "@/lib/content/entities";
import styles from "./CorporateModel.module.css";

const charlie = entities.find((e) => e.slug === "charlie")!;
const topLevel = entities.filter((e) => e.slug !== "charlie" && !e.parent);

/**
 * CHARLIE -> CORE -> (ODDY [-> OnDemand] / COMITA / FACILIA) organizational
 * model, driven directly by lib/content/entities.ts so the diagram can
 * never drift from the entity data.
 *
 * CHARLIE is vision/governance, at the top. CORE is the Business
 * Operating System — the vertex that orchestrates and executes. ODDY,
 * COMITA and FACILIA are peer entities directly under CORE; OnDemand is
 * ODDY's subsidiary, nested one level below it. ODDY must never be
 * rendered above CORE. This is the single canonical rendering of the
 * corporate architecture diagram, reused on the home page, on
 * /architecture and inside Brand Guidelines § 10.
 */
export default function CorporateModel() {
  return (
    <div className={styles.model}>
      <Link href={`/architecture/${charlie.slug}`} className={`${styles.node} ${styles.top}`}>
        <div className={styles.t}>{charlie.name.toUpperCase()}</div>
        <div className={styles.d}>Vision · Governance</div>
      </Link>
      <div className={styles.stem} />
      <Link href="/" className={`${styles.node} ${styles.mid}`}>
        <div className={styles.t}>CORE</div>
        <div className={styles.d}>Business Operating System</div>
      </Link>
      <div className={styles.branch} />
      <div className={styles.leaves}>
        {topLevel.map((entity) => {
          const child = entities.find((e) => e.parent === entity.slug);
          return (
            <div className={styles.col} key={entity.slug}>
              <div className={styles.stem} />
              <Link href={`/architecture/${entity.slug}`} className={`${styles.node} ${styles.leaf}`}>
                <div className={styles.t}>{entity.name}</div>
                <div className={styles.d}>{entity.tag.split(" — ")[1] ?? entity.tag}</div>
              </Link>
              {child && (
                <>
                  <div className={styles.stem} />
                  <Link href={`/architecture/${child.slug}`} className={`${styles.node} ${styles.child}`}>
                    <div className={styles.t}>{child.name}</div>
                    <div className={styles.d}>{child.tag.split(" — ")[1] ?? child.tag}</div>
                  </Link>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
