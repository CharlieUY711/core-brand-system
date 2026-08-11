import CoreSymbol from "./CoreSymbol";
import styles from "./SymbolStage.module.css";

/** Symbol shown on light and dark grounds side by side. */
export default function SymbolStage() {
  return (
    <div className={styles.stage}>
      <div className={`${styles.cell} ${styles.light}`}>
        <CoreSymbol size={72} className={styles.iconDark} />
        <span className={styles.cap}>light</span>
      </div>
      <div className={`${styles.cell} ${styles.dark}`}>
        <CoreSymbol size={72} className={styles.iconLight} />
        <span className={styles.cap}>dark</span>
      </div>
    </div>
  );
}
