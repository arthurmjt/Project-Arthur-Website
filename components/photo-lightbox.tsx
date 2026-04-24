"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { PhotoMeta } from "@/lib/dict";

export function PhotoLightbox({
  photos,
  index,
  onClose,
  onPrev,
  onNext,
  closeLabel,
}: {
  photos: PhotoMeta[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  closeLabel: string;
}) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onPrev, onNext]);

  if (typeof document === "undefined") return null;

  const photo = photos[index];
  const hasPrev = index > 0;
  const hasNext = index < photos.length - 1;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center animate-[fadeUp_.35s_cubic-bezier(.2,.8,.2,1)_both]"
      style={{ background: "rgba(17,21,19,0.92)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)" }}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label={closeLabel}
        className="absolute top-6 right-6 w-11 h-11 rounded-full flex items-center justify-center text-[color:var(--ivory)] border border-[rgba(255,251,240,0.25)] hover:bg-[rgba(255,251,240,0.12)] transition-colors"
      >
        <X size={20} />
      </button>

      {hasPrev && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous"
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-[color:var(--ivory)] border border-[rgba(255,251,240,0.25)] hover:bg-[rgba(255,251,240,0.12)] transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
      )}
      {hasNext && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next"
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-[color:var(--ivory)] border border-[rgba(255,251,240,0.25)] hover:bg-[rgba(255,251,240,0.12)] transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      )}

      <div
        className="flex flex-col items-center gap-5 max-w-[88vw] max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo.src}
          alt={photo.alt}
          onClick={onClose}
          className="max-w-[80vw] max-h-[80vh] object-contain rounded-[6px] cursor-zoom-out select-none"
          draggable={false}
        />
        <MetaLine photo={photo} dark />
      </div>
    </div>,
    document.body,
  );
}

function MetaLine({ photo, dark = false }: { photo: PhotoMeta; dark?: boolean }) {
  const toneTop = dark ? "text-[color:var(--ivory)] opacity-85" : "text-[color:var(--ink-2)]";
  const toneBottom = dark ? "text-[color:var(--ivory)] opacity-60" : "text-[color:var(--ink-3)]";
  return (
    <div className="text-center space-y-1">
      <div className={`eyebrow ${toneTop}`}>
        {photo.camera} · {photo.lens} · {photo.focal} · ISO {photo.iso} · {photo.shutter} · {photo.aperture}
      </div>
      <div className={`eyebrow ${toneBottom}`}>
        {photo.location} · {photo.date}
      </div>
    </div>
  );
}
