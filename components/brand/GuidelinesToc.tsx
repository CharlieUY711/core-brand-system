import Link from "next/link";
import CoreSymbol from "./CoreSymbol";
import styles from "./GuidelinesToc.module.css";

const sections = [
  ["concept", "Concept"],
  ["symbol", "Symbol D3-C"],
  ["construction", "Construction"],
  ["clear-space", "Clear space"],
  ["minimum-sizes", "Minimum sizes"],
  ["palette", "Palette"],
  ["typography", "Typography"],
  ["wordmark", "Wordmark"],
  ["core-group", "CORE Group"],
  ["architecture", "Brand architecture"],
  ["oddy", "ODDY relationship"],
  ["orbit", "CORE Orbit"],
  ["reduction", "Reduction"],
  ["favicon", "Favicon"],
  ["app-icon", "App icon"],
  ["versions", "Versions"],
  ["misuse", "Incorrect uses"],
  ["ui-tokens", "UI color system"],
  ["verticals", "Verticals"],
  ["applications", "Applications"],
  ["rules", "Master rules"],
] as const;

export default function GuidelinesToc() {
  return (
    <nav className={styles.toc} aria-label="Brand Guidelines sections">
      <div className={styles.brand}>
        <CoreSymbol size={26} className={styles.icon} />
        <div className={styles.text}>
          CORE
          <small>Brand Guidelines v1.0</small>
        </div>
      </div>
      <div className={styles.status}>&#9679; D3-C frozen</div>
      {sections.map(([id, label], i) => (
        <Link key={id} href={`#${id}`} className={styles.link}>
          <span className={styles.n}>{String(i + 1).padStart(2, "0")}</span>
          {label}
        </Link>
      ))}
    </nav>
  );
}
