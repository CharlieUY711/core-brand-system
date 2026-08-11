import Link from "next/link";
import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import PageContainer from "@/components/ui/PageContainer";
import CoreSymbol from "@/components/brand/CoreSymbol";
import styles from "./logo.module.css";

export const metadata: Metadata = { title: "Logo & Assets" };

export default function LogoPage() {
  return (
    <PageContainer>
      <Section
        eyebrow="Brand"
        title="Logo & Assets"
        lede="This page documents the official symbol and lockup assets — it does not replace the source file. Full construction spec in Brand Guidelines § 02–03."
      />
      <div className={styles.grid}>
        <div className={styles.card}>
          <CoreSymbol size={64} className={styles.symbol} title="CORE symbol" />
          <div className={styles.caption}>Symbol — CORE SYMBOL MASTER</div>
        </div>
        <div className={styles.card}>
          <div className={styles.lockup}>
            <CoreSymbol size={30} className={styles.symbol} />
            <span className={styles.wordmark}>CORE</span>
          </div>
          <div className={styles.caption}>Wordmark — CORE</div>
        </div>
        <div className={styles.card}>
          <div className={styles.lockup}>
            <CoreSymbol size={30} className={styles.symbol} />
            <span className={styles.wordmark}>
              CORE<small>Group</small>
            </span>
          </div>
          <div className={styles.caption}>Lockup — CORE Group</div>
        </div>
      </div>
      <p className={styles.footnote}>
        Positive / negative / monochrome versions in <strong>Brand Guidelines § 16</strong>.
        Exportable SVG and PNG files in{" "}
        <Link href="/resources/assets" className={styles.link}>Resources → Assets</Link> once generated.
      </p>
    </PageContainer>
  );
}
