import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import PageContainer from "@/components/ui/PageContainer";
import Swatch from "@/components/brand/Swatch";
import { primary, neutrals, semantic } from "@/lib/content/palette";
import styles from "./color.module.css";

export const metadata: Metadata = { title: "Color System" };

export default function ColorPage() {
  return (
    <PageContainer>
      <Section
        eyebrow="Brand"
        title="Color System"
        lede="The official CORE palette, inherited directly from Brand Guidelines § 06 — not redefined here."
      />
      <div className={styles.grid}>
        {primary.map((s) => (
          <Swatch swatch={s} key={s.name} />
        ))}
      </div>
      <h2 className={styles.h2}>Neutrals</h2>
      <div className={styles.grid}>
        {neutrals.map((s) => (
          <Swatch swatch={s} key={s.name} />
        ))}
      </div>
      <h2 className={styles.h2}>Semantic</h2>
      <div className={styles.grid}>
        {semantic.map((s) => (
          <Swatch swatch={s} key={s.name} />
        ))}
      </div>
    </PageContainer>
  );
}
