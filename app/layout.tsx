import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://estatevalueadvisors.com"),
  title: {
    default: "Estate Value Advisors | Estate Jewelry Evaluations in St. Louis",
    template: "%s | Estate Value Advisors",
  },
  description:
    "Trusted estate jewelry, watch, gold, and heirloom evaluations in St. Louis. Guidance for families, executors, attorneys, and inherited valuables.",
  keywords: [
    "estate jewelry st louis",
    "estate jewelry evaluation",
    "probate jewelry",
    "inherited jewelry",
    "rolex buyer st louis",
    "estate gold buyer",
  ],
  openGraph: {
    title: "Estate Value Advisors",
    description:
      "Trusted estate jewelry, watch, gold, and heirloom evaluations in St. Louis.",
    url: "https://estatevalueadvisors.com",
    siteName: "Estate Value Advisors",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
