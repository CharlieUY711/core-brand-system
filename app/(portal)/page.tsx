import CoreSymbol from "@/components/brand/CoreSymbol";
import CorporateModel from "@/components/architecture/CorporateModel";
import NavCards from "@/components/layout/NavCards";
import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <CoreSymbol size={120} className={styles.symbol} title="CORE symbol — D3-C" />
        <span className={styles.eyebrow}>CORE Brand &amp; System · Portal v1.0</span>
        <h1 className={styles.h1}>CORE</h1>
        <div className={styles.sub}>Brand &amp; System</div>
        <p className={styles.lede}>
          The identity, architecture and visual system of <strong>CORE</strong> — the
          nucleus that connects and orchestrates the ecosystem.
        </p>
      </section>

      <div className={styles.body}>
        <NavCards />

        <section className={styles.model}>
          <span className={styles.modelEyebrow}>Corporate model</span>
          <h2 className={styles.modelTitle}>One system. Clear responsibilities.</h2>
          <p className={styles.modelLede}>
            CORE provides the system. OnDemand operates logistics. COMITA develops
            commerce. ODDY articulates the corporate ecosystem.
          </p>
          <CorporateModel />
        </section>
      </div>
    </>
  );
}
