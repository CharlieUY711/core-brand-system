type CoreSymbolProps = {
  size?: number;
  className?: string;
  /** Accessible name. Omit (or pass an empty string) for decorative,
   * repeated instances — the symbol is then hidden from assistive tech
   * instead of exposing an empty accessible name. */
  title?: string;
};

/**
 * Renders the CORE symbol (D3-C / N0-R0) by referencing the single master
 * geometry defined in CoreSymbolDefs. Never draws the mark independently —
 * every page and component must use this component instead of hand-rolling
 * the shape again.
 */
export default function CoreSymbol({ size = 32, className, title = "CORE" }: CoreSymbolProps) {
  const decorative = !title;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : title}
      aria-hidden={decorative ? "true" : undefined}
    >
      <use href="#core-symbol-master" width="200" height="200" />
    </svg>
  );
}
