import type { Metadata } from "next";
import GuidelinesContent from "./GuidelinesContent";

// Spanish is the default locale, so it is what crawlers and no-JS readers
// get; the switcher takes over after hydration, same as the rest of the
// portal.
export const metadata: Metadata = { title: "Brand Guidelines" };

export default function BrandGuidelinesPage() {
  return <GuidelinesContent />;
}
