// src/app/contents/[slug]/layout.tsx
import { client } from '/lib/sanity';
import type { Metadata } from 'next';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Initialize the image URL builder
const builder = imageUrlBuilder(client);
function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Define the props type
type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

// Type for Sanity Image
type SanityImage = {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

// Type for Work
type Work = {
  title: string;
  description: string;
  image: SanityImage | null;
  url?: string;
  repository?: string;
}

// Fetch work data
async function getWork(slug: string): Promise<Work | null> {
  return client.fetch(`
    *[_type == "work" && slug.current == $slug][0] {
      title,
      description,
      image,
      url,
      repository
    }
  `, { slug });
}

// Generate metadata
export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  // Get the work data
  const work = await getWork(params.slug);
  
  // If no work is found, return default metadata
  if (!work) {
    return {
      title: 'Project Not Found | NasPad Studio Digital',
      description: 'The requested project could not be found.',
    };
  }

  // Get the image URL if it exists
  const imageUrl = work.image ? urlFor(work.image).url() : '/og.png';

  return {
    title: `${work.title} | NasPad Studio Digital`,
    description: work.description,
    openGraph: {
      title: `${work.title} | NasPad Studio Digital`,
      description: work.description,
      url: `https://naspadstudio.id/contents/${params.slug}`,
      siteName: 'NasPad Studio Digital',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: work.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${work.title} | NasPad Studio Digital`,
      description: work.description,
      images: [imageUrl],
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
    authors: [{ name: 'Vic', url: 'https://naspadstudio.id' }],
    publisher: 'NasPad Studio Digital',
    keywords: [
      work.title,
      'project',
      'portfolio',
      'NasPad Studio Digital',
      'web development',
      'design',
      ...work.title.split(' '), // Add title words as keywords
    ],
  };
}

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}