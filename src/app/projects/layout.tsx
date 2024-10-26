// src/app/projects/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | NasPad Studio Digital',
  description: 'Explore our portfolio of creative projects, from web development to aviation photography. See how we turn ideas into reality.',
  openGraph: {
    title: 'Projects | NasPad Studio Digital',
    description: 'Explore our portfolio of creative projects, from web development to aviation photography. See how we turn ideas into reality.',
    url: 'https://naspadstudio.id/projects',
    siteName: 'NasPad Studio Digital',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'NasPad Studio Digital Projects Page',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | NasPad Studio Digital',
    description: 'Explore our portfolio of creative projects, from web development to aviation photography. See how we turn ideas into reality.',
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
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}