import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import PageContainer from "@/components/ui/PageContainer";
import styles from "./typography.module.css";

export const metadata: Metadata = { title: "Typography" };

const specimens = [
  { weight: 700, label: "IBM Plex Sans — Display 700 / 600", mono: false },
  { weight: 400, label: "IBM Plex Sans — Text 400 / 500", mono: false },
  { weight: 500, label: "IBM Plex Mono — UI / Data", mono: true },
];

export default function TypographyPage() {
  return (
    <PageContainer>
      <Section
        eyebrow="Brand"
        title="Typography"
        lede="Official family: IBM Plex — unchanged from Brand Guidelines § 07."
      />
      <div className={styles.grid}>
        {specimens.map((s) => (
          <div className={styles.card} key={s.label}>
            <div className={s.mono ? styles.glyphMono : styles.glyph} style={{ fontWeight: s.weight }}>
              Aa
            </div>
            <div className={styles.label}>{s.label}</div>
          </div>
        ))}
      </div>

      <table className={styles.scale}>
        <caption className={styles.caption}>Type scale</caption>
        <thead>
          <tr>
            <th scope="col">Role</th>
            <th scope="col">Weight</th>
            <th scope="col">Base size</th>
            <th scope="col">Tracking</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Display / H1</td><td>700</td><td>32–58px</td><td>-0.02em</td></tr>
          <tr><td>H2 section</td><td>700</td><td>22–26px</td><td>-0.015em</td></tr>
          <tr><td>H3 subsection</td><td>600</td><td>14–16px</td><td>0</td></tr>
          <tr><td>Body</td><td>400</td><td>14–16px</td><td>0</td></tr>
          <tr><td>UI label / button</td><td>600</td><td>11–13px</td><td>0.01em</td></tr>
          <tr><td>Mono / spec</td><td>400–500</td><td>9–13px</td><td>0.02–0.08em</td></tr>
        </tbody>
      </table>
    </PageContainer>
  );
}
