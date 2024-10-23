// src/app/about/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import Header from '../about/Header';
import Footer from '../about/Footer';

export default function About() {
  return (
    <>
    <Header />
    <main className="min-h-screen bg-[#101111] flex flex-col">
      <div className="flex-grow">
        <div className="max-w-[1000px] mx-auto px-4 py-16">
          {/* Title Section */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-['SF Pro'] mb-6">
              <span className="text-white">About </span>
              <span className="text-[#1b98e0] font-semibold">Us</span>
            </h1>
          </div>

          {/* Description */}
          <div className="max-w-[800px] mx-auto text-center mb-12 animate-fade-in">
            <p className="text-white text-lg md:text-xl">
              Basically, I&apos;m an aviation enthusiast who couldn&apos;t become a pilot, so I ended up taking random photos of planes. On the side, I started coding, stumbled into the world of business without knowing much, and now I&apos;m navigating my way through it all. Currently, I&apos;m looking for internship opportunities, so if you need a creative coder with a love for problem solving let&apos;s talk!
            </p>
          </div>

          {/* Image Section */}
          <div className="relative w-full max-w-[600px] mx-auto mb-16 animate-fade-in">
            <div className="aspect-[16/9] relative">
              {/* Main Image */}
              <div className="relative h-full">
                <Image
                  src="/about-us.jpg"
                  alt="About Us"
                  fill
                  className="rounded-[20px] object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 600px"
                  priority
                />
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-['SF Pro']">
              <span className="text-white">Ready to start your </span>
              <span className="text-[#1b98e0] font-semibold">Journey</span>
              <span className="text-white">?</span>
            </h2>
            <p className="text-white text-lg">
              Whether you&apos;re ready to begin your project or just have a question, we&apos;re 
              <span className="text-[#1b98e0] font-semibold"> here to help</span>.
            </p>
            <div className="pt-4">
              <Link 
                href="/contact"
                className="inline-block px-8 py-3 bg-[#1b1b1b] rounded-[20px] border-2 border-[#1b98e0] text-white 
                  hover:bg-[#1b98e0]/10 transition-all duration-300 
                  hover:scale-105 active:scale-95"
              >
                Let&apos;s Get Started!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}