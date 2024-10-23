// src/app/layout.tsx

import localFont from "next/font/local";
import "./globals.css";
import { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'NasPad Studio Digital',
    description: 'Creativity Starts With You',
    openGraph: {
      title: 'NasPad Studio Digital',
      description: 'Creativity Starts With You',
      url: 'https://naspadstudio.id/',
      siteName: 'NasPad Studio Digital',
      images: [
        {
          url: '/og.png',
          width: 1200,
          height: 630,
          alt: 'NasPad Studio Digital Contact Page',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'NasPad Studio Digital',
      description: 'Creativity Starts With You',
      images: ['/og.png'],
      creator: '@MzMzNasiPadang',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/favicon.png',
      shortcut: '/favicon.png',
      apple: '/apple-touch-icon.png',
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {children}
        <Analytics />
      </body>
    </html>
  );
}