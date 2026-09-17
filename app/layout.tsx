import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
  variable: "--font-archivo",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://skycodes-portfolio.vercel.app";
const title = "Vaishnavi Kurmi — Cloud & DevOps Engineer";
const description =
  "Vaishnavi Kurmi (Skycodes) is a Cloud and DevOps engineer building AWS infrastructure, Kubernetes clusters and CI/CD pipelines — and teaching every step of it.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Vaishnavi Kurmi",
    "Skycodes",
    "Cloud Engineer",
    "DevOps",
    "AWS",
    "Kubernetes",
    "Terraform",
    "CI/CD",
  ],
  authors: [{ name: "Vaishnavi Kurmi" }],
  creator: "Vaishnavi Kurmi",
  openGraph: { title, description, url: siteUrl, siteName: "Skycodes", type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", apple: "/apple-touch-icon.png" },
};

export const viewport: Viewport = {
  themeColor: "#f1f1ef",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${mono.variable}`}>
      {/* `boot` hides the hero until <Boot /> swaps it for `ready`. */}
      <body className="boot">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
