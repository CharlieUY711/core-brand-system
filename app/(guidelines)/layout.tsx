import Breadcrumb from "@/components/layout/Breadcrumb";
import GuidelinesToc from "@/components/brand/GuidelinesToc";
import styles from "./guidelines.module.css";

export default function GuidelinesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "CORE Brand & System", href: "/" },
          { label: "Brand Guidelines v1.0" },
        ]}
      />
      <div className={styles.shell}>
        <GuidelinesToc />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
