import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import PageContainer from "@/components/ui/PageContainer";
import CorporateModel from "@/components/architecture/CorporateModel";
import styles from "./architecture.module.css";

export const metadata: Metadata = { title: "Corporate Architecture" };

export default function ArchitectureOverview() {
  return (
    <PageContainer>
      <Section
        eyebrow="Corporate Architecture"
        title="Corporate Architecture"
        lede="Brand defines how CORE looks. Corporate Architecture defines how the ecosystem is organized and who does what — the two are never mixed. Charlie defines the vision; CORE is the Business Operating System that orchestrates and executes it; ODDY, OnDemand and COMITA are the entities and operations that run the business."
      />

      <div className={styles.diagram}>
        <CorporateModel />
      </div>

      <div className={styles.rule}>
        <p>
          Charlie defines. CORE orchestrates and executes. OnDemand operates
          logistics. COMITA develops commerce. ODDY is a brand and ecosystem
          entity within the system CORE connects — never a parent of CORE.
        </p>
      </div>

      <table className={styles.table}>
        <caption className={styles.caption}>Entity responsibilities</caption>
        <thead>
          <tr>
            <th scope="col">Entity</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Charlie</td>
            <td>Vision · governance — top conceptual level, not a product or vertical</td>
          </tr>
          <tr>
            <td>CORE</td>
            <td>Business Operating System — platform · intelligence · orchestration</td>
          </tr>
          <tr>
            <td>ODDY</td>
            <td>Ecosystem / brand entity connected by CORE — not CORE&apos;s parent</td>
          </tr>
          <tr>
            <td>OnDemand</td>
            <td>Logistics operations</td>
          </tr>
          <tr>
            <td>COMITA</td>
            <td>Commerce</td>
          </tr>
        </tbody>
      </table>
    </PageContainer>
  );
}
