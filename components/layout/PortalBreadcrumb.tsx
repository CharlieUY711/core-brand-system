"use client";

import { usePathname } from "next/navigation";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { getBreadcrumb } from "@/lib/nav/breadcrumbs";

export default function PortalBreadcrumb() {
  const pathname = usePathname();
  const { t } = useLocale();
  const items = getBreadcrumb(pathname, t);
  if (items.length === 0) return null;
  return <Breadcrumb items={items} ariaLabel={t("a11y.breadcrumbNav")} />;
}
