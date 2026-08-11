import Link from "next/link";
import styles from "./CorporateModel.module.css";

/**
 * CHARLIE -> CORE -> (ODDY / OnDemand / COMITA) organizational model.
 *
 * CHARLIE is vision/governance, at the top. CORE is the Business
 * Operating System — the vertex that orchestrates and executes. ODDY,
 * OnDemand and COMITA are peer entities under CORE. ODDY must never be
 * rendered above CORE — this is the single canonical rendering of the
 * corporate architecture diagram, reused on the home page, on
 * /architecture and inside Brand Guidelines § 10.
 */
export default function CorporateModel() {
  return (
    <div className={styles.model}>
      <Link href="/architecture/charlie" className={`${styles.node} ${styles.top}`}>
        <div className={styles.t}>CHARLIE</div>
        <div className={styles.d}>Vision · Governance</div>
      </Link>
      <div className={styles.stem} />
      <Link href="/" className={`${styles.node} ${styles.mid}`}>
        <div className={styles.t}>CORE</div>
        <div className={styles.d}>Business Operating System</div>
      </Link>
      <div className={styles.branch} />
      <div className={styles.leaves}>
        <div className={styles.col}>
          <div className={styles.stem} />
          <Link href="/architecture/oddy" className={`${styles.node} ${styles.leaf}`}>
            <div className={styles.t}>ODDY</div>
            <div className={styles.d}>Ecosystem</div>
          </Link>
        </div>
        <div className={styles.col}>
          <div className={styles.stem} />
          <Link href="/architecture/ondemand" className={`${styles.node} ${styles.leaf}`}>
            <div className={styles.t}>OnDemand</div>
            <div className={styles.d}>Logistics</div>
          </Link>
        </div>
        <div className={styles.col}>
          <div className={styles.stem} />
          <Link href="/architecture/comita" className={`${styles.node} ${styles.leaf}`}>
            <div className={styles.t}>COMITA</div>
            <div className={styles.d}>Commerce</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
