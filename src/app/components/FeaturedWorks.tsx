// src/components/FeaturedWorks.js
import React from 'react';
import Image from 'next/image';

const featuredWorks = [
  {
    title: "IS Laboratory Website",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/hero.png",
    bgColor: "bg-[#fbd786]",
    isReversed: false
  },
  {
    title: "Binus Xplore (BiX)",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/hero.png",
    bgColor: "bg-[#004aad]",
    isReversed: true
  }
];

const FeaturedWorks = () => {
  return (
    <section className="w-full py-16 px-4 bg-[#101111]">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-4xl font-normal font-['SF Pro'] text-white mb-12">
          Some of my <span className="text-[#1b98e0]">featured works</span>
        </h2>
        
        {featuredWorks.map((work, index) => (
          <div key={index} className={`w-full h-[600px] bg-[#2d2f31] rounded-[20px] border-2 border-[#a535f0] mb-16 relative overflow-hidden ${work.isReversed ? 'flex flex-row-reverse' : 'flex'}`}>
            <div className="w-1/2 p-16 flex flex-col justify-center">
              <h3 className="text-white text-5xl font-normal font-['SF Pro'] mb-6">{work.title}</h3>
              <p className="text-white text-3xl font-normal font-['SF Pro'] mb-8">{work.description}</p>
              <button className="bg-[#282828] text-white text-base font-['SF Pro'] py-3 px-8 rounded-[20px] border-2 border-[#1b98e0] hover:bg-[#1b98e0] transition-colors duration-300 inline-block w-max">
                Learn More
              </button>
            </div>
            <div className={`w-1/2 relative ${work.bgColor} rounded-[20px] shadow border-2 border-[#204782] m-6`}>
              <Image
                src={work.imageUrl}
                alt={work.title}
                layout="fill"
                objectFit="cover"
                className="rounded-[20px]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWorks;