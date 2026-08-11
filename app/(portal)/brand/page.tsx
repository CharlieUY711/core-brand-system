import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import PageContainer from "@/components/ui/PageContainer";
import Card from "@/components/ui/Card";
import styles from "./brand.module.css";

export const metadata: Metadata = { title: "Brand" };

const items = [
  { label: "Brand Guidelines", href: "/brand/guidelines", text: "The full, approved identity manual — 21 sections." },
  { label: "Logo & Assets", href: "/brand/logo", text: "Official symbol and lockup assets." },
  { label: "Color System", href: "/brand/color", text: "CORE Ink, CORE Signal and the supporting palette." },
  { label: "Typography", href: "/brand/typography", text: "IBM Plex — display, text and UI roles." },
  { label: "CORE Orbit", href: "/brand/orbit", text: "The compositional graphic resource, kept separate from the symbol." },
];

export default function BrandOverview() {
  return (
    <PageContainer>
      <Section eyebrow="Brand" title="Brand" lede="The visual identity and design language of CORE." />
      <div className={styles.grid}>
        {items.map((item) => (
          <Card href={item.href} key={item.href} className={styles.card}>
            <div className={styles.name}>{item.label}</div>
            <p className={styles.text}>{item.text}</p>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
}
