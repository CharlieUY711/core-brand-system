import Link from "next/link";
import styles from "./CorporateModel.module.css";

/**
 * ODDY → CORE → (OnDemand / COMITA) organizational model.
 * This is the single canonical rendering of the corporate architecture
 * diagram — reused on the home page and on /architecture.
 */
export default function CorporateModel() {
  return (
    <div className={styles.model}>
      <div className={`${styles.node} ${styles.top}`}>
        <div className={styles.t}>ODDY</div>
        <div className={styles.d}>Corporate Ecosystem</div>
      </div>
      <div className={styles.stem} />
      <Link href="/" className={`${styles.node} ${styles.mid}`}>
        <div className={styles.t}>CORE</div>
        <div className={styles.d}>Technology Platform / System</div>
      </Link>
      <div className={styles.branch} />
      <div className={styles.leaves}>
        <div className={styles.col}>
          <div className={styles.stem} />
          <Link href="/architecture/ondemand" className={`${styles.node} ${styles.leaf}`}>
            <div className={styles.t}>OnDemand</div>
            <div className={styles.d}>Logistics Operations</div>
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
