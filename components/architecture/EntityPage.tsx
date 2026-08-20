"use client";

import Section from "@/components/ui/Section";
import { Entity } from "@/lib/content/entities";
import { useLocale } from "@/lib/i18n/LocaleContext";
import styles from "./EntityPage.module.css";

export default function EntityPage({ entity }: { entity: Entity }) {
  const { t, dict } = useLocale();
  const content = dict.entities[entity.slug];

  return (
    <>
      <Section eyebrow={t("entityPage.metaTitleSuffix")} title={entity.name} />
      <div className={styles.tag}>{content.tag}</div>
      <p className={styles.role}>{content.role}</p>

      {content.bullets && (
        <ul className={styles.bullets}>
          {content.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}

      {content.restriction && (
        <div className={`${styles.callout} ${styles.error}`}>
          <span className={styles.calloutTag}>{t("entityPage.restrictionLabel")}</span>
          <p>{content.restriction}</p>
        </div>
      )}

      {content.rule && (
        <div className={`${styles.callout} ${styles.rule}`}>
          <span className={styles.calloutTag}>{content.rule}</span>
        </div>
      )}

      {entity.immutable && (
        <div className={`${styles.callout} ${styles.error}`}>
          <span className={styles.calloutTag}>
            {entity.name} {t("entityPage.immutableSuffix")}
          </span>
          {entity.officialAsset ? (
            <>
              <p>{t("entityPage.immutableNoteHeld", { name: entity.name })}</p>
              <div className={styles.asset}>
                {/* Plain <img>: the file is an approved brand asset reproduced
                    as-is, and next/image would re-encode it. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={entity.officialAsset} alt={entity.name} />
              </div>
            </>
          ) : (
            <>
              <p>{t("entityPage.immutableNote", { name: entity.name })}</p>
              <div className={styles.placeholder}>
                {t("entityPage.officialAssetPlaceholder", { name: entity.name })}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
