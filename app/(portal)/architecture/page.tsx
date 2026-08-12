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
        lede="Brand defines how CORE looks. Corporate Architecture defines how the ecosystem is organized and who does what — the two are never mixed. Charlie defines the vision; CORE is the Business Operating System that orchestrates and executes it; ODDY (with its subsidiary OnDemand), COMITA and FACILIA are the entities that run the business."
      />

      <div className={styles.diagram}>
        <CorporateModel />
      </div>

      <div className={styles.rule}>
        <p>
          Charlie defines. CORE orchestrates and executes. ODDY operates
          logistics in the domestic territory and is the parent of OnDemand,
          which operates free-trade-zone and international logistics. COMITA
          trades goods; FACILIA delivers services — never the other&apos;s
          function. ODDY is never a parent of CORE.
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
            <td>Logistics brain and territory / last-mile operator — parent of OnDemand, not of CORE</td>
          </tr>
          <tr>
            <td>OnDemand</td>
            <td>ODDY&apos;s subsidiary — free-trade-zone and international logistics</td>
          </tr>
          <tr>
            <td>COMITA</td>
            <td>Commerce — goods only ("cuenta y orden")</td>
          </tr>
          <tr>
            <td>FACILIA</td>
            <td>Facility services — cleaning, maintenance, operational continuity; services only</td>
          </tr>
        </tbody>
      </table>
    </PageContainer>
  );
}
