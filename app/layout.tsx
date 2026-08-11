import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import CoreSymbolDefs from "@/components/brand/CoreSymbolDefs";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

const SITE_NAME = "CORE — Brand & System";
const SITE_DESCRIPTION = "The identity, architecture and visual system of CORE.";

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: "%s · CORE",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    type: "website",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable}`}>
      <body>
        {/* CORE symbol geometry (D3-C / N0-R0) is defined once here and
            referenced everywhere via <CoreSymbol />. */}
        <CoreSymbolDefs />
        {children}
      </body>
    </html>
  );
}
