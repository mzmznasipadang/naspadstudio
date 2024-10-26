// src/app/projects/page.tsx
import React from 'react';
import { client, urlFor } from '/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { notFound } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

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
    featured: boolean;
    published: boolean;
};

// Define PortableText components configuration
const components: PortableTextComponents = {
    types: {
        image: ({ value }) => (
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
        link: ({ children }) => (
            <span className="text-[#1b98e0] cursor-pointer">
                {children}
            </span>
        ),
    },
    block: {
        normal: ({ children }) => <p className="text-white mb-4">{children}</p>,
        h1: ({ children }) => <h3 className="text-2xl font-bold my-4 text-white">{children}</h3>,
        h2: ({ children }) => <h3 className="text-xl font-bold my-3 text-white">{children}</h3>,
        h3: ({ children }) => <h3 className="text-lg font-bold my-2 text-white">{children}</h3>,
        blockquote: ({ children }) => (
            <div className="border-l-4 border-[#1b98e0] pl-4 my-4 italic text-white">
                {children}
            </div>
        ),
    },
};

// Project Card Component
const ProjectCard = ({ title, description, slug, date, image, url, content }: Work) => {
    const getImageUrl = (image: Work['image']) => {
        if (!image?.asset?._ref) {
            return '/api/placeholder/400/320';
        }
        return urlFor(image).url();
    };

    const contentPreview = content ? content.slice(0, 1) : null;

    return (
        <div className="bg-zinc-800 rounded-lg overflow-hidden transition-all hover:bg-zinc-700">
            {image && (
                <div className="relative h-48">
                    <Image
                        src={getImageUrl(image)}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                    <time className="text-sm text-zinc-400">
                        {new Date(date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                        })}
                    </time>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
                <p className="text-zinc-300 line-clamp-2">{description}</p>
                {contentPreview && (
                    <div className="mt-4 prose prose-invert prose-sm line-clamp-2">
                        <PortableText
                            value={contentPreview}
                            components={components}
                        />
                    </div>
                )}
                
                {/* Action Buttons */}
                <div className="mt-6 flex flex-col space-y-3">
                    {url && (
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-[#1b98e0] text-white text-base font-['SF Pro'] py-3 px-6 rounded-[20px] text-center
                                transition-all duration-300 
                                hover:bg-[#204782] hover:scale-105 
                                active:scale-95"
                        >
                            Visit Project
                        </a>
                    )}
                    <Link
                        href={`/contents/works/${slug.current}`}
                        className="w-full bg-[#282828] text-white text-base font-['SF Pro'] py-3 px-6 rounded-[20px] border-2 border-[#1b98e0] text-center
                            transition-all duration-300 
                            hover:bg-[#1b98e0]/10 hover:scale-105 
                            active:scale-95"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    );
};

// Featured Projects Section
const FeaturedProjects = ({ projects }: { projects: Work[] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {projects.map((project) => (
                <ProjectCard key={project._id} {...project} />
            ))}
        </div>
    );
};

// Regular Projects Grid
const ProjectsGrid = ({ projects }: { projects: Work[] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
                <ProjectCard key={project._id} {...project} />
            ))}
        </div>
    );
};

// Main Projects Page Component
export default async function ProjectsPage() {
    const works = await client.fetch<Work[]>(`
        *[_type == "work" && published == true] {
            _id,
            title,
            description,
            slug,
            date,
            image,
            url,
            repository,
            featured,
            published,
            content
        } | order(date desc)
    `);

    if (!works) {
        notFound();
    }

    const featuredProjects = works.filter(work => work.featured);
    const regularProjects = works.filter(work => !work.featured);

    return (
        <>
            <Header />
            <main className="min-h-screen bg-[#101111] text-white animate-fade-in">
                <div className="container mx-auto px-4 py-16">
                    <h1 className="text-5xl font-bold text-center mb-4">Projects</h1>
                    <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
                    Some of the unbelievable projects that I did, terus sisanya bullshit bla bla abcdefg, terus ga percayaan ini beneran projek gw kerjain? terus terus flexing dkk intinya, pls hire me buat menuhin page ini (smiley face)
                    </p>

                    {featuredProjects.length > 0 && (
                        <FeaturedProjects projects={featuredProjects} />
                    )}

                    <ProjectsGrid projects={regularProjects} />
                </div>
            </main>
            <Footer />
        </>
    );
}