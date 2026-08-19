"use client";

import Link from "next/link";
import { entities } from "@/lib/content/entities";
import { Locale, useLocale } from "@/lib/i18n/LocaleContext";
import esDict from "@/lib/i18n/dictionaries/es";
import ptDict from "@/lib/i18n/dictionaries/pt";
import enDict from "@/lib/i18n/dictionaries/en";
import styles from "./CorporateModel.module.css";

const charlie = entities.find((e) => e.slug === "charlie")!;
const topLevel = entities.filter((e) => e.slug !== "charlie" && !e.parent);

/** Read directly rather than through useLocale, because this component can be
 * pinned to a locale other than the portal's active one — see `locale` below.
 * English used to be a local captions table here, since it was not yet a
 * portal locale; now that it is, the captions come from the dictionary like
 * every other language. */
const dictionaries = { es: esDict, pt: ptDict, en: enDict };

/**
 * CHARLIE -> CORE -> (ODDY [-> OnDemand] / COMITA / FACILIA) organizational
 * model, driven directly by lib/content/entities.ts so the diagram can
 * never drift from the entity data.
 *
 * CHARLIE is vision/governance, at the top. CORE is the Business
 * Operating System — the vertex that orchestrates and executes. ODDY,
 * COMITA and FACILIA are peer entities directly under CORE; OnDemand is
 * ODDY's subsidiary, nested one level below it. ODDY must never be
 * rendered above CORE. This is the single canonical rendering of the
 * corporate architecture diagram, reused on the home page, on
 * /architecture and inside Brand Guidelines § 10.
 *
 * `locale` optionally pins the rendering to a specific locale regardless
 * of the portal's active one — used only by Brand Guidelines § 10, which
 * passes `locale="en"` because it must stay English no matter what
 * language the rest of the portal is in.
 */
export default function CorporateModel({ locale: localeOverride }: { locale?: Locale } = {}) {
  const { locale: activeLocale } = useLocale();
  const locale = localeOverride ?? activeLocale;

  const caption = (slug: "charlie" | "core" | "oddy" | "ondemand" | "comita" | "facilia"): string =>
    dictionaries[locale].architecture.diagram[slug];

  return (
    <div className={styles.model}>
      <Link href={`/architecture/${charlie.slug}`} className={`${styles.node} ${styles.top}`}>
        <div className={styles.t}>{charlie.name.toUpperCase()}</div>
        <div className={styles.d}>{caption("charlie")}</div>
      </Link>
      <div className={styles.stem} />
      <Link href="/" className={`${styles.node} ${styles.mid}`}>
        <div className={styles.t}>CORE</div>
        <div className={styles.d}>{caption("core")}</div>
      </Link>
      <div className={styles.branch} />
      <div className={styles.leaves}>
        {topLevel.map((entity) => {
          const child = entities.find((e) => e.parent === entity.slug);
          return (
            <div className={styles.col} key={entity.slug}>
              <div className={styles.stem} />
              <Link href={`/architecture/${entity.slug}`} className={`${styles.node} ${styles.leaf}`}>
                <div className={styles.t}>{entity.name}</div>
                <div className={styles.d}>{caption(entity.slug as "oddy" | "comita" | "facilia")}</div>
              </Link>
              {child && (
                <>
                  <div className={styles.stem} />
                  <Link href={`/architecture/${child.slug}`} className={`${styles.node} ${styles.child}`}>
                    <div className={styles.t}>{child.name}</div>
                    <div className={styles.d}>{caption(child.slug as "ondemand")}</div>
                  </Link>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
