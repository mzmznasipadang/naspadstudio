'use client';

export default function FeaturedWorksError() {
  return (
    <section className="w-full py-16 px-4 bg-[#101111]">
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-3xl font-medium text-white mb-12">
          Unable to load works at the moment
        </h2>
        <button 
          onClick={() => window.location.reload()} 
          className="bg-[#1b98e0] text-white px-4 py-2 rounded"
        >
          Try Again
        </button>
      </div>
    </section>
  );
}