"use client";

import Section from "@/components/ui/Section";
import PageContainer from "@/components/ui/PageContainer";
import Badge from "@/components/ui/Badge";
import AssetPlaceholder from "@/components/brand/AssetPlaceholder";
import { useLocale } from "@/lib/i18n/LocaleContext";
import styles from "./assets.module.css";

/** Lo que realmente existe en public/assets/core/, generado por
 * scripts/build-brand-assets.mjs desde el símbolo maestro. Si se agregan
 * exportaciones, se agregan acá — esta página no debe prometer archivos que
 * no estén. */
const GRUPOS: { key: string; files: { name: string; href: string }[] }[] = [
  {
    key: "svg",
    files: [
      { name: "core-symbol-positive.svg", href: "/assets/core/symbol/core-symbol-positive.svg" },
      { name: "core-symbol-negative.svg", href: "/assets/core/symbol/core-symbol-negative.svg" },
      { name: "core-symbol-mono.svg", href: "/assets/core/symbol/core-symbol-mono.svg" },
      { name: "core-symbol-master.svg", href: "/assets/core/symbol/core-symbol-master.svg" },
    ],
  },
  {
    key: "png",
    files: [
      { name: "core-symbol-2048.png", href: "/assets/core/symbol/core-symbol-2048.png" },
      { name: "core-symbol-1024.png", href: "/assets/core/symbol/core-symbol-1024.png" },
      { name: "core-symbol-512.png", href: "/assets/core/symbol/core-symbol-512.png" },
      { name: "core-symbol-sobre-claro-2048.png", href: "/assets/core/symbol/core-symbol-sobre-claro-2048.png" },
      { name: "core-symbol-sobre-oscuro-2048.png", href: "/assets/core/symbol/core-symbol-sobre-oscuro-2048.png" },
    ],
  },
  {
    key: "icons",
    files: [
      { name: "favicon-16 … 512.png", href: "/assets/core/icons/favicon-512.png" },
      { name: "app-icon-32 … 512.png", href: "/assets/core/icons/app-icon-512.png" },
    ],
  },
];

export default function AssetsContent() {
  const { t } = useLocale();

  return (
    <PageContainer>
      <Section eyebrow={t("breadcrumb.resources")} title={t("nav.items.assets")} lede={t("resources.assetsPage.lede")}>
        <Badge>{t("resources.badgeLive")}</Badge>
      </Section>

      <div className={styles.stack}>
        {GRUPOS.map((g) => (
          <div key={g.key} className={styles.group}>
            <div className={styles.groupHead}>
              <span className={styles.groupTitle}>{t(`resources.assetsPage.${g.key}Label`)}</span>
              <span className={styles.groupKind}>{t(`resources.assetsPage.${g.key}Kind`)}</span>
            </div>
            <ul className={styles.files}>
              {g.files.map((f) => (
                <li key={f.name}>
                  {/* Archivos estáticos, no rutas: <a> y no next/link. */}
                  <a href={f.href} className={styles.file}>{f.name}</a>
                </li>
              ))}
            </ul>
            <p className={styles.note}>{t(`resources.assetsPage.${g.key}Note`)}</p>
          </div>
        ))}

        {/* Lo único que sigue faltando, y por qué. */}
        <AssetPlaceholder
          label={t("resources.assetsPage.logoLabel")}
          note={t("resources.assetsPage.logoNote")}
        />
      </div>
    </PageContainer>
  );
}
