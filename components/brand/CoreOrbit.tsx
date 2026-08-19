import { entities } from "@/lib/content/entities";
import styles from "./CoreOrbit.module.css";

// Order around the orbit, not coordinates. ODDY and its subsidiary OnDemand
// sit together; then the four business brands endorsed by CORE; Charlie
// closes the ring. Name, category and color are NOT duplicated here: they
// come from lib/content/entities.ts, the single source of truth for the
// corporate roster, so CORE Orbit can never drift out of sync with
// Corporate Architecture again.
const ORDER = ["oddy", "ondemand", "comita", "facilia", "kora", "alma", "charlie"] as const;

// Ellipse of the dashed guide below: 230/130 at -20°, from CORE Brand &
// System v1.0. Positions used to be five hardcoded pairs, evenly spaced
// every 72°. They are derived now because the even spacing IS the
// composition — with the roster grown to seven, freezing the old pixel
// values would have kept five points exact and jammed two into the gaps,
// breaking the regularity the artifact was built on. Deriving them keeps
// the pattern true for any roster size, and adding an entity no longer
// means recomputing coordinates by hand.
const CX = 300, CY = 300, RX = 230, RY = 130, TILT = (-20 * Math.PI) / 180;
const PHASE = (342 * Math.PI) / 180; // keeps ODDY where v1.0 placed it

const layout = ORDER.map((slug, i) => {
  const t = PHASE + (i * 2 * Math.PI) / ORDER.length;
  return {
    slug,
    x: CX + RX * Math.cos(t) * Math.cos(TILT) - RY * Math.sin(t) * Math.sin(TILT),
    y: CY + RX * Math.cos(t) * Math.sin(TILT) + RY * Math.sin(t) * Math.cos(TILT),
  };
});

/**
 * CORE Orbit — a compositional graphic resource of the system.
 * It is explicitly NOT part of the D3-C symbol geometry: the dashed guide
 * ellipse is a separate, larger, decorative path drawn around the symbol,
 * never merged into it.
 */
export default function CoreOrbit() {
  return (
    <div className={styles.wrap}>
      <svg viewBox="0 0 600 600" className={styles.svg} role="img" aria-label="CORE Orbit — ecosystem composition around the CORE symbol">
        <ellipse
          cx="300"
          cy="300"
          rx="230"
          ry="130"
          fill="none"
          stroke="var(--core-muted)"
          strokeOpacity=".35"
          strokeWidth="1.5"
          strokeDasharray="3 7"
          transform="rotate(-20 300 300)"
        />
        <use href="#core-symbol-master" x="235" y="235" width="130" height="130" className={styles.hub} />
        {layout.map((pos) => {
          const entity = entities.find((e) => e.slug === pos.slug);
          if (!entity) return null;
          return (
            <g key={entity.slug} transform={`translate(${pos.x},${pos.y})`}>
              <rect x="-64" y="-19" width="128" height="38" rx="8" fill="var(--core-surface)" stroke="var(--core-line)" />
              <circle cx="-48" cy="0" r="5" fill={entity.orbitColor} />
              <text x="-36" y="-1" className={styles.name}>{entity.name}</text>
              <text x="-36" y="12" className={styles.category}>{entity.orbitCategory}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
