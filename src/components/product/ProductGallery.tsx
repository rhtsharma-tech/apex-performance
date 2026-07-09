"use client";

import { useState } from "react";
import Image from "next/image";
import { ZoomIn, RotateCw } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
  thumbnail: string;
}

export default function ProductGallery({ images, thumbnail }: ProductGalleryProps) {
  const allImages = [thumbnail, ...images.filter((img) => img !== thumbnail)].slice(0, 4);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square bg-surface-mid rounded-xl overflow-hidden border border-white/10">
        <Image
          src={allImages[activeIndex]}
          alt="Product"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="bg-primary/90 backdrop-blur-sm text-black font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded">
            Performance Tier 3
          </span>
          <span className="bg-green-500/90 backdrop-blur-sm text-white font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded">
            In Stock
          </span>
        </div>

        {/* Zoom button */}
        <button className="absolute bottom-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all">
          <ZoomIn className="w-4 h-4" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {allImages.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={cn(
              "relative w-[72px] h-[72px] rounded-lg overflow-hidden border-2 transition-all",
              activeIndex === i
                ? "border-primary ring-2 ring-primary/30"
                : "border-white/10 hover:border-white/30"
            )}
          >
            <Image src={img} alt="" fill sizes="72px" className="object-cover" />
          </button>
        ))}
        <button className="w-[72px] h-[72px] rounded-lg border-2 border-white/10 hover:border-white/30 flex items-center justify-center bg-surface-mid transition-all">
          <RotateCw className="w-5 h-5 text-on-surface-muted" />
        </button>
      </div>
    </div>
  );
}
