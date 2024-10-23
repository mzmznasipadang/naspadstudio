// src/components/Header.js
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const navigation = [
  { name: "About", href: "/404" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="h-[116px]"></div> {/* Spacer div */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#101111]">
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-[1238px] mx-auto">
            <header className="w-full relative rounded-[20px] bg-[#1b1b1b] border border-[#1b98e0] h-[88px]">
              <div className="flex justify-between items-center h-full px-4 md:px-6">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <Link href="/" className="flex items-center">
                    <Image
                      src="/NSD Horizontal.png"
                      alt="Logo"
                      width={150}
                      height={75}
                      className="w-auto h-8 md:h-auto md:w-[200px]"
                    />
                  </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-white hover:text-[#1B98E0] transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* Desktop Hire Me Button */}
                <div className="hidden md:block flex-shrink-0">
                  <button className="group w-[130px] h-[46px] relative rounded-[15px] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#004aad]/50">
                    <span className="absolute inset-0 bg-gradient-to-r from-[#1b98e0] via-[#004aad] to-[#1b98e0] animate-gradient-x"></span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#1b98e0] via-[#004aad] to-[#1b98e0] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-x" style={{ animationDelay: '-1.5s' }}></span>
                    <span className="relative z-10 flex items-center justify-center text-white text-xl font-normal">
                      Hire Me
                    </span>
                  </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                  className="lg:hidden p-2 rounded-md text-white hover:text-[#1B98E0] transition-colors"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Mobile Menu */}
              <div className={`lg:hidden absolute top-full left-0 right-0 bg-[#1b1b1b] border-t border-[#1b98e0] rounded-b-[20px] transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <nav className="flex flex-col p-4 space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-white hover:text-[#1B98E0] transition-colors px-4 py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  {/* Mobile Hire Me Button */}
                  <button className="w-full bg-gradient-to-r from-[#1b98e0] via-[#004aad] to-[#1b98e0] text-white py-3 px-6 rounded-[15px] text-center animate-gradient-x">
                    Hire Me
                  </button>
                </nav>
              </div>
            </header>
          </div>
        </div>
      </div>
    </>
  );
}