import Section from "@/components/ui/Section";
import { Entity } from "@/lib/content/entities";
import styles from "./EntityPage.module.css";

export default function EntityPage({ entity }: { entity: Entity }) {
  return (
    <>
      <Section eyebrow="Corporate Architecture" title={entity.name} />
      <div className={styles.tag}>{entity.tag}</div>
      <p className={styles.role}>{entity.role}</p>

      {entity.bullets && (
        <ul className={styles.bullets}>
          {entity.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}

      {entity.restriction && (
        <div className={`${styles.callout} ${styles.error}`}>
          <span className={styles.calloutTag}>Restriction</span>
          <p>{entity.restriction}</p>
        </div>
      )}

      {entity.rule && (
        <div className={`${styles.callout} ${styles.rule}`}>
          <span className={styles.calloutTag}>{entity.rule}</span>
        </div>
      )}

      {entity.immutable && (
        <div className={`${styles.callout} ${styles.error}`}>
          <span className={styles.calloutTag}>{entity.name} BRAND ASSET — IMMUTABLE</span>
          <p>
            {entity.name} already has its own identity. Never redrawn, modified or
            reinterpreted. Official file not available in this repository yet — reference
            placeholder:
          </p>
          <div className={styles.placeholder}>{entity.name} OFFICIAL ASSET — INSERT OFFICIAL FILE</div>
        </div>
      )}
    </>
  );
}
