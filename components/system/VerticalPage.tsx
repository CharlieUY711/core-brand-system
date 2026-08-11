import Link from "next/link";
import Section from "@/components/ui/Section";
import TechnologyLayer from "@/components/architecture/TechnologyLayer";
import { Vertical } from "@/lib/content/verticals";
import { entities } from "@/lib/content/entities";
import styles from "./VerticalPage.module.css";

export default function VerticalPage({ vertical }: { vertical: Vertical }) {
  const relatedEntity = vertical.relation
    ? entities.find((e) => vertical.relation!.href.endsWith(e.slug))
    : undefined;

  return (
    <>
      <Section eyebrow="System" title={vertical.name} lede={vertical.role} />

      {vertical.note && <p className={styles.note}>{vertical.note}</p>}

      {vertical.showFlow && relatedEntity && (
        <TechnologyLayer operator={relatedEntity.name} operatorRole={relatedEntity.tag} layer={vertical.name} />
      )}

      {vertical.relation && (
        <div className={styles.relation}>
          <span className={styles.relationTag}>Relation</span>
          <p>
            {vertical.relation.label} —{" "}
            <Link href={vertical.relation.href} className={styles.relationLink}>
              see Corporate Architecture
            </Link>
          </p>
        </div>
      )}
    </>
  );
}
