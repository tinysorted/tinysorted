import type {
  Metadata,
  Viewport,
} from "next";

import Script from "next/script";

import { Geist } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  websiteJsonLd,
  organizationJsonLd,
} from "@/lib/jsonld";

const geist = Geist({
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://tinysorted.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7F6F3",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  applicationName: "Tinysorted",

  title: {
    default:
      "Tinysorted | Small Space Living & Home Organization",
    template: "%s | Tinysorted",
  },

  description:
    "Practical ideas for decluttering, organizing, and creating a calm, beautiful home. Explore small-space living, kitchen organization, minimalist habits, and storage inspiration.",

  keywords: [
    "home organization",
    "decluttering",
    "small space living",
    "minimalist living",
    "storage ideas",
    "kitchen organization",
    "organized home",
    "tiny apartment",
    "home inspiration",
  ],

  authors: [
    {
      name: "Tinysorted",
    },
  ],

  creator: "Tinysorted",

  publisher: "Tinysorted",

  category: "Home Organization",

  referrer: "origin-when-cross-origin",

  manifest: "/manifest.webmanifest",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],

    shortcut: "/favicon.ico",

    apple: "/apple-touch-icon.png",
  },

  appleWebApp: {
    capable: true,
    title: "Tinysorted",
    statusBarStyle: "default",
  },

  openGraph: {
    type: "website",

    locale: "en_US",

    url: siteUrl,

    siteName: "Tinysorted",

    title:
      "Tinysorted | Small Space Living & Home Organization",

    description:
      "Practical ideas for decluttering, organizing, and creating a calm, beautiful home.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tinysorted",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Tinysorted | Small Space Living & Home Organization",

    description:
      "Practical ideas for decluttering, organizing, and creating a calm, beautiful home.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  other: {
    "msapplication-TileColor":
      "#F7F6F3",
  },

  // Nanti isi setelah Google Search Console aktif
  // verification: {
  //   google: "xxxxxxxxxxxxxxxxxxxx",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`
          ${geist.className}
          bg-[#F7F6F3]
          text-neutral-900
          antialiased
        `}
      >
        <Script
          id="website-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              websiteJsonLd()
            ),
          }}
        />

        <Script
          id="organization-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              organizationJsonLd()
            ),
          }}
        />

        <div className="min-h-screen flex flex-col">
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}