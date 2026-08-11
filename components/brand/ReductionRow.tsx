import CoreSymbol from "./CoreSymbol";
import styles from "./ReductionRow.module.css";

const sizes = [64, 48, 32, 24, 16];

export default function ReductionRow() {
  return (
    <div className={styles.row}>
      {sizes.map((size, i) => {
        const dark = i === 3; // 24px shown on a dark chip, matching the validated test set
        return (
          <div className={styles.item} key={size}>
            <div className={`${styles.chip} ${dark ? styles.dark : styles.light}`} style={{ width: size, height: size }}>
              <CoreSymbol size={size * 0.7} className={dark ? styles.iconLight : styles.iconDark} />
            </div>
            <span className={styles.px}>{size}</span>
          </div>
        );
      })}
    </div>
  );
}
