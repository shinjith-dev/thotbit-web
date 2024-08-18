import Navbar from "@/components/navbar";
import "./globals.css";
import { inter, karla } from "@/lib/fonts";
import type { Viewport, Metadata } from "next";
import { UserStoreProvider } from "@/providers/user-provider";

export const viewport: Viewport = {
  width: "device-width",

  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://thotbit.shinjith.dev"),
  openGraph: {
    siteName: "Thotbit",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  // alternates: {
  //   types: {
  //     "application/rss+xml": "https://dminhvu.com/rss.xml"
  //   }
  // },
  applicationName: "Thotbit",
  appleWebApp: {
    title: "Thotbit",
    statusBarStyle: "default",
    capable: true,
  },
  // verification: {
  //   google: "YOUR_DATA",
  //   yandex: ["YOUR_DATA"],
  //   other: {
  //     "msvalidate.01": ["YOUR_DATA"],
  //     "facebook-domain-verification": ["YOUR_DATA"]
  //   }
  // },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    // apple: [
    //   {
    //     url: "/apple-icon-57x57.png",
    //     sizes: "57x57",
    //     type: "image/png"
    //   },
    //   {
    //     url: "/apple-icon-60x60.png",
    //     sizes: "60x60",
    //     type: "image/png"
    //   }
    //   // add apple-icon-72x72.png, apple-icon-76x76.png, apple-icon-114x114.png, apple-icon-120x120.png, apple-icon-144x144.png, apple-icon-152x152.png, apple-icon-180x180.png
    // ]
  },
};

export const runtime = "edge";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`min-h-screen w-screen bg-background font-sans text-base text-fg antialiased ${inter.variable} ${karla.variable}`}
      >
        <UserStoreProvider>
          <Navbar />
          <main className="container h-full max-h-screen max-w-screen-lg overflow-y-auto">
            {children}
          </main>
        </UserStoreProvider>
      </body>
    </html>
  );
}
