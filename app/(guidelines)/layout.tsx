"use client";

import Breadcrumb from "@/components/layout/Breadcrumb";
import GuidelinesToc from "@/components/brand/GuidelinesToc";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import { useLocale } from "@/lib/i18n/LocaleContext";
import styles from "./guidelines.module.css";

export default function GuidelinesLayout({ children }: { children: React.ReactNode }) {
  const { t } = useLocale();

  return (
    <div>
      <div className={styles.topbar}>
        <Breadcrumb
          items={[
            { label: t("guidelines.crumbRoot"), href: "/" },
            { label: t("guidelines.crumbVersion") },
          ]}
        />
        {/* This route group has its own layout, so it does not inherit the
            portal sidebar — without this the document would be translated
            but the reader would have no way to switch language. */}
        <LanguageSwitcher />
      </div>
      <div className={styles.shell}>
        <GuidelinesToc />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
