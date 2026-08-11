import styles from "./AssetPlaceholder.module.css";

type AssetPlaceholderProps = {
  label: string;
  note?: string;
};

/**
 * Explicit "not available yet" marker. Used for resources that don't have
 * an exported file in the repository (SVG/PNG exports) or for the ODDY
 * official asset, which must never be redrawn or invented.
 */
export default function AssetPlaceholder({ label, note }: AssetPlaceholderProps) {
  return (
    <div className={styles.box} role="note">
      <span className={styles.label}>{label}</span>
      {note && <p className={styles.note}>{note}</p>}
    </div>
  );
}
