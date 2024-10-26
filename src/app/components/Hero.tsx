// src/components/Hero.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="w-full py-8 px-4">
            <div className="max-w-[1000px] mx-auto animate-fade-in">
                {/* Main Container */}
                <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8 lg:gap-12 animate-fade-in">
                    {/* Text Content Container */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left animate-fade-in">
                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-[71px] font-['SF Pro'] mb-6 lg:mb-8">
                            <span className="text-white">Hi! I&apos;m </span>
                            <span className="text-[#1b98e0] font-bold">Vic!</span>
                        </h1>

                        {/* Description */}
                        <p className="w-full md:w-[500px] text-white text-lg md:text-xl mb-8 lg:mb-12">
                            I am a designer and an enterprise resource planning developer (with a side kick for aviation photography)
                        </p>

                        {/* Hire Me Button */}
                        <div className="w-[180px] h-[60px] relative animate-fade-in">
                            {/* Button Background Animation */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#eceb98] via-[#7986fb] to-[#eceb98] rounded-[15px] animate-pulse-fast opacity-75"></div>

                            {/* Button */}
                            <Link href="/contact">
                                <button className="group relative w-full h-full rounded-[15px] p-[2px] bg-gradient-to-r from-[#eceb98] via-[#7986fb] to-[#eceb98] background-animate overflow-hidden transition-all duration-300 hover:scale-105">
                                    <span className="absolute inset-0 bg-gradient-to-r from-[#eceb98] via-[#7986fb] to-[#eceb98] opacity-75 animate-gradient-xy"></span>
                                    <span className="absolute inset-0 flex items-center justify-center text-[#ffffff] text-xl md:text-2xl font-['SF Pro'] font-bold z-10">
                                        Hire Me!
                                    </span>
                                    <span className="absolute inset-0 bg-[#101111] rounded-[13px] opacity-50 transition-all duration-300 group-hover:opacity-0"></span>
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Image Container */}
                    <div className="w-full md:w-[427px] relative">
                        <div className="aspect-[427/333] relative">
                            {/* Blue Background */}
                            <div className="absolute inset-0 bg-[#1b98e0] rounded-[30px] transform translate-x-[17px] -translate-y-[16px]"></div>

                            {/* Image */}
                            <div className="relative h-full">
                                <Image
                                    src="/hero.png"
                                    alt="Vic's photo"
                                    fill
                                    className="rounded-[20px] object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 427px"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;