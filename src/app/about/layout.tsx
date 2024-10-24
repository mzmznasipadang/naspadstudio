// src/app/contact/layout.tsx
import type { Metadata } from 'next'

export const  metadata: Metadata = {
    title: 'About Us | NasPad Studio Digital',
    description: 'Learn more about NasPad Studio Digital and our journey in design and development.',
    openGraph: {
      title: 'Contact Us | NasPad Studio Digital',
      description: 'Please hire me, I need money.',
      url: 'https://naspadstudio.id/contact',
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
      title: 'Contact Us | NasPad Studio Digital',
      description: 'Please hire me, I need money.',
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

  export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return children;
  }