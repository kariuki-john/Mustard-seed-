
import React, { useEffect, useState } from "react";
import PageLayout from "../components/PageLayout";
import {
  Images,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Maximize2,
} from "lucide-react";

// Automatically load images from src/images/gallery/
// Supported: jpg, jpeg, png, webp, gif
const imageFiles = import.meta.glob(
  "../images/gallery/*.{jpg,jpeg,png,webp,gif,JPG,JPEG,PNG,WEBP}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

// Convert files into gallery items
const galleryImages = Object.entries(imageFiles)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src], index) => {
    const filename = path.split("/").pop() || "";

    const title = filename
      .replace(/\.[^.]+$/, "")
      .replace(/[-_]/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    return {
      id: index,
      src,
      title: title || `School Photo ${index + 1}`,
    };
  });

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [zoom, setZoom] = useState(1);

  const isOpen = activeIndex !== null;
  const activeImage = isOpen
    ? galleryImages[activeIndex]
    : null;

  const openImage = (index) => {
    setActiveIndex(index);
    setZoom(1);
  };

  const closeImage = () => {
    setActiveIndex(null);
    setZoom(1);
  };

  const previousImage = () => {
    setActiveIndex((current) =>
      current === 0
        ? galleryImages.length - 1
        : current - 1
    );
    setZoom(1);
  };

  const nextImage = () => {
    setActiveIndex((current) =>
      current === galleryImages.length - 1
        ? 0
        : current + 1
    );
    setZoom(1);
  };

  const zoomIn = () => {
    setZoom((current) =>
      Math.min(4, Number((current + 0.25).toFixed(2)))
    );
  };

  const zoomOut = () => {
    setZoom((current) =>
      Math.max(1, Number((current - 0.25).toFixed(2)))
    );
  };

  // Keyboard navigation and prevent background scrolling
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeImage();
      } else if (event.key === "ArrowRight") {
        nextImage();
      } else if (event.key === "ArrowLeft") {
        previousImage();
      } else if (event.key === "+") {
        zoomIn();
      } else if (event.key === "-") {
        zoomOut();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <PageLayout title="Gallery">
      <div className="relative flex min-h-screen w-full flex-col items-center justify-start bg-gray-50 text-gray-900">

        {/* ================= PAGE INTRODUCTION ================= */}
        <section className="">

          <div className="text-center">
            

            <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-5xl">
              Our School Gallery
            </h2>

            

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-50 px-5 py-2 text-sm font-semibold text-green-700">
              <Images size={18} />
              {galleryImages.length} Photos
            </div>
          </div>
        </section>

        {/* ================= PHOTO GALLERY ================= */}
        <section className="bg-gray-50 py-14 md:px-8 w-full">

          <div className="mx-auto max-w-7xl">

            <div className="mb-9">
              <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                Moments at Mustard Seed
              </h3>

              <p className="mt-3 text-gray-600">
                Click any photograph to view it in full size.
              </p>
            </div>

            {galleryImages.length > 0 ? (

              // Three images per row on desktop
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

                {galleryImages.map((image, index) => (
                  <button
                    key={image.id}
                    type="button"
                    onClick={() => openImage(index)}
                    aria-label={`View ${image.title}`}
                    className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-600"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">

                      <img
                        src={image.src}
                        alt={image.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/40">

                        <div className="flex h-14 w-14 scale-75 items-center justify-center rounded-full bg-white/95 text-green-800 opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                          <Maximize2 size={25} />
                        </div>

                      </div>
                    </div>

                    {/* Image caption */}
                    <div className="px-5 py-4">
                      <p className="truncate text-base font-semibold capitalize text-gray-900">
                        {image.title}
                      </p>
                    </div>
                  </button>
                ))}

              </div>
            ) : (

              // Empty gallery message
              <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">

                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-700">
                  <Images size={30} />
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  Gallery Photos Coming Soon
                </h3>

                <p className="mx-auto mt-3 max-w-xl leading-7 text-gray-600">
                  Photographs of our school activities,
                  facilities and memorable moments
                  will appear here.
                </p>

              </div>
            )}
          </div>
        </section>

        {/* ================= LIGHTBOX / IMAGE VIEWER ================= */}
        {isOpen && activeImage && (

          <div
            role="dialog"
            aria-modal="true"
            aria-label="Photo gallery viewer"
            className="fixed inset-0 z-[9999] flex flex-col bg-black/95 text-white"
          >

            {/* TOP TOOLBAR */}
            <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-white/15 px-4 py-4 md:px-8">

              <div>
                <p className="text-sm font-medium text-white/70">
                  Photo {activeIndex + 1} of {galleryImages.length}
                </p>

                <h3 className="mt-1 max-w-[240px] truncate text-base font-semibold capitalize sm:max-w-md">
                  {activeImage.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">

                {/* Zoom out */}
                <button
                  type="button"
                  onClick={zoomOut}
                  disabled={zoom <= 1}
                  aria-label="Zoom out"
                  className="rounded-lg bg-white/10 p-2.5 transition hover:bg-white/20 disabled:opacity-40"
                >
                  <ZoomOut size={21} />
                </button>

                {/* Zoom percentage */}
                <span className="min-w-12 text-center text-sm font-semibold">
                  {Math.round(zoom * 100)}%
                </span>

                {/* Zoom in */}
                <button
                  type="button"
                  onClick={zoomIn}
                  disabled={zoom >= 4}
                  aria-label="Zoom in"
                  className="rounded-lg bg-white/10 p-2.5 transition hover:bg-white/20 disabled:opacity-40"
                >
                  <ZoomIn size={21} />
                </button>

                {/* Reset zoom */}
                <button
                  type="button"
                  onClick={() => setZoom(1)}
                  aria-label="Reset zoom"
                  className="rounded-lg bg-white/10 p-2.5 transition hover:bg-white/20"
                >
                  <RotateCcw size={20} />
                </button>

                {/* Close */}
                <button
                  type="button"
                  onClick={closeImage}
                  aria-label="Close gallery"
                  className="ml-2 rounded-lg bg-red-600 p-2.5 transition hover:bg-red-700"
                >
                  <X size={22} />
                </button>

              </div>
            </div>

            {/* IMAGE DISPLAY AREA */}
            <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden">

              {/* Scrollable zoom area */}
              <div className="h-full w-full overflow-auto">
                <div
                  className="flex min-h-full min-w-full items-center justify-center p-5 md:p-10"
                >
                  <img
                    key={activeImage.src}
                    src={activeImage.src}
                    alt={activeImage.title}
                    draggable="false"
                    style={{
                      width: `${zoom * 100}%`,
                      maxWidth: zoom === 1 ? "100%" : "none",
                      maxHeight: zoom === 1 ? "100%" : "none",
                    }}
                    className={
                      zoom === 1
                        ? "max-h-[75vh] w-auto object-contain"
                        : "h-auto object-contain"
                    }
                  />
                </div>
              </div>

              {/* PREVIOUS BUTTON */}
              {galleryImages.length > 1 && (
                <button
                  type="button"
                  onClick={previousImage}
                  aria-label="Previous image"
                  className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white transition hover:bg-green-700 md:left-6"
                >
                  <ChevronLeft size={27} />
                </button>
              )}

              {/* NEXT BUTTON */}
              {galleryImages.length > 1 && (
                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Next image"
                  className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white transition hover:bg-green-700 md:right-6"
                >
                  <ChevronRight size={27} />
                </button>
              )}

            </div>

            {/* BOTTOM CAPTION */}
            <div className="shrink-0 border-t border-white/15 px-4 py-4 text-center md:px-8">
              <p className="text-sm capitalize text-white/80">
                {activeImage.title}
              </p>
              <p className="mt-1 text-xs text-white/50">
                Use arrow keys to navigate • Esc to close
              </p>
            </div>

          </div>
        )}

      </div>
    </PageLayout>
  );
}
