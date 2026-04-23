"use client";

import { useState } from "react";
import { useT } from "@/components/providers/i18n-provider";
import { AIPersona } from "@/components/ai-persona";
import { PhotoTile } from "@/components/photo-tile";

export function PhotoPage() {
  const { t } = useT();
  const [col, setCol] = useState(0);
  const variants = ["", "wide", "tall", "", "tall", "", "wide", "", ""];
  const spans = [
    "col-span-6 md:col-span-4",
    "col-span-6 md:col-span-8",
    "col-span-6 md:col-span-3",
    "col-span-6 md:col-span-5",
    "col-span-6 md:col-span-4",
    "col-span-6 md:col-span-3",
    "col-span-6 md:col-span-6",
    "col-span-6 md:col-span-3",
    "col-span-6 md:col-span-3",
  ];

  return (
    <div className="fade-up">
      <section className="zen-bg pt-36 md:pt-40 pb-8">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="eyebrow text-[color:var(--ink-3)]">{t.photoEyebrow}</div>
          <h1 className="f-display mt-6 text-[clamp(56px,9vw,144px)] leading-[0.98] text-[color:var(--ink)]">
            {t.photoH}
          </h1>
          <p className="mt-8 text-[17px] md:text-[19px] leading-[1.65] text-[color:var(--ink-2)] max-w-[56ch]">
            {t.photoLead}
          </p>

          <div className="mt-12 inline-flex rounded-full border border-[color:var(--veil-2)] bg-[rgba(255,255,255,0.6)] backdrop-blur-md p-1">
            {t.photoCollections.map((l, i) => (
              <button
                key={i}
                onClick={() => setCol(i)}
                data-active={col === i}
                className="tab px-4 py-1.5 text-[13px] font-medium"
              >
                {l}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-12 gap-4 md:gap-5 auto-rows-auto">
            {t.photoCaptions.map((p, i) => (
              <a key={i} href="#" className={`${spans[i]} block`}>
                <PhotoTile tint={p.h} label={p.t} meta={p.m} variant={variants[i]} />
              </a>
            ))}
          </div>
        </div>
      </section>
      <AIPersona />
    </div>
  );
}
