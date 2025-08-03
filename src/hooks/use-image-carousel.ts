import { useState, useEffect, useCallback, useRef } from "react";

interface CarouselImage {
  src: string;
  alt: string;
  caption?: string;
  title?: string;
}

interface UseImageCarouselOptions {
  images: CarouselImage[];
  loop?: boolean;
}

export function useImageCarousel({
  images,
  loop = true,
}: UseImageCarouselOptions) {
  // State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [errorImages, setErrorImages] = useState<Set<number>>(new Set());
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Refs
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Navigation functions
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => {
      if (loop) {
        return prev === 0 ? images.length - 1 : prev - 1;
      }
      return Math.max(0, prev - 1);
    });
    resetZoom();
  }, [images.length, loop]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => {
      if (loop) {
        return (prev + 1) % images.length;
      }
      return Math.min(images.length - 1, prev + 1);
    });
    resetZoom();
  }, [images.length, loop]);

  const goToIndex = useCallback((index: number) => {
    setCurrentIndex(index);
    resetZoom();
  }, []);

  // Zoom functions
  const resetZoom = useCallback(() => {
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  }, []);

  const handleZoomIn = useCallback(() => {
    setZoomLevel((prev) => Math.min(prev * 1.5, 4));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoomLevel((prev) => {
      const newZoom = prev / 1.5;
      if (newZoom <= 1) {
        setPanPosition({ x: 0, y: 0 });
        return 1;
      }
      return newZoom;
    });
  }, []);

  // Image loading handlers
  const handleImageLoad = useCallback((index: number) => {
    setLoadedImages((prev) => new Set([...prev, index]));
  }, []);

  const handleImageError = useCallback((index: number) => {
    setErrorImages((prev) => new Set([...prev, index]));
  }, []);

  // Touch/swipe handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null);
    const touch = e.targetTouches[0];
    if (!touch) {
      return;
    }
    setTouchStart(touch.clientX);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    const touch = e.targetTouches[0];
    if (!touch) {
      return;
    }
    setTouchEnd(touch.clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) {
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  }, [touchStart, touchEnd, goToNext, goToPrevious]);

  // Pan/drag handlers for zoomed images
  const handleMouseDown = useCallback(
    (event: React.MouseEvent) => {
      if (zoomLevel > 1) {
        setIsDragging(true);
        setDragStart({
          x: event.clientX - panPosition.x,
          y: event.clientY - panPosition.y,
        });
      }
    },
    [zoomLevel, panPosition],
  );

  const handleMouseMove = useCallback(
    (event: React.MouseEvent) => {
      if (isDragging && zoomLevel > 1) {
        setPanPosition({
          x: event.clientX - dragStart.x,
          y: event.clientY - dragStart.y,
        });
      }
    },
    [isDragging, zoomLevel, dragStart],
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Fullscreen handlers
  const openFullscreen = useCallback(() => {
    setIsFullscreen(true);
  }, []);

  const closeFullscreen = useCallback(() => {
    setIsFullscreen(false);
    resetZoom();
  }, [resetZoom]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          goToPrevious();
          break;
        case "ArrowRight":
          e.preventDefault();
          goToNext();
          break;
        case "Escape":
          if (isFullscreen) {
            closeFullscreen();
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrevious, goToNext, isFullscreen, closeFullscreen]);

  // Computed values
  const currentImage = images[currentIndex];
  const isLoaded = loadedImages.has(currentIndex);
  const hasError = errorImages.has(currentIndex);

  return {
    // State
    currentIndex,
    isFullscreen,
    zoomLevel,
    panPosition,
    isDragging,

    // Refs
    imageRef,
    containerRef,

    // Computed values
    currentImage,
    isLoaded,
    hasError,

    // Navigation
    goToPrevious,
    goToNext,
    goToIndex,

    // Zoom
    handleZoomIn,
    handleZoomOut,
    resetZoom,

    // Image loading
    handleImageLoad,
    handleImageError,

    // Touch/swipe
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,

    // Pan/drag
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,

    // Fullscreen
    openFullscreen,
    closeFullscreen,
    setIsFullscreen,
  };
}
