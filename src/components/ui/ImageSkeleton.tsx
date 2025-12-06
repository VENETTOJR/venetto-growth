import { useState } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  draggable?: boolean;
  style?: React.CSSProperties;
}

const OptimizedImage = ({
  src,
  alt,
  className,
  width,
  height,
  loading = "lazy",
  fetchPriority = "auto",
  draggable = true,
  style,
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-full h-full">
      {/* Skeleton placeholder */}
      {!isLoaded && !hasError && (
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-r from-muted via-muted-foreground/10 to-muted animate-pulse rounded-inherit",
            className
          )}
          style={style}
        />
      )}
      
      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
        draggable={draggable}
        className={cn(
          "transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        style={style}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
    </div>
  );
};

export default OptimizedImage;
