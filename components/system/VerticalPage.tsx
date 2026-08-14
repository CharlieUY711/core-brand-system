import Link from "next/link";
import Section from "@/components/ui/Section";
import TechnologyLayer from "@/components/architecture/TechnologyLayer";
import { Vertical } from "@/lib/content/verticals";
import { entities } from "@/lib/content/entities";
import styles from "./VerticalPage.module.css";

export default function VerticalPage({ vertical }: { vertical: Vertical }) {
  const flowEntity =
    vertical.showFlow && vertical.relations?.[0]
      ? entities.find((e) => vertical.relations![0].href.endsWith(e.slug))
      : undefined;

  return (
    <>
      <Section eyebrow="System" title={vertical.name} lede={vertical.role} />

      {vertical.note && <p className={styles.note}>{vertical.note}</p>}

      {flowEntity && (
        <TechnologyLayer operator={flowEntity.name} operatorRole={flowEntity.tag} layer={vertical.name} />
      )}

      {vertical.relations && vertical.relations.length > 0 && (
        <div className={styles.relation}>
          <span className={styles.relationTag}>{vertical.relations.length > 1 ? "Relations" : "Relation"}</span>
          <ul className={styles.relationList}>
            {vertical.relations.map((r) => (
              <li key={r.href}>
                {r.label} — <Link href={r.href} className={styles.relationLink}>see Corporate Architecture</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
