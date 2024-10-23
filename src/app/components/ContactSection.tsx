// src/components/ContactSection.js
import React from 'react';

const ContactSection = () => {
    return (
        <section className="w-full py-16 px-4 bg-[#0D0E11]">
            <div className="max-w-[1046px] mx-auto relative">
                <div className="mb-12">
                    <h2 className="text-white text-5xl font-bold mb-6">
                        Have idea about project? ✨
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="max-w-[468px] mb-8 md:mb-0">
                        <p className="text-white text-lg font-light mb-8 leading-8">
                            Do you have anything in mind or confused about how to turn a dream into reality? Well, give us a shot and let us help you make your <span className="text-[#6BE1FF]">dream come true</span>.
                        </p>
                        <a
                            href="mailto:info@naspadstudio.id"
                            className="inline-block px-8 py-3 bg-[#1b1b1b] rounded-full border border-[#6BE1FF] text-white text-lg hover:bg-[#6BE1FF] hover:text-black transition-all duration-300"
                        >
                            Send us a message
                        </a>
                    </div>

                    {/* Grid Background */}
                    <div className="w-[392px] h-[392px] relative hidden md:block">
                        {[0, 1, 2].map((index) => (
                            <div
                                key={`vertical-${index}`}
                                className="absolute border-l border-[#2A2A2E]"
                                style={{
                                    left: `${index * 120}px`,
                                    height: '100%',
                                    top: 0
                                }}
                            ></div>
                        ))}
                        {[0, 1].map((index) => (
                            <div
                                key={`horizontal-${index}`}
                                className="absolute border-t border-[#2A2A2E] w-full"
                                style={{
                                    top: `${150 + index * 120}px`
                                }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
