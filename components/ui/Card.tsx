import { ReactNode } from "react";
import Link from "next/link";
import styles from "./Card.module.css";

type CardProps = {
  children: ReactNode;
  href?: string;
  className?: string;
};

export default function Card({ children, href, className }: CardProps) {
  const cls = [styles.card, className].filter(Boolean).join(" ");
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return <div className={cls}>{children}</div>;
}
