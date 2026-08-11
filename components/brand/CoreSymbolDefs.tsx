/**
 * CORE SYMBOL MASTER — D3-C / N0-R0. Frozen geometry.
 *
 * This is the single source of the CORE symbol's geometry for the entire
 * application. It renders once (mounted in the root layout) as a hidden
 * <svg><defs>. Every other CoreSymbol instance references it via <use>,
 * so the geometry exists exactly once, in exactly one place.
 *
 * Do not alter radii, offsets, angle or the nucleus/orbit relationship.
 * Do not add a D4 variant here.
 */
export default function CoreSymbolDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute", overflow: "hidden" }} aria-hidden="true">
      <defs>
        <mask id="core-mask-nucleus" maskUnits="userSpaceOnUse" x="0" y="0" width="200" height="200">
          <rect width="200" height="200" fill="black" />
          <ellipse cx="100" cy="100" rx="86" ry="52" fill="white" transform="rotate(-20 100 100)" />
          <ellipse cx="106" cy="96" rx="64" ry="34" fill="black" transform="rotate(-20 106 96)" />
        </mask>
        <mask id="core-mask-orbit" maskUnits="userSpaceOnUse" x="0" y="0" width="200" height="200">
          <rect width="200" height="200" fill="black" />
          <ellipse cx="100" cy="100" rx="50" ry="27" fill="white" transform="rotate(-20 100 100)" />
          <ellipse cx="102" cy="99" rx="44" ry="22" fill="black" transform="rotate(-20 102 99)" />
        </mask>
        <symbol id="core-symbol-master" viewBox="0 0 200 200">
          <rect width="200" height="200" fill="currentColor" mask="url(#core-mask-nucleus)" />
          <rect width="200" height="200" fill="currentColor" mask="url(#core-mask-orbit)" />
        </symbol>
      </defs>
    </svg>
  );
}
