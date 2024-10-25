// src/app/contents/works/[slug]/header.tsx
import Link from 'next/link';
import { FaGithub, FaTwitter } from 'react-icons/fa';

export default function Header() {
  return (
    <>
      <div className="h-[116px]"></div> {/* Spacer div */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#101111] animate-fade-in">
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-[1238px] mx-auto">
            <header className="w-full relative rounded-[20px] bg-[#1b1b1b] border border-[#1b98e0] h-[88px]">
              <div className="flex justify-between items-center h-full px-6">
                {/* Back Button */}
                <div className="flex items-center gap-8">
                  <Link
                    href="/contents/works"
                    className="text-white hover:text-[#1b98e0] transition-colors text-lg"
                  >
                    ← Back
                  </Link>
                </div>

                {/* Social Links and Hire Button */}
                <div className="flex items-center gap-8">
                  <div className="flex gap-4">
                    <Link
                      href="https://twitter.com/mzmznasipadang"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="text-white w-6 h-6 cursor-pointer hover:text-[#1b98e0] transition-colors" />
                    </Link>
                    <Link
                      href="https://github.com/mzmznasipadang"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="text-white w-6 h-6 cursor-pointer hover:text-[#1b98e0] transition-colors" />
                    </Link>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
    </>
  );
}