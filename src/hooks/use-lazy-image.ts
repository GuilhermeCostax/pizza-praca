import { useState, useEffect, useRef } from 'react';

interface UseLazyImageOptions {
  src: string;
  placeholder?: string;
  threshold?: number;
  rootMargin?: string;
}

interface UseLazyImageReturn {
  imageSrc: string;
  isLoaded: boolean;
  isLoading: boolean;
  error: string | null;
  imageRef: React.RefObject<HTMLElement>;
}

export const useLazyImage = ({
  src,
  placeholder = '',
  threshold = 0.1,
  rootMargin = '50px'
}: UseLazyImageOptions): UseLazyImageReturn => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const imageRef = useRef<HTMLElement>(null);

  // Intersection Observer para detectar quando a imagem entra na viewport
  useEffect(() => {
    const element = imageRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin]);

  // Carregar a imagem quando shouldLoad for true
  useEffect(() => {
    if (!shouldLoad || isLoaded) return;

    setIsLoading(true);
    setError(null);

    const img = new Image();
    
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
      setIsLoading(false);
    };

    img.onerror = () => {
      setError('Falha ao carregar a imagem');
      setIsLoading(false);
    };

    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [shouldLoad, src, isLoaded]);

  return {
    imageSrc,
    isLoaded,
    isLoading,
    error,
    imageRef
  };
};