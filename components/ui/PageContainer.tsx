import { ReactNode } from "react";
import styles from "./PageContainer.module.css";

export default function PageContainer({ children, wide = false }: { children: ReactNode; wide?: boolean }) {
  return <div className={`${styles.page} ${wide ? styles.wide : ""}`}>{children}</div>;
}
