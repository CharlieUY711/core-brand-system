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
        lede="Brand defines how CORE looks. Corporate Architecture defines how the ecosystem is organized and who does what — the two are never mixed."
      />

      <div className={styles.diagram}>
        <CorporateModel />
      </div>

      <div className={styles.rule}>
        <p>
          CORE provides the system. OnDemand operates logistics. COMITA develops
          commerce. ODDY articulates the corporate ecosystem.
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
            <td>ODDY</td>
            <td>Corporate ecosystem / brand</td>
          </tr>
          <tr>
            <td>CORE</td>
            <td>Technology platform / system</td>
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
