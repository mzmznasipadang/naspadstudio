// src/app/contents/works/[slug]/page.tsx
import { client, urlFor } from '/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import type { SanityAsset } from '@sanity/image-url/lib/types/types';
import Header from './Header';
import Footer from './Footer';

type SanityImage = {
    _type: 'image';
    asset: SanityAsset;
    alt?: string;
};

type PortableTextBlock = {
    _type: 'block';
    _key: string;
    children: Array<{
        _type: 'span';
        _key: string;
        text: string;
        marks?: string[];
    }>;
    markDefs?: Array<{
        _key: string;
        _type: 'link';
        href: string;
    }>;
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
};

type ImageBlock = {
    _type: 'image';
    _key: string;
    asset: {
        _ref: string;
        _type: 'reference';
    };
    alt?: string;
};

type Work = {
    _id: string;
    title: string;
    description: string;
    slug: { current: string };
    date: string;
    image: {
        _type: 'image';
        asset: {
            _ref: string;
            _type: 'reference';
        };
    } | null;
    url?: string;
    repository?: string;
    content?: Array<PortableTextBlock | ImageBlock>;
};

async function getWork(slug: string) {
    return client.fetch<Work>(`
      *[_type == "work" && slug.current == $slug][0] {
        _id,
        title,
        description,
        slug,
        date,
        image,
        url,
        repository,
        content,
        published
      }
    `, { slug });
}

export default async function WorkPage({ params }: { params: { slug: string } }) {
    const work = await getWork(params.slug);

    if (!work) {
        notFound();
    }

    const getImageUrl = (image: Work['image']) => {
        if (!image?.asset?._ref) {
            return '/hero.png';
        }
        return urlFor(image).url();
    };

    const components: PortableTextComponents = {
        types: {
            image: ({ value }: { value: SanityImage }) => (
                <div className="relative w-full h-[400px] my-8">
                    <Image
                        src={urlFor(value).url()}
                        alt={value.alt || ' '}
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>
            ),
        },
        marks: {
            link: ({ value, children }: {
                value?: { href?: string };
                children: React.ReactNode
            }) => {
                return (
                    <a
                        href={value?.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1b98e0] hover:underline"
                    >
                        {children}
                    </a>
                )
            }
        }
    };

    return (
        <>
        <Header />
        <article className="min-h-screen bg-[#101111] py-8 px-4 animate-fade-in">
            <div className="max-w-4xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-white mb-6">
                        {work.title}
                    </h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        {work.description}
                    </p>
                </div>

                {/* Project Links */}
                <div className="flex justify-center gap-8 mb-16">
                    {work.repository && (
                        <Link
                            href={`https://github.com/${work.repository}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-xl hover:text-[#1b98e0] transition-colors"
                        >
                            Github →
                        </Link>
                    )}
                    {work.url && (
                        <Link
                            href={work.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-xl hover:text-[#1b98e0] transition-colors"
                        >
                            Examples →
                        </Link>
                    )}
                </div>

                {/* Project Image */}
                {work.image && (
                    <div className="relative w-full h-[480px] mb-16 rounded-xl overflow-hidden">
                        <Image
                            src={getImageUrl(work.image)}
                            alt={work.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}

                {/* Divider */}
                <hr className="border-gray-800 mb-16" />

                {/* Project Content */}
                <div className="prose prose-invert prose-lg max-w-none">
                    {work.content && (
                        <PortableText
                            value={work.content}
                            components={components}  // Use the components defined at the top
                        />
                    )}
                </div>
            </div>
        </article>
        <Footer />
    </>
    );
}

export async function generateStaticParams() {
    const works = await client.fetch<Work[]>(`
      *[_type == "work" && published == true] {
        slug {
          current
        }
      }
    `);

    return works.map((work) => ({
        slug: work.slug.current,
    }));
}