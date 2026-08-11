import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CORE — Brand & System",
  description: "The identity, architecture and visual system of CORE.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
