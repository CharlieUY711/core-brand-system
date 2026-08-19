type TFn = (path: string, vars?: Record<string, string | number>) => string;

const sectionTitleKey: Record<string, string> = {
  brand: "brand.metaTitle",
  system: "system.metaTitle",
  architecture: "architecture.metaTitle",
  resources: "resources.metaTitle",
};

const leafTitleKey: Record<string, string> = {
  "brand/definitions": "nav.items.brandDefinitions",
  "brand/logo": "nav.items.logoAssets",
  "brand/color": "nav.items.colorSystem",
  "brand/typography": "nav.items.typography",
  "brand/orbit": "nav.items.coreOrbit",
  "resources/assets": "nav.items.assets",
  "resources/icons": "nav.items.icons",
  "resources/tokens": "nav.items.uiTokens",
};

/** Mirrors lib/nav/breadcrumbs.ts's pathname parsing so document.title stays
 * in sync with the active locale client-side. The (guidelines) route group
 * uses its own static metadata and is intentionally not covered here — see
 * the V1.4 report for that documented gap. */
export function getPageTitle(pathname: string, t: TFn): string {
  if (pathname === "/") return t("home.metaTitle");

  const segments = pathname.split("/").filter(Boolean);
  const [section, leaf] = segments;
  if (!sectionTitleKey[section]) return t("home.metaTitle");

  let base: string;
  if (leaf) {
    const key = leafTitleKey[`${section}/${leaf}`];
    base = key ? t(key) : t(`nav.items.${leaf}`);
  } else {
    base = t(sectionTitleKey[section]);
  }
  return `${base} · CORE`;
}
