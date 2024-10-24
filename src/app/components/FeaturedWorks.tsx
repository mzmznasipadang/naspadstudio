// src/components/FeaturedWorks.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client, urlFor } from '/lib/sanity';

async function getWorks() {
  return client.fetch<Work[]>(`
    *[_type == "work" && published == true && featured == true] | order(date desc)[0...3] {
      _id,
      title,
      description,
      slug,
      date,
      image,
      url,
      repository,
      published,
      featured  // Add this
    }
  `);
}

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
  published: boolean;
  featured: boolean;
};


export default async function FeaturedWorks() {
  const works = await getWorks();

  const getImageUrl = (image: Work['image']) => {
    if (!image?.asset?._ref) {
      return '/hero.png';
    }
    return urlFor(image).url();
  };

  if (!works || works.length === 0) {
    return (
      <section className="w-full py-16 px-4 bg-[#101111]">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl font-medium text-white mb-12 animate-fade-in">
            Some of my <span className="text-[#1b98e0]">featured works</span> ✨
          </h2>
          <p className="text-white">No featured works yet.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-16 px-4 bg-[#101111]">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-3xl font-medium text-white mb-12 animate-fade-in">
          Some of my <span className="text-[#1b98e0]">featured works</span> ✨
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <div
              key={work._id}
              className="relative w-full aspect-[400/600] animate-fade-in-up group"
              style={{
                animationDelay: `${index * 200}ms`,
                opacity: 0
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#eceb98] via-[#7986fb] to-[#eceb98] p-[2px] rounded-[20px] transition-transform duration-300 ease-in-out group-hover:scale-[1.02] group-hover:shadow-lg animate-gradient-xy">
                <div className="absolute inset-0 bg-[#2d2f31] rounded-[19px]" />

                <div className="relative h-full p-6 flex flex-col">
                  <div className="relative w-full h-[200px] mb-6">
                    <div className="absolute inset-0 bg-[#fbd786] rounded-[20px] border-2 border-[#204782] transition-colors duration-300 group-hover:border-[#1b98e0]">
                      <div className="relative w-full h-full overflow-hidden rounded-[18px] transition-transform duration-300 group-hover:scale-105">
                        <Image
                          src={getImageUrl(work.image)}
                          alt={work.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col flex-grow">
                    <h3 className="text-white text-[26px] font-['SF Pro'] mb-4 transition-colors duration-300 group-hover:text-[#1b98e0]">
                      {work.title}
                    </h3>
                    <p className="text-white text-m font-normal font-['SF Pro'] mb-8">
                      {work.description}
                    </p>

                    <div className="mt-auto flex flex-col space-y-3">
                      {work.url && (
                        <Link
                          href={work.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-[#1b98e0] text-white text-base font-['SF Pro'] py-3 px-6 rounded-[20px] text-center
                            transition-all duration-300 
                            hover:bg-[#204782] hover:scale-105 
                            active:scale-95"
                        >
                          Visit Project
                        </Link>
                      )}

                      {work.repository && (
                        <Link
                          href={`https://github.com/${work.repository}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-[#282828] text-white text-base font-['SF Pro'] py-3 px-6 rounded-[20px] border-2 border-[#1b98e0] text-center
                            transition-all duration-300 
                            hover:bg-[#1b98e0]/10 hover:scale-105 
                            active:scale-95"
                        >
                          View Source
                        </Link>
                      )}

                      <Link
                        href={`/works/${work.slug.current}`}
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}