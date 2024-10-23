// src/components/ProcessSection.js
import React from 'react';

const processSteps = [
    {
        number: '1',
        title: 'Step 1 : Ideate and Research',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        buttonText: 'See Study Case'
    },
    {
        number: '2',
        title: 'Step 2 : Design and Testing',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        buttonText: 'See Design Examples'
    },
    {
        number: '3',
        title: 'Step 3 : Prototype and Delivery',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        buttonText: 'See The Results'
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
                                <div className="relative h-full p-8 flex flex-col">
                                    {/* Number Circle with Hover Effect */}
                                    <div className="w-10 h-15 rounded-full border-2 border-white flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:border-[#1b98e0]">
                                        <span className="text-white text-l font-normal group-hover:text-[#1b98e0] transition-colors duration-300">
                                            {step.number}
                                        </span>
                                    </div>

                                    {/* Title and Description */}
                                    <div className="flex-grow">
                                        <h3 className="text-white text-xl font-normal mb-4 transition-colors duration-300 group-hover:text-[#1b98e0]">
                                            {step.title}
                                        </h3>
                                        <p className="text-white text-m font-normal mb-6">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Button with Hover Effect */}
                                    <div className="mt-auto">
                                        <button className="w-full bg-[#282828] text-white text-base font-normal py-3 px-6 rounded-[20px] border-2 border-[#1b98e0] 
                                            transition-all duration-300 
                                            hover:bg-[#1b98e0]/10 hover:scale-105 
                                            active:scale-95">
                                            {step.buttonText}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Animated Connection Lines */}
                    <div className="hidden lg:block absolute top-1/2 left-[33%] right-[67%] h-[2px] animate-connection-line">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"></div>
                    </div>
                    <div className="hidden lg:block absolute top-1/2 left-[67%] right-[33%] h-[2px] animate-connection-line">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;