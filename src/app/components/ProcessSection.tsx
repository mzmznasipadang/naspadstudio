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

const ProcessSection = () => {
    return (
        <section className="w-full py-16 px-4 bg-[#101111]">
            <div className="max-w-[1240px] mx-auto">
                <h2 className="text-4xl font-normal font-['SF Pro'] text-white mb-12">
                    What is it like to be behind the scene with <span className="text-[#1b98e0] font-semibold">NasPad Studio Digital</span>?
                </h2>
                <div className="flex flex-col md:flex-row justify-between items-stretch gap-8">
                    {processSteps.map((step, index) => (
                        <div key={index} className="flex-1 bg-[#2d2f31] rounded-[20px] border-2 border-[#eceb98] p-6 flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center mb-4">
                                    <span className="text-white text-xl font-normal">{step.number}</span>
                                </div>
                                <h3 className="text-white text-xl font-normal mb-4">{step.title}</h3>
                                <p className="text-white text-xl font-normal mb-6">{step.description}</p>
                            </div>
                            <button className="bg-[#282828] text-white text-base font-normal py-3 px-6 rounded-[20px] border-2 border-[#1b98e0] hover:bg-[#1b98e0] transition-colors duration-300">
                                {step.buttonText}
                            </button>
                            {/* <button className="bg-gradient-to-r from-[#1B98E0] to-[#A535F0] rounded-[18px] text-white font-normal p-1">
                                <span className="flex w-full bg-gray-900 text-white rounded-[22px] p-2">
                                    Gradient border
                                </span>
                            </button> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;