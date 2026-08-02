import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "TEDx Geethanjali College of Engineering and Technology",
  description:
    "Experience innovative ideas and inspiring talks at TEDXGeethanjaliCET - Where ideas worth spreading come to life.",
  keywords:
    "TEDx, Geethanjali College, Engineering, Technology, Innovation, Ideas",
  openGraph: {
    title: "TEDXGeethanjaliCET - Ideas Worth Spreading",
    description:
      "Experience innovative ideas and inspiring talks at TEDx Geethanjali College.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#EB0028" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
