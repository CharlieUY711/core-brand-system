import { ReactNode } from "react";
import styles from "./BrandSection.module.css";

type BrandSectionProps = {
  id: string;
  number: string;
  title: string;
  lede?: ReactNode;
  children: ReactNode;
};

/** Numbered section wrapper used for the 21 Brand Guidelines sections. */
export default function BrandSection({ id, number, title, lede, children }: BrandSectionProps) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-heading`}>
      <div className={styles.head}>
        <span className={styles.number}>{number}</span>
        <h2 id={`${id}-heading`} className={styles.title}>{title}</h2>
      </div>
      {lede && <p className={styles.lede}>{lede}</p>}
      {children}
    </section>
  );
}
