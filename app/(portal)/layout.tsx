import Sidebar from "@/components/layout/Sidebar";
import PortalFooter from "@/components/layout/PortalFooter";
import PortalBreadcrumb from "@/components/layout/PortalBreadcrumb";
import PortalPageMeta from "@/components/layout/PortalPageMeta";
import SkipLink from "@/components/layout/SkipLink";
import styles from "./portal.module.css";

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.shell}>
      <SkipLink />
      <PortalPageMeta />
      <Sidebar />
      <main id="main-content" className={styles.main}>
        <PortalBreadcrumb />
        {children}
        <PortalFooter />
      </main>
    </div>
  );
}
