import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";

const overpass = Overpass({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LN - NGL ",
  description: "LN - NGL ",
  metadataBase: new URL("https://ln-ngl.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ln-ngl.vercel.app",
    siteName: "LN - NGL ",
    images: [
      {
        url: "https://ln-ngl.vercel.app/banner.jpeg",
        width: 917,
        height: 725,
        alt: "LN - NGL ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ln_dev7",
    creator: "@ln_dev7",
    images: [
      {
        url: "https://ln-ngl.vercel.app/banner.jpeg",
        width: 917,
        height: 725,
        alt: "LN - NGL ",
      },
    ],
  },
  authors: [{ name: "Leonel NGOYA", url: "https://leonelngoya.com" }],
  keywords: "LN Dev, ngl link, responses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={overpass.className}>{children}</body>
    </html>
  );
}
