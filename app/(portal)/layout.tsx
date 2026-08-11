import Sidebar from "@/components/layout/Sidebar";
import PortalFooter from "@/components/layout/PortalFooter";
import styles from "./portal.module.css";

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.shell}>
      <Sidebar />
      <main className={styles.main}>
        {children}
        <PortalFooter />
      </main>
    </div>
  );
}
