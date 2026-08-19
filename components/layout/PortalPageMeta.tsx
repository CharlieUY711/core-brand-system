"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { getPageTitle } from "@/lib/i18n/pageTitle";

/** Keeps document.title in sync with the active locale after hydration.
 * The static `export const metadata` on each page remains the Spanish
 * SSR/SEO fallback (crawlers without JS always see the default locale). */
export default function PortalPageMeta() {
  const pathname = usePathname();
  const { locale, t } = useLocale();

  useEffect(() => {
    document.title = getPageTitle(pathname, t);
  }, [pathname, locale, t]);

  return null;
}
