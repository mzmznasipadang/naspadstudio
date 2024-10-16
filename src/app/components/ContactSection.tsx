// src/components/ContactSection.js
import React from 'react';

const ContactSection = () => {
    return (
        <section className="w-full py-16 px-4 bg-[#101111]">
            <div className="max-w-[1046px] mx-auto relative">
                <div className="mb-12">
                    <h2 className="text-white text-4xl font-normal mb-4">
                        Have idea about project? ✨
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="max-w-[468px] mb-8 md:mb-0">
                        <p className="text-white text-base font-normal mb-9">
                            Do you have anything in mind or confused how to turn a dream into reality? Well give us a shot and let us help you to make your{' '}
                            <span className="text-[#1b98e0]">dream come true</span>.
                        </p>
                        <a
                            href="mailto:info@naspadstudio.id"
                            className="inline-block px-7 py-2.5 bg-[#1b1b1b] rounded-[72.09px] border border-[#1b98e0] text-white text-base hover:bg-[#1b98e0] transition-colors duration-300"
                        >
                            Send us a message
                        </a>
                    </div>

                    <div className="w-[392px] h-[392px] relative hidden md:block">
                        {[0, 1, 2].map((index) => (
                            <div
                                key={`vertical-${index}`}
                                className="absolute border-l border-neutral-700"
                                style={{
                                    left: `${79 + index * 79}px`,
                                    height: '100%',
                                    top: 0
                                }}
                            ></div>
                        ))}
                        {[0, 1].map((index) => (
                            <div
                                key={`horizontal-${index}`}
                                className="absolute border-t border-neutral-700 w-full"
                                style={{
                                    top: `${204 + index * 87}px`
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