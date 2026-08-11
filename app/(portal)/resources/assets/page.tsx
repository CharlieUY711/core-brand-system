import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import PageContainer from "@/components/ui/PageContainer";
import Badge from "@/components/ui/Badge";
import AssetPlaceholder from "@/components/brand/AssetPlaceholder";
import styles from "./assets.module.css";

export const metadata: Metadata = { title: "Assets" };

export default function AssetsPage() {
  return (
    <PageContainer>
      <Section
        eyebrow="Resources"
        title="Assets"
        lede="SVG and PNG exports of the symbol, CORE, CORE Group and vertical lockups, generated from the master asset."
      >
        <Badge>Coming next</Badge>
      </Section>
      <div className={styles.stack}>
        <AssetPlaceholder
          label="SVG Assets — not yet exported"
          note="Symbol, CORE, CORE Group and vertical lockups. Files are generated from components/brand/CoreSymbolDefs.tsx once export tooling is set up — nothing is invented here."
        />
        <AssetPlaceholder
          label="PNG Assets — not yet exported"
          note="Transparent, light-background and dark-background exports."
        />
      </div>
    </PageContainer>
  );
}
