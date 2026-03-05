import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenClaw AI Agents Nashville & Tennessee | ProxyClaw Nashville",
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  metadataBase: new URL(siteConfig.url),
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.name,
    description:
      "OpenClaw AI agents for Nashville and Tennessee teams. On-site setup and managed workflows for revenue, marketing, support, and operations.",
    type: "website",
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  verification: {
    google: "xLkvOZ4V6f-yA2GLOB8XGWekCj_yd0hFhTETZYKZTk0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
