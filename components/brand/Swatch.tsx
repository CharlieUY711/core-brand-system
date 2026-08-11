import { Swatch as SwatchType } from "@/lib/content/palette";
import styles from "./Swatch.module.css";

export default function Swatch({ swatch }: { swatch: SwatchType }) {
  return (
    <div className={styles.card}>
      <div className={styles.fill} style={{ background: swatch.hex }} />
      <div className={styles.info}>
        <div className={styles.name}>{swatch.name}</div>
        <div className={styles.hex}>{swatch.hex}</div>
        <div className={styles.use}>{swatch.use}</div>
      </div>
    </div>
  );
}
