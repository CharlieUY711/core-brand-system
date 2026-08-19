"use client";

import { Locale, LOCALES, useLocale } from "@/lib/i18n/LocaleContext";
import styles from "./LanguageSwitcher.module.css";

/** Typed against Locale, not Record<string, string>: adding a language
 * without giving it a label here fails typecheck instead of rendering an
 * empty button. */
const labels: Record<Locale, string> = { es: "ES", pt: "PT", en: "EN" };

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale();
  return (
    <div className={styles.wrap} role="group" aria-label={t("a11y.languageSwitcher")}>
      {LOCALES.map((l) => (
        <button
          key={l}
          type="button"
          className={`${styles.btn} ${locale === l ? styles.active : ""}`}
          aria-current={locale === l ? "true" : undefined}
          onClick={() => setLocale(l)}
        >
          {labels[l]}
        </button>
      ))}
    </div>
  );
}
