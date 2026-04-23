"use client";

import { useMemo, useState } from "react";
import { useT } from "@/components/providers/i18n-provider";
import { GrowthRings } from "@/components/growth-rings";
import { ArrowIcon } from "@/components/icons/arrow-icon";
import type { Ring } from "@/lib/dict";

export function ResumePage() {
  const { t } = useT();
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="fade-up">
      <section className="zen-bg pt-36 md:pt-40 pb-16">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <RingSection
            sectionId="work"
            eyebrow={t.resumeEyebrow}
            rings={t.rings}
            currentYear={currentYear}
            showRings
          />

          <div className="mt-24">
            <RingSection
              sectionId="edu"
              eyebrow={t.educationEyebrow}
              rings={t.education}
              currentYear={currentYear}
              showRings={false}
            />
          </div>

          <div className="mt-24">
            <div className="eyebrow text-[color:var(--ink-3)] flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[color:var(--ink-3)] opacity-60" />
              {t.publicationsEyebrow}
            </div>
            <div className="mt-6 space-y-4">
              {t.publications.map((p, i) => (
                <div
                  key={i}
                  className="p-6 rounded-[20px] border border-[color:var(--veil-2)]"
                  style={{ background: "var(--panel)" }}
                >
                  <div className="eyebrow text-[color:var(--ink-3)]">
                    {p.venue} · {t.pubUnderReview}
                  </div>
                  <h3 className="f-display mt-3 text-[20px] md:text-[22px] leading-[1.35] text-[color:var(--ink)]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.7] text-[color:var(--ink-2)]">
                    {p.authors}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <div className="eyebrow text-[color:var(--ink-3)] flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[color:var(--ink-3)] opacity-60" />
              {t.honorsEyebrow}
            </div>
            <ul className="mt-6 space-y-3">
              {t.honors.map((h, i) => (
                <li
                  key={i}
                  className="py-4 border-b border-[color:var(--veil-2)] flex items-baseline gap-6 last:border-b-0"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--orange-1)] translate-y-[5px] shrink-0" />
                  <span className="flex-1">
                    <span
                      className="f-display text-[18px] md:text-[20px] leading-[1.35] text-[color:var(--ink)] block"
                      style={{ letterSpacing: "-0.01em", fontWeight: 500 }}
                    >
                      {h.title}
                    </span>
                    {h.detail && (
                      <span className="eyebrow text-[color:var(--ink-3)]">
                        {h.detail}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

function RingSection({
  sectionId,
  eyebrow,
  rings,
  currentYear,
  showRings,
}: {
  sectionId: string;
  eyebrow: string;
  rings: Ring[];
  currentYear: number;
  showRings: boolean;
}) {
  const [displayRow, setDisplayRow] = useState(0);
  const [hoverYear, setHoverYear] = useState<number | null>(null);

  const ringStart = useMemo(
    () => Math.min(...rings.map((r) => r.yearStart)),
    [rings],
  );
  const ringEnd = useMemo(
    () => Math.max(...rings.map((r) => r.yearEnd ?? currentYear)),
    [rings, currentYear],
  );
  const ringYears = useMemo(
    () =>
      Array.from({ length: ringEnd - ringStart + 1 }, (_, i) =>
        String(ringEnd - i),
      ),
    [ringStart, ringEnd],
  );

  const active = rings[displayRow];

  const rowContainsYear = (i: number, y: number) => {
    const r = rings[i];
    return y >= r.yearStart && y <= (r.yearEnd ?? currentYear);
  };

  const rowIsHighlighted = (i: number) =>
    hoverYear !== null ? rowContainsYear(i, hoverYear) : i === displayRow;

  const highlightStart = hoverYear !== null ? hoverYear : active.yearStart;
  const highlightEnd =
    hoverYear !== null ? hoverYear : active.yearEnd ?? currentYear;

  const onRowHover = (i: number) => {
    setDisplayRow(i);
    setHoverYear(null);
  };

  return (
    <>
      <div className="eyebrow text-[color:var(--ink-3)]">{eyebrow}</div>

      <div className="mt-12 grid grid-cols-12 gap-10 items-start">
        <div className={showRings ? "col-span-12 md:col-span-7" : "col-span-12"}>
          <div className="space-y-1">
            {rings.map((r, i) => {
              const highlighted = rowIsHighlighted(i);
              return (
                <button
                  key={i}
                  onMouseEnter={() => onRowHover(i)}
                  onFocus={() => onRowHover(i)}
                  className="w-full text-left py-5 border-b border-[color:var(--veil-2)] flex items-center gap-6 group transition-colors"
                >
                  {r.logo ? (
                    <span
                      className="w-16 h-12 shrink-0 flex items-center justify-center transition-opacity"
                      style={{ opacity: highlighted ? 1 : 0.55 }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={r.logo}
                        alt={r.org}
                        className="max-w-full max-h-full object-contain"
                      />
                    </span>
                  ) : (
                    <span
                      className="eyebrow w-16 shrink-0 transition-colors text-center"
                      style={{
                        color: highlighted
                          ? "var(--orange-1)"
                          : "var(--ink-3)",
                      }}
                    >
                      {r.yearStart}
                    </span>
                  )}
                  <span className="flex-1">
                    <span
                      className={`f-display text-[22px] md:text-[24px] leading-tight block transition-colors ${
                        highlighted
                          ? "text-[color:var(--ink)]"
                          : "text-[color:var(--ink-2)]"
                      }`}
                      style={{ letterSpacing: "-0.02em", fontWeight: 500 }}
                    >
                      {r.role}
                    </span>
                    <span className="eyebrow text-[color:var(--ink-3)]">{r.org}</span>
                  </span>
                  <ArrowIcon
                    className={`transition-opacity ${
                      highlighted
                        ? "opacity-100 text-[color:var(--orange-1)]"
                        : "opacity-20 group-hover:opacity-60"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {showRings && (
          <div className="col-span-12 md:col-span-5 flex justify-center">
            <GrowthRings
              years={ringYears}
              highlightStart={highlightStart}
              highlightEnd={highlightEnd}
              onHoverYear={(y) => setHoverYear(y)}
              onRingsLeave={() => setHoverYear(null)}
            />
          </div>
        )}
      </div>

      <div
        key={`${sectionId}-${displayRow}`}
        className="mt-10 w-full p-6 rounded-[20px] fade-up border border-[color:var(--veil-2)]"
        style={{ background: "var(--panel)" }}
      >
        <div className="eyebrow text-[color:var(--ink-3)] mb-4">
          {active.org}
        </div>
        {Array.isArray(active.note) ? (
          <ul className="space-y-3">
            {active.note.map((line, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--orange-1)] mt-[12px] shrink-0" />
                <span className="f-display text-[17px] md:text-[19px] leading-[1.55] text-[color:var(--ink)] flex-1">
                  {line}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="f-display text-[17px] md:text-[19px] leading-[1.55] text-[color:var(--ink)]">
            {active.note}
          </p>
        )}
        {(active.video || active.image) && (
          <div
            className={`mt-6 grid grid-cols-1 ${
              active.video && active.image ? "md:grid-cols-2" : ""
            } gap-6`}
          >
            {active.video && (
              <div>
                <div
                  className="relative aspect-[16/9] rounded-[14px] overflow-hidden border border-[color:var(--veil-2)]"
                  style={{ background: "#000" }}
                >
                  <video
                    src={active.video.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                {active.video.href && (
                  <ReferenceLink href={active.video.href} />
                )}
              </div>
            )}
            {active.image && (
              <div>
                {active.image.href ? (
                  <a
                    href={active.image.href}
                    target="_blank"
                    rel="noreferrer"
                    className="relative aspect-[16/9] rounded-[14px] overflow-hidden border border-[color:var(--veil-2)] block"
                    style={{ background: "var(--ivory)" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={active.image.src}
                      alt={active.image.alt ?? ""}
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                  </a>
                ) : (
                  <div
                    className="relative aspect-[16/9] rounded-[14px] overflow-hidden border border-[color:var(--veil-2)]"
                    style={{ background: "var(--ivory)" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={active.image.src}
                      alt={active.image.alt ?? ""}
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                  </div>
                )}
                {active.image.href && (
                  <ReferenceLink href={active.image.href} />
                )}
              </div>
            )}
          </div>
        )}

        {active.extraVideos && (
          <div className="mt-10">
            <p className="text-[14px] md:text-[15px] leading-[1.55] text-[color:var(--ink-2)] mb-5">
              {active.extraVideos.lead}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {active.extraVideos.items.map((v, i) => (
                <div key={i}>
                  <p className="f-display text-[14px] md:text-[15px] leading-[1.35] text-[color:var(--ink)] mb-2">
                    {v.title}
                  </p>
                  <div
                    className="relative aspect-[16/9] rounded-[12px] overflow-hidden border border-[color:var(--veil-2)]"
                    style={{ background: "#000" }}
                  >
                    <iframe
                      src={v.url}
                      title={v.title}
                      referrerPolicy="strict-origin-when-cross-origin"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function ReferenceLink({ href }: { href: string }) {
  return (
    <p className="mt-3 text-[13px] text-[color:var(--ink-3)]">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-[color:var(--orange-1)] underline underline-offset-2 hover:opacity-80 transition-opacity"
      >
        Reference Link
      </a>
      {" to read more"}
    </p>
  );
}
