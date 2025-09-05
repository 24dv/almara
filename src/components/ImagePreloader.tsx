import { useEffect } from 'react';

interface ImagePreloaderProps {
  images: string[];
}

export const ImagePreloader = ({ images }: ImagePreloaderProps) => {
  useEffect(() => {
    // Preload images when component mounts
    images.forEach((imageSrc) => {
      const img = new Image();
      img.src = imageSrc;
    });
  }, [images]);

  return null; // This component doesn't render anything visible
};