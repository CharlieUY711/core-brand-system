"use client";

import Link from "next/link";
import Section from "@/components/ui/Section";
import TechnologyLayer from "@/components/architecture/TechnologyLayer";
import { Vertical, RelatedEntitySlug } from "@/lib/content/verticals";
import { Entity, entities } from "@/lib/content/entities";
import { useLocale } from "@/lib/i18n/LocaleContext";
import styles from "./VerticalPage.module.css";

type RelatedEntity = { slug: RelatedEntitySlug; entity: Entity };

export default function VerticalPage({ vertical }: { vertical: Vertical }) {
  const { t, dict } = useLocale();
  const content = dict.verticals[vertical.slug];

  const relatedEntities: RelatedEntity[] = (vertical.relations ?? [])
    .map((slug) => {
      const entity = entities.find((e) => e.slug === slug);
      return entity ? { slug, entity } : null;
    })
    .filter((r): r is RelatedEntity => Boolean(r));

  const flowEntities = vertical.showFlow ? relatedEntities : [];

  return (
    <>
      <Section eyebrow={t("breadcrumb.system")} title={vertical.name} lede={content.role} />

      {content.note && <p className={styles.note}>{content.note}</p>}

      {flowEntities.length > 0 && (
        <div className={styles.flows}>
          {flowEntities.map((r) => (
            <TechnologyLayer
              key={r.slug}
              operator={r.entity.name}
              operatorRole={dict.entities[r.slug].tag}
              layer={vertical.name}
            />
          ))}
        </div>
      )}

      {relatedEntities.length > 0 && (
        <div className={styles.relation}>
          <span className={styles.relationTag}>
            {relatedEntities.length > 1 ? t("verticalPage.relations") : t("verticalPage.relation")}
          </span>
          <ul className={styles.relationList}>
            {relatedEntities.map((r) => (
              <li key={r.slug}>
                {content.relations?.[r.slug]} —{" "}
                <Link href={`/architecture/${r.slug}`} className={styles.relationLink}>
                  {t("verticalPage.seeCorporateArchitecture")}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
