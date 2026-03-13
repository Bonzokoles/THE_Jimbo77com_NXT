import Image from "next/image";
import { useState } from "react";

interface R2ImageProps {
  r2Key: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export function R2Image({ r2Key, alt, width = 800, height = 600, className, priority = false }: R2ImageProps) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative overflow-hidden">
      {!loaded && (
        <div
          className="absolute inset-0 animate-pulse bg-gradient-to-r from-secondary/20 via-secondary/40 to-secondary/20 rounded-xl"
          aria-hidden="true"
        />
      )}
      <Image
        src={`/api/r2/${r2Key}`}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        onLoad={() => setLoaded(true)}
        placeholder="empty"
      />
    </div>
  );
}
