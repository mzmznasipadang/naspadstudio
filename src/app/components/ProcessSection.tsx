// src/components/ProcessSection.js
import React from 'react';
import Link from 'next/link';

const processSteps = [
    {
        number: '1',
        title: 'Step 1 : Ideate and Research',
        description: 'Every great project starts with understanding your vision. We dive deep into research, brainstorm creative solutions, and map out the perfect strategy to bring your ideas to life.',
        buttonText: 'See Study Case',
        url: '/projects'
    },
    {
        number: '2',
        title: 'Step 2 : Design and Testing',
        description: 'Watch your ideas take shape as we craft pixel-perfect designs and robust solutions. We rigorously test every feature to ensure a seamless experience that exceeds expectations.',
        buttonText: 'See Design Examples',
        url: '/projects'
    },
    {
        number: '3',
        title: 'Step 3 : Prototype and Delivery',
        description: 'From concept to reality, we refine every detail and deliver a polished final product. Your success is our priority, and we ensure you are ready for launch and beyond.',
        buttonText: 'See The Results',
        url: '/projects'
    }
];

const ProcessSection: React.FC = () => {
    return (
        <section className="w-full py-16 px-4 bg-[#101111]">
            <div className="max-w-[1000px] mx-auto">
                <h2 className="text-3xl font-normal font-['SF Pro'] text-white mb-12 text-center md:text-left animate-fade-in">
                    What is it like to be behind the scene with{' '}
                    <span className="text-[#1b98e0] font-semibold">NasPad Studio Digital</span>?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
                    {processSteps.map((step, index) => (
                        <div
                            key={index}
                            className="relative w-full aspect-[400/400] animate-fade-in-up group"
                            style={{
                                animationDelay: `${index * 200}ms`,
                                opacity: 0 // Initial opacity for animation
                            }}
                        >
                            {/* Gradient Border with Hover Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#eceb98] via-[#7A87FB] to-[#eceb98] p-[2px] rounded-[20px] transition-transform duration-300 ease-in-out group-hover:scale-[1.02] group-hover:shadow-lg">
                                {/* Background */}
                                <div className="absolute inset-0 bg-[#2d2f31] rounded-[19px]" />

                                {/* Content */}
                                <div className="relative h-full p-6 flex flex-col justify-between">
                                    {/* Number Circle with Hover Effect */}
                                    <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:border-[#1b98e0]">
                                        <span className="text-white text-lg font-normal group-hover:text-[#1b98e0] transition-colors duration-300">
                                            {step.number}
                                        </span>
                                    </div>

                                    {/* Title and Description Container */}
                                    <div className="flex-1 mb-6">
                                        <h3 className="text-white text-xl font-normal mb-3 transition-colors duration-300 group-hover:text-[#1b98e0]">
                                            {step.title}
                                        </h3>
                                        <p className="text-white text-sm leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Button Container */}
                                    <div>
                                        <Link
                                            href={step.url}
                                            className="block w-full bg-[#282828] text-white text-sm font-normal py-2.5 px-6 rounded-[20px] border-2 border-[#1b98e0] 
                                                text-center transition-all duration-300 
                                                hover:bg-[#1b98e0]/10 hover:scale-105 
                                                active:scale-95"
                                        >
                                            {step.buttonText}
                                        </Link>
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

export default ProcessSection;