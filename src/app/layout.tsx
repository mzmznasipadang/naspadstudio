import localFont from "next/font/local";
import "./globals.css";
import { Metadata } from "next";
// import { Analytics } from '@vercel/analytics/react';
// import { SpeedInsights } from '@vercel/speed-insights/next'


export const metadata: Metadata = {
  title: {
    default: "Naspad Studio Digital",
    template: "%s | naspadstudio.id",
  },
  description: "Founder of NasPad Studio",
  openGraph: {
    title: "Naspad Studio Digital",
    description:
      "Founder of NasPad Studio",
    url: "https://naspadstudio.id",
    siteName: "naspadstudio.id",
    images: [
      {
        url: "https://raw.githubusercontent.com/mzmznasipadang/vicsporto/main/public/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Naspad Studio Digital",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* <SpeedInsights /> */}
      </body>
    </html>
  );
}
