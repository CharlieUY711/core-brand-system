export type Crumb = { label: string; href?: string };

type TFn = (path: string, vars?: Record<string, string | number>) => string;

const sectionKey: Record<string, string> = {
  brand: "breadcrumb.brand",
  system: "breadcrumb.system",
  architecture: "breadcrumb.architecture",
  resources: "breadcrumb.resources",
};

const staticLeafKey: Record<string, string> = {
  "brand/definitions": "nav.items.brandDefinitions",
  "brand/logo": "nav.items.logoAssets",
  "brand/color": "nav.items.colorSystem",
  "brand/typography": "nav.items.typography",
  "brand/orbit": "nav.items.coreOrbit",
  "resources/assets": "nav.items.assets",
  "resources/icons": "nav.items.icons",
  "resources/tokens": "nav.items.uiTokens",
};

/** Derives breadcrumb trail from a portal pathname. Labels come from the
 * same i18n dictionary keys used by Sidebar/NavCards (nav.items / nav.groups)
 * so the trail can never drift out of sync with the nav, in any locale. */
export function getBreadcrumb(pathname: string, t: TFn): Crumb[] {
  if (pathname === "/") return [];
  const segments = pathname.split("/").filter(Boolean);
  const [section, leaf] = segments;
  if (!sectionKey[section]) return [];

  const crumbs: Crumb[] = [{ label: t("breadcrumb.root"), href: "/" }];
  crumbs.push({ label: t(sectionKey[section]), href: leaf ? `/${section}` : undefined });

  if (leaf) {
    const key = staticLeafKey[`${section}/${leaf}`] ?? `nav.items.${leaf}`;
    crumbs.push({ label: t(key) });
  }

  return crumbs;
}
