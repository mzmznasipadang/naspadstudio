export default function FeaturedWorksLoading() {
    return (
      <section className="w-full py-16 px-4 bg-[#101111]">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl font-medium text-white mb-12 animate-fade-in">
            Some of my <span className="text-[#1b98e0]">featured works</span> ✨
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="relative w-full aspect-[400/600] bg-[#2d2f31] animate-pulse rounded-[20px]"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }