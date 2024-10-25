// src/app/contents/works/[slug]/loading.tsx
export default function Loading() {
    return (
      <div className="min-h-screen bg-[#101111] py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            {/* Header */}
            <div className="flex justify-between items-center mb-16">
              <div className="h-6 w-16 bg-[#2d2f31] rounded" />
              <div className="flex gap-4">
                <div className="h-6 w-6 bg-[#2d2f31] rounded-full" />
                <div className="h-6 w-6 bg-[#2d2f31] rounded-full" />
              </div>
            </div>
  
            {/* Title and Description */}
            <div className="text-center mb-16">
              <div className="h-12 w-3/4 bg-[#2d2f31] rounded mx-auto mb-6" />
              <div className="h-24 w-2/3 bg-[#2d2f31] rounded mx-auto" />
            </div>
  
            {/* Links */}
            <div className="flex justify-center gap-8 mb-16">
              <div className="h-8 w-24 bg-[#2d2f31] rounded" />
              <div className="h-8 w-24 bg-[#2d2f31] rounded" />
            </div>
  
            {/* Image */}
            <div className="w-full h-[480px] bg-[#2d2f31] rounded-xl mb-16" />
  
            {/* Content */}
            <div className="space-y-4">
              <div className="h-4 bg-[#2d2f31] rounded w-full" />
              <div className="h-4 bg-[#2d2f31] rounded w-5/6" />
              <div className="h-4 bg-[#2d2f31] rounded w-4/6" />
            </div>
          </div>
        </div>
      </div>
    );
  }