import styles from "./Badge.module.css";

type BadgeProps = {
  live?: boolean;
  children: React.ReactNode;
};

/** Status indicator used for "Live" vs "Coming next" module states. */
export default function Badge({ live = false, children }: BadgeProps) {
  return (
    <span className={[styles.badge, live ? styles.live : ""].join(" ")}>
      <span className={styles.dot} aria-hidden="true" />
      {children}
    </span>
  );
}
