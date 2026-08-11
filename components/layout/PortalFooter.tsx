import Link from "next/link";
import CoreSymbol from "@/components/brand/CoreSymbol";
import styles from "./PortalFooter.module.css";

export default function PortalFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.brand}>
          <CoreSymbol size={18} className={styles.icon} />
          <span className={styles.text}>CORE — Brand &amp; System</span>
        </div>
        <p className={styles.legal}>
          © {year} CORE / ODDY. All rights reserved.
        </p>
      </div>
      <nav className={styles.links} aria-label="Footer">
        <Link href="/brand/guidelines">Brand Guidelines</Link>
        <Link href="/architecture">Corporate Architecture</Link>
        <Link href="/resources">Resources</Link>
      </nav>
    </footer>
  );
}
