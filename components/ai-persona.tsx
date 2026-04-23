"use client";

import { useT } from "@/components/providers/i18n-provider";
import { PlayIcon } from "@/components/icons/play-icon";

type VideoItem = { src: string; label?: string; note?: string };

export function AIPersona({ videos }: { videos?: VideoItem[] } = {}) {
  const { t } = useT();
  const hasVideos = Array.isArray(videos) && videos.length > 0;

  if (hasVideos) {
    return (
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-20 pb-28">
        <div
          className="relative rounded-[36px] overflow-hidden card p-8 md:p-12 grain"
          style={{ background: "linear-gradient(165deg, #F4F4EE 0%, #E9EEE8 100%)" }}
        >
          <h2
            className="f-display text-center text-[clamp(34px,4.8vw,60px)] leading-[1.05] text-[color:var(--ink)]"
            style={{ letterSpacing: "-0.03em", fontWeight: 600 }}
          >
            Arthur&rsquo;s Persona
            <span
              className="f-mono inline-block align-middle ml-3 text-[color:var(--ink-3)]"
              style={{
                fontSize: "0.32em",
                letterSpacing: "0.1em",
                fontWeight: 500,
                verticalAlign: "0.22em",
              }}
            >
              (Beta)
            </span>
          </h2>

          <div className="mt-10 md:mt-12 flex flex-col items-center gap-6 md:gap-8">
            {videos!.map((v, i) => (
              <div key={i} className="relative inline-block max-w-full">
                <video
                  controls
                  loop
                  playsInline
                  preload="auto"
                  src={`${v.src}#t=0.05`}
                  className="rounded-[20px] border border-[color:var(--veil)]"
                  style={{
                    display: "block",
                    maxHeight: "70vh",
                    maxWidth: "100%",
                    width: "auto",
                    height: "auto",
                  }}
                />
                {v.label && (
                  <span
                    className="f-mono absolute top-3 left-3 px-2.5 py-1 rounded-full select-none pointer-events-none"
                    style={{
                      fontSize: "10.5px",
                      letterSpacing: "0.14em",
                      color: "var(--orange-1)",
                      background: "rgba(0,0,0,0.32)",
                      backdropFilter: "blur(8px) saturate(140%)",
                      WebkitBackdropFilter: "blur(8px) saturate(140%)",
                      border: "1px solid rgba(255,139,49,0.35)",
                    }}
                  >
                    {v.label}
                  </span>
                )}
                {v.note && (
                  <div
                    className="hidden md:flex absolute top-1/2 left-full -translate-y-1/2 ml-6 items-center gap-2 whitespace-nowrap pointer-events-none select-none"
                  >
                    <svg
                      viewBox="0 0 90 60"
                      width="72"
                      height="48"
                      fill="none"
                      aria-hidden
                      style={{ flexShrink: 0 }}
                    >
                      <path
                        d="M82 10 C66 6, 48 12, 42 28 C38 42, 58 50, 32 48 L20 44"
                        stroke="var(--orange-1)"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        fill="none"
                      />
                      <path
                        d="M20 44 L28 38 M20 44 L26 52"
                        stroke="var(--orange-1)"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                    <span
                      style={{
                        fontFamily:
                          "var(--font-caveat), var(--font-cn), 'Patrick Hand', cursive",
                        fontSize: "22px",
                        fontWeight: 600,
                        lineHeight: 1.15,
                        color: "var(--ink)",
                        transform: "rotate(-3deg)",
                        transformOrigin: "left center",
                      }}
                    >
                      {v.note}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-20 pb-28">
      <div
        className="relative rounded-[36px] overflow-hidden card p-8 md:p-12 grain"
        style={{ background: "linear-gradient(165deg, #F4F4EE 0%, #E9EEE8 100%)" }}
      >
        <div className="grid grid-cols-12 gap-8 items-center relative">
          <div className="col-span-12 md:col-span-7 relative">
            <div
              className="relative w-full aspect-[16/9] rounded-[28px] overflow-hidden border border-[color:var(--veil)]"
              style={{
                background:
                  "radial-gradient(60% 70% at 30% 30%, rgba(76,151,109,0.28) 0%, transparent 60%)," +
                  "linear-gradient(165deg, #2A5A43 0%, #1F4433 55%, #153226 100%)",
              }}
            >
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{ background: "radial-gradient(circle at 50% 50%, white 0%, transparent 60%)" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="play-puck" aria-label={t.aiPlay}>
                  <PlayIcon />
                </button>
              </div>
              <div className="absolute top-4 left-4 eyebrow text-[rgba(255,251,240,0.72)]">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[color:var(--orange-1)] mr-2 align-middle" />
                {t.aiBadge}
              </div>
              <div className="absolute bottom-4 right-4 eyebrow text-[rgba(255,251,240,0.6)]">
                {t.aiMeta}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-[rgba(255,139,49,0.6)]" />
            </div>
          </div>

          <div className="col-span-12 md:col-span-5">
            <div className="eyebrow text-[color:var(--ink-3)]">{t.aiBadge}</div>
            <h3 className="f-display text-[36px] md:text-[44px] leading-[1.02] text-[color:var(--ink)] mt-3">
              {t.aiTitle}
            </h3>
            <p className="mt-3 text-[15px] leading-[1.7] text-[color:var(--ink-2)] max-w-[36ch]">
              {t.aiSubtitle}
            </p>
            <button className="pill mt-6">
              <PlayIcon size={14} />
              {t.aiPlay}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
