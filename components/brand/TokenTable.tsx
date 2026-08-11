import { Token } from "@/lib/content/tokens";
import styles from "./TokenTable.module.css";

export default function TokenTable({ tokens }: { tokens: Token[] }) {
  return (
    <table className={styles.table}>
      <caption className={styles.caption}>CORE UI design tokens</caption>
      <thead>
        <tr>
          <th scope="col">Token</th>
          <th scope="col">Value</th>
          <th scope="col">Role</th>
        </tr>
      </thead>
      <tbody>
        {tokens.map((t) => (
          <tr key={t.name}>
            <td className={styles.name}>
              <span className={styles.swatch} style={{ background: t.value }} aria-hidden="true" />
              {t.name}
            </td>
            <td className={styles.value}>{t.value}</td>
            <td>{t.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
