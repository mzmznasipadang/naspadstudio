// src/app/not-found.tsx
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#101111] flex items-center justify-center animate-fade-in">
      <div className="text-center">
        <h2 className="text-white text-3xl font-bold mb-4">Not Found</h2>
        <p className="text-gray-400 mb-8">Could not find requested resource</p>
        <Link
          href="/"
          className="text-[#1b98e0] hover:underline"
        >
          Return to Home
        </Link>
      </div>
    </div>
  )
}