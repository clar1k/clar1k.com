"use client";
import type React from "react";
import { AnimatePresence, motion } from "motion/react";

import Image from "next/image";
import { Button } from "~/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "~/components/ui/dialog";
import { Badge } from "~/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ZoomIn,
  ZoomOut,
  X,
  Loader2,
} from "lucide-react";
import { cn } from "~/lib/utils";
import { useImageCarousel } from "~/hooks/use-image-carousel";

interface CarouselImage {
  src: string;
  alt: string;
  caption?: string;
  title?: string;
}

interface CarouselProps {
  images: CarouselImage[];
  showThumbnails?: boolean;
  showFullscreenButton?: boolean;
  showZoom?: boolean;
  loop?: boolean;
  className?: string;
}

export default function ImageCarousel(props: CarouselProps) {
  const {
    images,
    showThumbnails = true,
    showFullscreenButton = true,
    showZoom = true,
    loop = true,
    className,
  } = props;

  const imageCarousel = useImageCarousel({ images, loop });

  if (!imageCarousel.currentImage) {
    return null;
  }

  return (
    <>
      <div
        className={cn(
          "relative overflow-hidden rounded-lg border border-charcoal-800/20 bg-cream-50 shadow-lg",
          className,
        )}
        ref={imageCarousel.containerRef}
      >
        <div
          className="relative flex aspect-video items-center justify-center bg-cream-100"
          onTouchStart={imageCarousel.handleTouchStart}
          onTouchMove={imageCarousel.handleTouchMove}
          onTouchEnd={imageCarousel.handleTouchEnd}
        >
          {!imageCarousel.isLoaded && !imageCarousel.hasError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-charcoal-800/60" />
            </div>
          )}

          {imageCarousel.hasError ? (
            <div className="flex flex-col items-center justify-center text-charcoal-800/60">
              <X className="mb-2 h-12 w-12" />
              <p className="font-inter">Failed to load image</p>
            </div>
          ) : (
            <Image
              ref={imageCarousel.imageRef}
              src={imageCarousel.currentImage.src || "/placeholder.svg"}
              alt={imageCarousel.currentImage.alt}
              fill
              className={cn(
                "pointer-events-none select-none object-contain transition-opacity duration-300",
                imageCarousel.isLoaded ? "opacity-100" : "opacity-0",
              )}
              onLoad={() =>
                imageCarousel.handleImageLoad(imageCarousel.currentIndex)
              }
              onError={() =>
                imageCarousel.handleImageError(imageCarousel.currentIndex)
              }
              priority={imageCarousel.currentIndex === 0}
            />
          )}

          <Button
            variant="secondary"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-charcoal-800 text-cream-50 opacity-90 transition-all duration-200 hover:bg-charcoal-900 hover:opacity-100"
            onClick={imageCarousel.goToPrevious}
            disabled={!loop && imageCarousel.currentIndex === 0}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="secondary"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-charcoal-800 text-cream-50 opacity-90 transition-all duration-200 hover:bg-charcoal-900 hover:opacity-100"
            onClick={imageCarousel.goToNext}
            disabled={!loop && imageCarousel.currentIndex === images.length - 1}
            aria-label="Next image"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          <div className="absolute right-4 top-4 flex gap-2">
            {showFullscreenButton && (
              <Button
                variant="secondary"
                size="icon"
                onClick={imageCarousel.openFullscreen}
                aria-label="Open fullscreen"
                className="bg-charcoal-800 text-cream-50 transition-all duration-200 hover:bg-charcoal-900"
              >
                <Maximize2 className="h-4 w-4" />
              </Button>
            )}
          </div>

          <Badge
            variant="secondary"
            className="absolute left-4 top-4 border-charcoal-800/20 bg-cream-100/90 text-charcoal-800 hover:bg-cream-50"
          >
            {imageCarousel.currentIndex + 1} of {images.length}
          </Badge>

          {imageCarousel.currentImage.caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cream-100/90 to-transparent p-4">
              <p className="font-inter text-sm font-medium text-charcoal-800">
                {imageCarousel.currentImage.caption}
              </p>
              {imageCarousel.currentImage.title && (
                <p className="font-inter text-xs text-charcoal-800/80">
                  {imageCarousel.currentImage.title}
                </p>
              )}
            </div>
          )}
        </div>

        <div className="flex justify-center gap-2 bg-cream-100 p-4">
          {images.map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-2 w-2 rounded-full transition-all duration-200",
                index === imageCarousel.currentIndex
                  ? "bg-charcoal-800"
                  : "bg-charcoal-800/30",
              )}
              onClick={() => imageCarousel.goToIndex(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {showThumbnails && (
          <Thumbnails
            images={images}
            currentIndex={imageCarousel.currentIndex}
            goToIndex={imageCarousel.goToIndex}
          />
        )}
      </div>

      <FullScreenDialog
        imageCarousel={imageCarousel}
        showZoom={showZoom}
        showFullscreenButton={showFullscreenButton}
        images={images}
        loop={loop}
      />
    </>
  );
}

const Thumbnails = (props: {
  images: CarouselImage[];
  currentIndex: number;
  goToIndex: (index: number) => void;
}) => {
  return (
    <div className="border-t border-charcoal-800/20 bg-cream-50 p-4">
      <div className="flex gap-2 overflow-x-auto">
        {props.images.map((image, index) => (
          <button
            key={index}
            className={cn(
              "relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border-2 transition-all duration-200",
              index === props.currentIndex
                ? "border-charcoal-800"
                : "border-charcoal-800/20 hover:border-charcoal-800/40",
            )}
            onClick={() => props.goToIndex(index)}
            aria-label={`Go to image ${index + 1}`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="pointer-events-none select-none object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

const FullScreenDialog = (props: {
  imageCarousel: ReturnType<typeof useImageCarousel>;
  showZoom?: boolean;
  showFullscreenButton?: boolean;
  images: CarouselImage[];
  loop?: boolean;
}) => {
  if (!props.imageCarousel.currentImage) {
    return null;
  }
  const zoomStyle = {
    transform: `scale(${props.imageCarousel.zoomLevel}) translate(${props.imageCarousel.panPosition.x / props.imageCarousel.zoomLevel}px, ${props.imageCarousel.panPosition.y / props.imageCarousel.zoomLevel}px)`,
  };
  return (
    <Dialog
      open={props.imageCarousel.isFullscreen}
      onOpenChange={props.imageCarousel.setIsFullscreen}
    >
      <div className="sr-only">
        <DialogTitle>Image Carousel</DialogTitle>
      </div>
      <DialogContent className="h-screen w-screen max-w-none rounded-none border-none bg-cream-50/95 p-0">
        <div className="relative flex h-full w-full items-center justify-center">
          <div
            className="relative max-h-full max-w-full cursor-move"
            style={zoomStyle}
            onMouseDown={props.imageCarousel.handleMouseDown}
            onMouseMove={props.imageCarousel.handleMouseMove}
            onMouseUp={props.imageCarousel.handleMouseUp}
            onMouseLeave={props.imageCarousel.handleMouseUp}
          >
            <Image
              src={props.imageCarousel.currentImage.src}
              alt={props.imageCarousel.currentImage.alt}
              width={1200}
              height={800}
              className="pointer-events-none select-none object-contain"
              style={{ maxWidth: "90vw", maxHeight: "90vh" }}
            />
          </div>

          <div className="absolute right-4 top-4 flex gap-2">
            {props.showZoom && (
              <>
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={props.imageCarousel.handleZoomOut}
                  disabled={props.imageCarousel.zoomLevel <= 1}
                  aria-label="Zoom out"
                  className="bg-charcoal-800 text-cream-50 transition-all duration-200 hover:bg-charcoal-900"
                >
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={props.imageCarousel.handleZoomIn}
                  disabled={props.imageCarousel.zoomLevel >= 4}
                  aria-label="Zoom in"
                  className="bg-charcoal-800 text-cream-50 transition-all duration-200 hover:bg-charcoal-900"
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>
              </>
            )}
            <Button
              variant="secondary"
              size="icon"
              onClick={props.imageCarousel.closeFullscreen}
              aria-label="Close fullscreen"
              className="bg-charcoal-800 text-cream-50 transition-all duration-200 hover:bg-charcoal-900"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <Button
            variant="secondary"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-charcoal-800 text-cream-50 transition-all duration-200 hover:bg-charcoal-900"
            onClick={props.imageCarousel.goToPrevious}
            disabled={!props.loop && props.imageCarousel.currentIndex === 0}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="secondary"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-charcoal-800 text-cream-50 transition-all duration-200 hover:bg-charcoal-900"
            onClick={props.imageCarousel.goToNext}
            disabled={
              !props.loop &&
              props.imageCarousel.currentIndex === props.images.length - 1
            }
            aria-label="Next image"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          <Badge
            variant="secondary"
            className="absolute left-4 top-4 border-charcoal-800/20 bg-cream-100/90 text-charcoal-800"
          >
            {props.imageCarousel.currentIndex + 1} of {props.images.length}
          </Badge>

          {props.imageCarousel.currentImage.caption && (
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="font-inter text-lg font-medium text-charcoal-800">
                {props.imageCarousel.currentImage.caption}
              </p>
              {props.imageCarousel.currentImage.title && (
                <p className="mt-1 font-inter text-sm text-charcoal-800/80">
                  {props.imageCarousel.currentImage.title}
                </p>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
