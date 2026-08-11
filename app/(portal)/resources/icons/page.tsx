import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import PageContainer from "@/components/ui/PageContainer";
import Badge from "@/components/ui/Badge";
import CoreSymbol from "@/components/brand/CoreSymbol";
import styles from "./icons.module.css";

export const metadata: Metadata = { title: "Favicon / App Icons" };

export default function IconsPage() {
  return (
    <PageContainer>
      <Section
        eyebrow="Resources"
        title="Favicon / App Icons"
        lede="Same reduction scales validated in Brand Guidelines § 14–15."
      >
        <Badge live>Live</Badge>
      </Section>

      <div className={styles.tabRow}>
        <div className={styles.tab}>
          <CoreSymbol size={13} className={styles.tabIcon} title="Favicon" />
          <span>core.com.uy</span>
        </div>
      </div>

      <div className={styles.tiles}>
        <div className={styles.tile} style={{ width: 32, height: 32 }}>
          <CoreSymbol size={20} className={styles.dark} />
        </div>
        <div className={styles.tile} style={{ width: 48, height: 48, borderRadius: 11 }}>
          <CoreSymbol size={30} className={styles.dark} />
        </div>
        <div className={`${styles.tile} ${styles.solid}`} style={{ width: 64, height: 64, borderRadius: 15 }}>
          <CoreSymbol size={40} className={styles.light} />
        </div>
        <div className={`${styles.tile} ${styles.solid}`} style={{ width: 64, height: 64, borderRadius: 32 }}>
          <CoreSymbol size={38} className={styles.light} />
        </div>
      </div>
    </PageContainer>
  );
}
