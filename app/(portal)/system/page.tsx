import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import PageContainer from "@/components/ui/PageContainer";
import Card from "@/components/ui/Card";
import { verticals } from "@/lib/content/verticals";
import styles from "./system.module.css";

export const metadata: Metadata = { title: "System" };

export default function SystemOverview() {
  return (
    <PageContainer>
      <Section
        eyebrow="System"
        title="CORE System"
        lede="CORE is the technology platform and system that connects, orchestrates and supports the ecosystem."
      />
      <div className={styles.grid}>
        {verticals.map((v) => (
          <Card href={`/system/${v.slug}`} key={v.slug} className={styles.card}>
            <span className={styles.dot} style={{ background: v.color }} aria-hidden="true" />
            <div className={styles.name}>{v.name}</div>
            <p className={styles.role}>{v.role}</p>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
}
