import styles from "./CoreOrbit.module.css";

type OrbitCompany = {
  name: string;
  category: string;
  color: string;
  x: number;
  y: number;
};

// Fixed composition — positions computed on a 230/130 ellipse at -20°,
// matching the CORE Brand & System v1.0 artifact exactly.
const companies: OrbitCompany[] = [
  { name: "ODDY", category: "ECOSYSTEM", color: "#1D5FD6", x: 491.8, y: 187.5 },
  { name: "On Demand", category: "LOGISTICS", color: "#2AA8D8", x: 463.0, y: 352.6 },
  { name: "COMITA", category: "COMMERCE", color: "#1F7A4D", x: 209.0, y: 445.1 },
  { name: "FACILIA", category: "SERVICES", color: "#16264A", x: 80.7, y: 337.1 },
  { name: "Charlie", category: "TECHNOLOGY", color: "#D9641C", x: 255.5, y: 177.8 },
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
        {companies.map((c) => (
          <g key={c.name} transform={`translate(${c.x},${c.y})`}>
            <rect x="-64" y="-19" width="128" height="38" rx="8" fill="var(--core-surface)" stroke="var(--core-line)" />
            <circle cx="-48" cy="0" r="5" fill={c.color} />
            <text x="-36" y="-1" className={styles.name}>{c.name}</text>
            <text x="-36" y="12" className={styles.category}>{c.category}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}
