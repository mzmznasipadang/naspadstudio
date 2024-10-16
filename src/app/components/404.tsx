// pages/404.tsx (or app/not-found.tsx for App Router)
import React from 'react';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#101111] text-white relative overflow-hidden">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <h1 className="text-6xl font-bold mb-4 animate-bounce">404</h1>
      <p className="text-2xl mb-8 text-center animate-pulse">Oops! This page seems to have wandered off.</p>
      <div className="flex space-x-4">
        <Link href="/" className="px-6 py-3 bg-[#1B98E0] text-white rounded-full hover:bg-[#1689c8] transition-colors duration-300 animate-fade-in">
          Go Home
        </Link>
        <Link href="/contact" className="px-6 py-3 bg-[#7986fb] text-white rounded-full hover:bg-[#6975e9] transition-colors duration-300 animate-fade-in">
          Contact Us
        </Link>
      </div>
      <div className="mt-12 text-center animate-fade-in">
        <p>Here are some helpful links:</p>
        <div className="flex flex-wrap justify-center mt-4 space-x-4">
          <Link href="/about" className="text-[#1B98E0] hover:underline">About</Link>
          <Link href="/services" className="text-[#1B98E0] hover:underline">Services</Link>
          <Link href="/portfolio" className="text-[#1B98E0] hover:underline">Portfolio</Link>
        </div>
      </div>
    </div>
  );
}