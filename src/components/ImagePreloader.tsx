import { useEffect } from 'react';

interface ImagePreloaderProps {
  images: string[];
  priority?: boolean;
}

export const ImagePreloader = ({ images, priority = false }: ImagePreloaderProps) => {
  useEffect(() => {
    // Preload images with high priority for faster loading
    images.forEach((imageSrc) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = imageSrc;
      if (priority) {
        link.fetchPriority = 'high';
      }
      document.head.appendChild(link);
      
      // Also create image objects for immediate browser caching
      const img = new Image();
      img.src = imageSrc;
    });
  }, [images, priority]);

  return null; // This component doesn't render anything visible
};