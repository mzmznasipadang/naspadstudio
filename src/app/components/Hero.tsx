// src/components/Hero.js
import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="w-full py-8 px-4">
            <div className="max-w-[1238px] mx-auto relative h-[349px]">
                <h1 className="absolute left-0 top-[30px] text-[71px] font-['SF Pro']">
                    <span className="text-white">Hi! I&apos;m </span>
                    <span className="text-[#1b98e0] font-bold">Vic!</span>
                </h1>

                <p className="w-[730px] absolute left-0 top-[159px] text-white text-[23px] font-['SF Pro']">
                    I am a designer and an enterprise resource planning developer (with a side kick for aviation photography)
                </p>

                <div className="absolute left-0 top-[271px] w-[180px] h-[60px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#eceb98] via-[#7986fb] to-[#eceb98] rounded-[15px] animate-pulse-fast opacity-75"></div>
                    <button className="group relative w-full h-full rounded-[15px] p-[2px] bg-gradient-to-r from-[#eceb98] via-[#7986fb] to-[#eceb98] background-animate overflow-hidden transition-all duration-300 hover:scale-105">
                        <span className="absolute inset-0 bg-gradient-to-r from-[#eceb98] via-[#7986fb] to-[#eceb98] opacity-75 animate-gradient-xy"></span>
                        <span className="absolute inset-0 flex items-center justify-center text-[#ffffff] text-2xl font-['SF Pro'] font-bold z-10">
                            Hire Me!
                        </span>
                        <span className="absolute inset-0 bg-[#101111] rounded-[13px] opacity-50 transition-all duration-300 group-hover:opacity-0"></span>
                    </button>
                </div>

                <div className="w-[427px] h-[333px] absolute right-0 top-0">
                    <div className="absolute inset-0 bg-[#1b98e0] rounded-[30px] transform translate-x-[17px] -translate-y-[16px]"></div>
                    <Image
                        src="/hero.png" // Replace with your actual image path
                        alt="Vic's photo"
                        width={427}
                        height={333}
                        className="absolute inset-0 rounded-[20px] object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;