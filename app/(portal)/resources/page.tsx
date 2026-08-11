import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import PageContainer from "@/components/ui/PageContainer";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import styles from "./resources.module.css";

export const metadata: Metadata = { title: "Resources" };

const items = [
  { label: "Assets", href: "/resources/assets", live: false, text: "SVG and PNG exports of the symbol and lockups." },
  { label: "Icons", href: "/resources/icons", live: true, text: "Favicon and app icon reduction scales." },
  { label: "UI Tokens", href: "/resources/tokens", live: true, text: "Design tokens for product surfaces." },
];

export default function ResourcesOverview() {
  return (
    <PageContainer>
      <Section
        eyebrow="Resources"
        title="Resources"
        lede="Downloadable assets and implementation references. Nothing here is invented — modules without an exported file say so explicitly."
      />
      <div className={styles.grid}>
        {items.map((item) => (
          <Card href={item.href} key={item.href} className={styles.card}>
            <div className={styles.name}>{item.label}</div>
            <p className={styles.text}>{item.text}</p>
            <Badge live={item.live}>{item.live ? "Live" : "Coming next"}</Badge>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
}
