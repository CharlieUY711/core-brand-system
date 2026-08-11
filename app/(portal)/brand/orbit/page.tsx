import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import PageContainer from "@/components/ui/PageContainer";
import CoreOrbit from "@/components/brand/CoreOrbit";
import styles from "./orbit.module.css";

export const metadata: Metadata = { title: "CORE Orbit" };

export default function OrbitPage() {
  return (
    <PageContainer wide>
      <Section eyebrow="Brand" title="CORE Orbit" />
      <div className={styles.note}>
        <span className={styles.noteTag}>System graphic — not part of the symbol</span>
        <p>
          CORE Orbit is not part of the D3-C geometry. It is a separate compositional
          resource for covers, presentations, web pages, institutional backgrounds,
          diagrams, motion and storytelling.
        </p>
      </div>
      <CoreOrbit />
    </PageContainer>
  );
}
