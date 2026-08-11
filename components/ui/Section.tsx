import { ReactNode } from "react";
import styles from "./Section.module.css";

type SectionProps = {
  eyebrow: string;
  title: string;
  lede?: ReactNode;
  children?: ReactNode;
};

/** Standard page header used at the top of every module page: eyebrow, title, lede. */
export default function Section({ eyebrow, title, lede, children }: SectionProps) {
  return (
    <header className={styles.header}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h1 className={styles.title}>{title}</h1>
      {lede && <p className={styles.lede}>{lede}</p>}
      {children}
    </header>
  );
}
