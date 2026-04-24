"use client";

import { Fragment, useMemo, useState } from "react";
import { useT } from "@/components/providers/i18n-provider";
import { GrowthRings } from "@/components/growth-rings";
import { SunLabCanvas } from "@/components/sun-lab-canvas";
import { GuanLabCanvas } from "@/components/guan-lab-canvas";
import { AmazonInternCanvas } from "@/components/amazon-intern-canvas";
import { ChevronDown, FileText, Image as ImageIcon } from "lucide-react";
import type { EducationEntry, Publication, Ring } from "@/lib/dict";

const hasCustomCanvas = (r: Ring) =>
  r.org.includes("SunLab") ||
  r.logo === "/media/logos/NCSALogo.png" ||
  r.logo === "/media/logos/amazonLogo.png";

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
            <div className="eyebrow text-[color:var(--ink-3)] flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[color:var(--ink-3)] opacity-60" />
              {t.publicationsEyebrow}
            </div>
            <div className="mt-6 space-y-5">
              {t.publications.map((p, i) => (
                <PublicationCard key={i} pub={p} />
              ))}
            </div>
          </div>

          <div className="mt-24">
            <EducationList eyebrow={t.educationEyebrow} entries={t.education} />
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
  const [pinnedRow, setPinnedRow] = useState(0);
  const [hoverRow, setHoverRow] = useState<number | null>(null);
  const [hoverYear, setHoverYear] = useState<number | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);

  const displayRow = hoverRow ?? pinnedRow;

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
    setHoverRow(i);
    setHoverYear(null);
  };

  const onRowLeave = () => {
    setHoverRow(null);
  };

  const onRowClick = (i: number) => {
    setPinnedRow(i);
    setMobileExpanded((prev) => (prev === i ? null : i));
  };

  return (
    <>
      <div className="eyebrow text-[color:var(--ink-3)]">{eyebrow}</div>

      <div className="mt-12 grid grid-cols-12 gap-10 items-start">
        <div
          className={
            showRings
              ? "order-2 md:order-none col-span-12 md:col-span-7"
              : "col-span-12"
          }
        >
          <div className="space-y-1" onMouseLeave={onRowLeave}>
            {rings.map((r, i) => {
              const highlighted = rowIsHighlighted(i);
              const isMobileExpanded = i === mobileExpanded;
              return (
                <Fragment key={i}>
                  <button
                    onMouseEnter={() => onRowHover(i)}
                    onFocus={() => onRowHover(i)}
                    onBlur={onRowLeave}
                    onClick={() => onRowClick(i)}
                    className={`w-full text-left py-5 border-b border-[color:var(--veil-2)] flex items-center gap-6 group transition-[transform,background-color,box-shadow,color] duration-200 ease-out hover:-translate-y-[1px] hover:bg-[rgba(31,68,51,0.025)] hover:shadow-[0_6px_18px_-8px_rgba(31,68,51,0.18)]${
                      isMobileExpanded
                        ? " sticky top-[108px] z-20 bg-[color:var(--ivory)] md:static md:bg-transparent md:top-auto md:z-auto"
                        : ""
                    }`}
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
                    <span className="flex-1 min-w-0">
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
                      <span className="eyebrow text-[color:var(--ink-3)] flex flex-col gap-0.5 mt-1 md:mt-0 md:block md:gap-0">
                        {r.org.split(" · ").map((part, idx, arr) => (
                          <span key={idx}>
                            {part}
                            {idx < arr.length - 1 && (
                              <span className="hidden md:inline"> · </span>
                            )}
                          </span>
                        ))}
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className={`md:hidden mr-2 shrink-0 transition-[transform,color] duration-300 ease-out ${
                        isMobileExpanded
                          ? "text-[color:var(--orange-1)]"
                          : "-rotate-90 text-[color:var(--ink-3)]"
                      }`}
                    >
                      <ChevronDown size={18} strokeWidth={2} />
                    </span>
                    <span
                      aria-hidden
                      className="hidden md:block w-2.5 h-2.5 rounded-full border-[1.5px] shrink-0 transition-colors duration-200 ease-out"
                      style={{
                        borderColor:
                          i === pinnedRow
                            ? "var(--orange-1)"
                            : "var(--ink-3)",
                        background:
                          i === pinnedRow ? "var(--orange-1)" : "transparent",
                        opacity: i === pinnedRow ? 1 : 0.4,
                      }}
                    />
                  </button>
                  {isMobileExpanded && (
                    <div className="md:hidden py-4">
                      <DetailPanel
                        active={r}
                        panelKey={`${sectionId}-mobile-${i}`}
                      />
                    </div>
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>

        {showRings && (
          <div className="hidden md:flex order-1 md:order-none col-span-12 md:col-span-5 justify-center">
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

      <div className="hidden md:block mt-10">
        <DetailPanel
          active={active}
          panelKey={`${sectionId}-desktop-${displayRow}`}
        />
      </div>
    </>
  );
}

function DetailPanel({ active, panelKey }: { active: Ring; panelKey: string }) {
  return (
    <div
      key={panelKey}
      className="w-full p-6 rounded-[20px] fade-up border border-[color:var(--veil-2)]"
      style={{ background: "var(--panel)" }}
    >
      <div className="eyebrow text-[color:var(--ink-3)] mb-4">
        {active.role} · {active.org}
      </div>
      {!hasCustomCanvas(active) &&
        (Array.isArray(active.note) ? (
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
        ))}
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

      {active.org.includes("SunLab") && <SunLabCanvas />}
      {active.logo === "/media/logos/NCSALogo.png" && <GuanLabCanvas />}
      {active.logo === "/media/logos/amazonLogo.png" && <AmazonInternCanvas />}
    </div>
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

function EducationList({
  eyebrow,
  entries,
}: {
  eyebrow: string;
  entries: EducationEntry[];
}) {
  return (
    <div>
      <div className="eyebrow text-[color:var(--ink-3)] flex items-center gap-3">
        <span className="inline-block w-8 h-px bg-[color:var(--ink-3)] opacity-60" />
        {eyebrow}
      </div>
      <div className="mt-8 space-y-4">
        {entries.map((e, i) => (
          <div
            key={i}
            className="p-7 md:p-8 rounded-[20px] border border-[color:var(--veil-2)] flex items-start gap-4 md:gap-6"
            style={{ background: "var(--panel)" }}
          >
            {e.logo && (
              <span
                className="w-12 h-12 md:w-20 md:h-20 shrink-0 flex items-center justify-center"
                aria-hidden
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={e.logo}
                  alt={e.institution}
                  className="max-w-full max-h-full object-contain"
                />
              </span>
            )}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-6">
                <h3
                  className="f-display text-[22px] md:text-[26px] leading-[1.25] text-[color:var(--ink)]"
                  style={{ letterSpacing: "-0.015em", fontWeight: 500 }}
                >
                  {e.institution}
                </h3>
                <span className="eyebrow text-[color:var(--ink-3)] shrink-0">
                  {e.dateRange}
                </span>
              </div>
              <div className="mt-3 flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-6">
                <p className="text-[15px] md:text-[17px] leading-[1.5] text-[color:var(--ink-2)]">
                  {e.degree}
                </p>
                <span className="f-mono text-[13px] md:text-[14px] text-[color:var(--ink-2)] shrink-0">
                  {e.gpa}
                </span>
              </div>
              {e.extras && (
                <p className="mt-3 text-[13px] md:text-[14px] leading-[1.6] text-[color:var(--ink-3)]">
                  {e.extras}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PublicationCard({ pub }: { pub: Publication }) {
  return (
    <div
      className="p-6 md:p-7 rounded-[20px] border border-[color:var(--veil-2)] grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
      style={{ background: "var(--panel)" }}
    >
      <div
        className={`min-w-0 ${
          pub.image ? "md:col-span-8" : "md:col-span-12"
        }`}
      >
        <div className="eyebrow text-[color:var(--ink-3)]">{pub.venue}</div>
        <h3 className="f-display mt-3 text-[19px] md:text-[22px] leading-[1.35] text-[color:var(--ink)]">
          {pub.title}
        </h3>
        <p className="mt-3 text-[14px] md:text-[15px] leading-[1.7] text-[color:var(--ink-2)]">
          {pub.authors.map((seg, i) =>
            typeof seg === "string" ? (
              <span key={i}>{seg}</span>
            ) : (
              <strong
                key={i}
                className="font-semibold"
                style={{
                  color: "var(--ink)",
                  background:
                    "linear-gradient(180deg, transparent 62%, rgba(255,139,49,0.30) 62%, rgba(255,139,49,0.30) 92%, transparent 92%)",
                  padding: "0 1px",
                }}
              >
                {seg.highlight}
              </strong>
            ),
          )}
        </p>
        {pub.leaderNote && (
          <p className="mt-2 eyebrow text-[color:var(--orange-1)]">
            {pub.leaderNote}
          </p>
        )}

        {(pub.paperUrl || pub.posterUrl) && (
          <div className="mt-5 flex flex-wrap gap-2.5">
            {pub.paperUrl && (
              <ActionButton href={pub.paperUrl} label="Paper" icon={<FileText size={14} />} />
            )}
            {pub.posterUrl && (
              <ActionButton href={pub.posterUrl} label="Poster" icon={<ImageIcon size={14} />} />
            )}
          </div>
        )}
      </div>

      {pub.image && (
        <a
          href={pub.image.src}
          target="_blank"
          rel="noreferrer"
          className="md:col-span-4 block rounded-[14px] overflow-hidden border border-[color:var(--veil-2)] bg-[var(--ivory)]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={pub.image.src}
            alt={pub.image.alt ?? ""}
            className="w-full h-auto object-contain max-h-[200px] md:max-h-[220px] block"
          />
        </a>
      )}
    </div>
  );
}

function ActionButton({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[color:var(--ink)] text-[color:var(--ink)] text-[13px] f-mono hover:bg-[color:var(--ink)] hover:text-[color:var(--ivory)] transition-colors"
    >
      <span aria-hidden>{icon}</span>
      <span>{label}</span>
    </a>
  );
}
