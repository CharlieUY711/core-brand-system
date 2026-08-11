import styles from "./MisuseGrid.module.css";

/**
 * Illustrations of incorrect symbol usage, for documentation only.
 * These are never alternative variants of the symbol — most reuse the
 * frozen master geometry (#core-symbol-master) under a CSS transform or
 * filter; two (nucleus/orbit separation and the orbit-guide overlay) use
 * small, local, illustration-only geometry that is never exported or
 * reused anywhere else in the app.
 */

const cssExamples: { label: string; note: string; style: React.CSSProperties; filter?: string }[] = [
  { label: "Deform", note: "stretching the symbol horizontally", style: { transform: "scaleX(1.7)" } },
  { label: "Rotate", note: "changing the fixed -20° incline", style: { transform: "rotate(34deg)" } },
  { label: "Compress", note: "flattening the vertical proportion", style: { transform: "scaleY(0.55)" } },
  { label: "Add effects", note: "shadows or other effects on the symbol", style: {}, filter: "drop-shadow(0 6px 6px rgba(0,0,0,.5))" },
  { label: "Recolor", note: "using a color outside the system", style: { color: "#e23b7a" } },
  { label: "Rebuild by hand", note: "redrawing the symbol imprecisely", style: {}, filter: "url(#misuse-wobble)" },
];

export default function MisuseGrid() {
  return (
    <div className={styles.grid}>
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <filter id="misuse-wobble">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.03" numOctaves="2" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="9" />
        </filter>
        <mask id="misuse-mask-nucleus" maskUnits="userSpaceOnUse" x="0" y="0" width="200" height="200">
          <rect width="200" height="200" fill="black" />
          <ellipse cx="100" cy="100" rx="86" ry="52" fill="white" transform="rotate(-20 100 100)" />
          <ellipse cx="106" cy="96" rx="64" ry="34" fill="black" transform="rotate(-20 106 96)" />
        </mask>
        <mask id="misuse-mask-orbit-far" maskUnits="userSpaceOnUse" x="0" y="0" width="200" height="200">
          <rect width="200" height="200" fill="black" />
          <ellipse cx="100" cy="100" rx="30" ry="16" fill="white" transform="rotate(-20 100 100)" />
          <ellipse cx="101" cy="99" rx="22" ry="10" fill="black" transform="rotate(-20 101 99)" />
        </mask>
      </svg>

      {cssExamples.map((ex) => (
        <div className={styles.card} key={ex.label}>
          <div className={styles.stage}>
            <svg
              width={56}
              height={56}
              viewBox="0 0 200 200"
              className={styles.symbol}
              style={ex.style}
              filter={ex.filter}
            >
              <use href="#core-symbol-master" width="200" height="200" />
            </svg>
            <div className={styles.strike} aria-hidden="true" />
          </div>
          <div className={styles.caption}>
            <b>NO — {ex.label}</b>
            {ex.note}
          </div>
        </div>
      ))}

      <div className={styles.card}>
        <div className={styles.stage}>
          <svg width={56} height={56} viewBox="0 0 200 200" className={styles.symbol}>
            <rect width="200" height="200" fill="currentColor" mask="url(#misuse-mask-nucleus)" />
            <rect width="200" height="200" fill="currentColor" mask="url(#misuse-mask-orbit-far)" />
          </svg>
          <div className={styles.strike} aria-hidden="true" />
        </div>
        <div className={styles.caption}>
          <b>NO — Separate artificially</b>
          pulling nucleus and orbit apart by hand
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.stage}>
          <svg width={56} height={56} viewBox="0 0 200 200" className={styles.symbol}>
            <ellipse cx="100" cy="100" rx="94" ry="58" fill="none" stroke="currentColor" strokeWidth="3" transform="rotate(-20 100 100)" />
            <use href="#core-symbol-master" width="200" height="200" />
          </svg>
          <div className={styles.strike} aria-hidden="true" />
        </div>
        <div className={styles.caption}>
          <b>NO — Merge the Orbit guide</b>
          using the Orbit guide as if it were part of the symbol
        </div>
      </div>
    </div>
  );
}
