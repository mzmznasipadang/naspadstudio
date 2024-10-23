// src/components/FeaturedWorks.tsx
import React from 'react';
import Image from 'next/image';

const featuredWorks = [
  {
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/SS Lab.jpg",
  },
  {
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/SS Lab.jpg",
  },
  {
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/Bix Logo.png",
  },
];

const FeaturedWorks: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 bg-[#101111]">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-3xl font-medium text-white mb-12 animate-fade-in">
          Some of my <span className="text-[#1b98e0]">featured works</span> ✨
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredWorks.map((work, index) => (
            <div
              key={index}
              className="relative w-full aspect-[400/600] animate-fade-in-up group"
              style={{ 
                animationDelay: `${index * 200}ms`,
                opacity: 0 // Initial opacity for animation
              }}
            >
              {/* Gradient Border with Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#eceb98] via-[#7986fb] to-[#eceb98] p-[2px] rounded-[20px] transition-transform duration-300 ease-in-out group-hover:scale-[1.02] group-hover:shadow-lg animate-gradient-xy">
                {/* Background */}
                <div className="absolute inset-0 bg-[#2d2f31] rounded-[19px]" />
                
                <div className="relative h-full p-6 flex flex-col">
                  {/* Image Container with Hover Effect */}
                  <div className="relative w-full h-[200px] mb-6">
                    <div className="absolute inset-0 bg-[#fbd786] rounded-[20px] border-2 border-[#204782] transition-colors duration-300 group-hover:border-[#1b98e0]">
                      <div className="relative w-full h-full overflow-hidden rounded-[18px] transition-transform duration-300 group-hover:scale-105">
                        <Image
                          src={work.imageUrl}
                          alt={work.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-white text-[40px] font-['SF Pro'] mb-4 transition-colors duration-300 group-hover:text-[#1b98e0]">
                      {work.title}
                    </h3>
                    <p className="text-white text-lg font-normal font-['SF Pro'] mb-8">
                      {work.description}
                    </p>
                    
                    {/* Button */}
                    <div className="mt-auto flex justify-center">
                      <button className="w-full bg-[#282828] text-white text-base font-['SF Pro'] py-3 px-6 rounded-[20px] border-2 border-[#1b98e0] 
                        transition-all duration-300 
                        hover:bg-[#1b98e0]/10 hover:scale-105 
                        active:scale-95">
                        Learn More
                      </button>
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
};

export default FeaturedWorks;