// src/components/Header.js
'use client';  // Add this to use usePathname
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';  // Add this import

const navigation = [
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      <div className="h-[116px]"></div> {/* Spacer div */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#101111]">
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-[1238px] mx-auto">
            <header className="w-full relative rounded-[20px] bg-[#1b1b1b] border border-[#1b98e0] h-[88px]">
              <div className="flex justify-between items-center h-full px-6">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <Link href="/" className="flex items-center">
                    <Image
                      src="/NSD Horizontal.png"
                      alt="Logo"
                      width={200}
                      height={100}
                    />
                  </Link>
                </div>
                {/* Navigation */}
                <nav className="hidden md:flex space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-white hover:text-[#1B98E0] transition-colors
                        ${pathname === item.href ? 'text-[#1B98E0] font-bold' : ''}
                      `}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                {/* Hire Me Button */}
                <div className="flex-shrink-0">
                  <button className="group w-[130px] h-[46px] relative rounded-[15px] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#004aad]/50">
                    <span className="absolute inset-0 bg-gradient-to-r from-[#1b98e0] via-[#004aad] to-[#1b98e0] animate-gradient-x"></span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#1b98e0] via-[#004aad] to-[#1b98e0] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-x" style={{ animationDelay: '-1.5s' }}></span>
                    <span className="relative z-10 flex items-center justify-center text-white text-xl font-normal">
                      Hire Me
                    </span>
                  </button>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
    </>
  );
}