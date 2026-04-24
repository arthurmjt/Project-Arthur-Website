"use client";

import { Search } from "lucide-react";
import type { PhotoMeta, PhotoSection } from "@/lib/dict";

export function PhotoGallery({
  section,
  onOpen,
  zoomLabel,
}: {
  section: PhotoSection;
  onOpen: (index: number) => void;
  zoomLabel: string;
}) {
  return (
    <div>
      <h2
        className="f-display text-[32px] md:text-[44px] leading-[1.1] text-[color:var(--ink)]"
        style={{ letterSpacing: "-0.02em", fontWeight: 500 }}
      >
        {section.title}
      </h2>
      {section.intro && (
        <p className="mt-4 text-[15px] md:text-[17px] leading-[1.7] text-[color:var(--ink-2)] max-w-[62ch]">
          {section.intro}
        </p>
      )}

      <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5 [column-fill:_balance]">
        {section.photos.map((p, i) => (
          <PhotoCard key={p.src} photo={p} onOpen={() => onOpen(i)} zoomLabel={zoomLabel} />
        ))}
      </div>

      {section.outro && (
        <p className="mt-12 text-[15px] md:text-[17px] leading-[1.8] text-[color:var(--ink-2)] max-w-[62ch] whitespace-pre-line">
          {section.outro}
        </p>
      )}
    </div>
  );
}

function PhotoCard({
  photo,
  onOpen,
  zoomLabel,
}: {
  photo: PhotoMeta;
  onOpen: () => void;
  zoomLabel: string;
}) {
  return (
    <div className="break-inside-avoid mb-4 md:mb-5">
      <button
        type="button"
        onClick={onOpen}
        aria-label={zoomLabel}
        className="group relative block w-full overflow-hidden rounded-[14px] border border-[color:var(--veil-2)] bg-[color:var(--ivory)] cursor-zoom-in transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-[2px] hover:shadow-[0_24px_48px_-24px_rgba(31,68,51,0.25)]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          className="block w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          draggable={false}
        />
        <span
          aria-hidden
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none"
          style={{ background: "linear-gradient(180deg, rgba(17,21,19,0) 55%, rgba(17,21,19,0.35) 100%)" }}
        >
          <span
            className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center border border-[rgba(255,251,240,0.5)] text-[color:var(--ink)]"
            style={{
              background: "rgba(255,251,240,0.55)",
              backdropFilter: "saturate(160%) blur(14px)",
              WebkitBackdropFilter: "saturate(160%) blur(14px)",
              boxShadow: "0 10px 28px -14px rgba(17,21,19,0.45)",
            }}
          >
            <Search size={20} strokeWidth={1.75} />
          </span>
        </span>
      </button>
      <div className="mt-2.5 space-y-0.5">
        <div className="eyebrow text-[color:var(--ink-2)]">
          {photo.camera} · {photo.lens} · {photo.focal} · ISO {photo.iso} · {photo.shutter} · {photo.aperture}
        </div>
        <div className="eyebrow text-[color:var(--ink-3)]">
          {photo.location} · {photo.date}
        </div>
      </div>
    </div>
  );
}
