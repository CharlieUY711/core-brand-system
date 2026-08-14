import { entities } from "@/lib/content/entities";
import styles from "./CoreOrbit.module.css";

// Pure layout data — positions on a 230/130 ellipse at -20°, matching the
// CORE Brand & System v1.0 artifact exactly. Name, category and color are
// NOT duplicated here: they come from lib/content/entities.ts, the single
// source of truth for the corporate roster, so CORE Orbit can never drift
// out of sync with Corporate Architecture again.
const layout: { slug: "oddy" | "ondemand" | "comita" | "facilia" | "charlie"; x: number; y: number }[] = [
  { slug: "oddy", x: 491.8, y: 187.5 },
  { slug: "ondemand", x: 463.0, y: 352.6 },
  { slug: "comita", x: 209.0, y: 445.1 },
  { slug: "facilia", x: 80.7, y: 337.1 },
  { slug: "charlie", x: 255.5, y: 177.8 },
];

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
