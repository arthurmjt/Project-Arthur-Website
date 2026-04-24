"use client";

import { useMemo, useState } from "react";
import { useT } from "@/components/providers/i18n-provider";
import { PhotoGallery } from "@/components/photo-gallery";
import { PhotoLightbox } from "@/components/photo-lightbox";

export function PhotoPage() {
  const { t } = useT();
  const [active, setActive] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const section = t.photoSections[active];
  const photos = useMemo(() => section?.photos ?? [], [section]);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i === null ? null : Math.max(0, i - 1)));
  const next = () =>
    setLightboxIndex((i) => (i === null ? null : Math.min(photos.length - 1, i + 1)));

  return (
    <div className="fade-up">
      <section className="zen-bg pt-36 md:pt-40 pb-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="eyebrow text-[color:var(--ink-3)] flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-[color:var(--ink-3)] opacity-60" />
            {t.photoEyebrow}
          </div>

          <div className="mt-10 max-w-[62ch] space-y-5">
            {t.photoIntro.map((line, i) => (
              <p
                key={i}
                className="f-display text-[19px] md:text-[28px] leading-[1.45] text-[color:var(--ink)]"
                style={{ letterSpacing: "-0.01em", fontWeight: 400 }}
              >
                {line}
              </p>
            ))}
            <p
              className="f-display text-[19px] md:text-[28px] leading-[1.45] text-[color:var(--orange-1)] italic pt-2"
              style={{ letterSpacing: "-0.01em", fontWeight: 400 }}
            >
              {t.photoIntroEmphasis}
            </p>
          </div>

          <div className="mt-16 flex flex-nowrap gap-2 items-center rounded-full border border-[color:var(--veil-2)] bg-[rgba(255,255,255,0.6)] backdrop-blur-md p-1 w-fit max-w-full overflow-x-auto">
            {t.photoSections.map((s, i) => (
              <button
                key={s.id}
                onClick={() => {
                  setActive(i);
                  setLightboxIndex(null);
                }}
                data-active={active === i}
                className="tab px-4 py-1.5 text-[13px] font-medium whitespace-nowrap"
              >
                {s.title}
              </button>
            ))}
          </div>

          <div key={section.id} className="mt-14 fade-up">
            <PhotoGallery
              section={section}
              onOpen={openLightbox}
              zoomLabel={t.photoZoomLabel}
            />
          </div>

          <div className="mt-28">
            <div className="eyebrow text-[color:var(--ink-3)] flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[color:var(--ink-3)] opacity-60" />
              {t.photoVideoEyebrow}
            </div>
            <h2
              className="f-display mt-5 text-[28px] md:text-[36px] leading-[1.15] text-[color:var(--ink)]"
              style={{ letterSpacing: "-0.02em", fontWeight: 500 }}
            >
              {t.photoVideo.title}
            </h2>
            <p className="mt-3 text-[15px] md:text-[17px] leading-[1.7] text-[color:var(--ink-2)] max-w-[62ch]">
              {t.photoVideo.intro}
            </p>
            <div
              className="mt-6 relative aspect-[16/9] rounded-[14px] overflow-hidden border border-[color:var(--veil-2)]"
              style={{ background: "#000" }}
            >
              {t.photoVideo.embedProvider === "youtube" ? (
                <iframe
                  src={t.photoVideo.embedUrl}
                  title={t.photoVideo.title}
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                <iframe
                  src={t.photoVideo.embedUrl}
                  title={t.photoVideo.title}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <PhotoLightbox
          photos={photos}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prev}
          onNext={next}
          closeLabel={t.photoCloseLabel}
        />
      )}
    </div>
  );
}
