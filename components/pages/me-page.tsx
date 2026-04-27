"use client";

import dynamic from "next/dynamic";
import { Fragment } from "react";
import { Camera, CodeXml, Rocket } from "lucide-react";
import { useT } from "@/components/providers/i18n-provider";
import { AIPersona } from "@/components/ai-persona";
import { TiltCard } from "@/components/tilt-card";
import type { BioPara, BioSeg } from "@/lib/dict";

const WorldMap = dynamic(
  () => import("@/components/world-map").then((m) => m.WorldMap),
  {
    ssr: false,
    loading: () => (
      <div
        className="relative overflow-hidden card w-full"
        style={{
          background: "linear-gradient(165deg, #F6F8F3 0%, #EEF3EB 100%)",
          aspectRatio: "980 / 520",
        }}
      />
    ),
  }
);

function renderSeg(seg: BioSeg, i: number) {
  if (typeof seg === "string") return <span key={i}>{seg}</span>;
  if ("href" in seg) {
    return (
      <a
        key={i}
        href={seg.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[color:var(--ink)] underline decoration-[color:var(--veil)] decoration-1 underline-offset-[3px] hover:text-[color:var(--orange-1)] hover:decoration-[color:var(--orange-1)] transition-colors"
      >
        {seg.t}
      </a>
    );
  }
  return <em key={i}>{seg.em}</em>;
}

const ROLE_ICON_GLYPHS = [Rocket, CodeXml, Camera] as const;

function RoleIcons({ roleLine }: { roleLine: string }) {
  const labels = roleLine.split(" · ");
  return (
    <div className="md:hidden mt-auto pt-5 flex items-center justify-between gap-2">
      {labels.map((label, i) => {
        const Icon = ROLE_ICON_GLYPHS[i] ?? ROLE_ICON_GLYPHS[ROLE_ICON_GLYPHS.length - 1];
        return (
          <Fragment key={i}>
            {i > 0 && (
              <span aria-hidden className="self-stretch w-px bg-[color:var(--ink-3)]/30" />
            )}
            <div className="flex flex-col items-center gap-1">
              <Icon size={15} strokeWidth={1.5} className="text-[color:var(--ink-2)]" />
              <span
                className="f-mono text-[7.5px] tracking-[0.04em] uppercase text-[color:var(--ink-3)] text-center leading-[1.1] max-w-[80px]"
                style={{ fontWeight: 500 }}
              >
                {label}
              </span>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}

function renderBio(bio: BioPara[]) {
  return bio.map((para, i) => (
    <p
      key={i}
      className={`${
        i === 0
          ? "mt-8 text-[17px] md:text-[18px] leading-[1.75]"
          : "mt-5 text-[16px] md:text-[17px] leading-[1.8]"
      } text-[color:var(--ink-2)] max-w-[62ch]`}
    >
      {para.map(renderSeg)}
    </p>
  ));
}

export function MePage() {
  const { t, lang } = useT();
  const nameFirstFont =
    lang === "zh" ? "var(--font-cn), serif" : undefined;

  return (
    <div className="fade-up">
      <section className="zen-bg pt-36 md:pt-40 pb-16">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="hidden md:flex eyebrow text-[color:var(--ink-3)] items-center gap-3">
            <span className="inline-block w-8 h-px bg-[color:var(--ink-3)] opacity-60" />
            {t.meEyebrow}
          </div>

          <div className="mt-0 md:mt-8 grid grid-cols-12 gap-x-4 md:gap-x-10 gap-y-6 md:gap-y-0 items-stretch md:items-start">
            <div className="order-1 col-span-6 md:col-span-7 md:col-start-1 md:row-start-1 min-w-0 flex flex-col">
              <div className="md:hidden eyebrow text-[color:var(--ink-3)] flex items-center gap-3 mb-4">
                <span className="inline-block w-6 h-px bg-[color:var(--ink-3)] opacity-60" />
                {t.meEyebrow}
              </div>
              <h1
                className="f-display text-[clamp(28px,8vw,56px)] md:text-[clamp(56px,8.4vw,132px)] leading-[0.92] text-[color:var(--ink)]"
                style={{ letterSpacing: "-0.035em", fontFamily: nameFirstFont, fontWeight: 700 }}
              >
                {t.nameFirst}
                {lang === "zh" ? (
                  <>
                    {" "}
                    <span
                      className="f-display"
                      style={{
                        fontSize: "0.42em",
                        verticalAlign: "0.22em",
                        fontWeight: 400,
                        letterSpacing: "-0.01em",
                        color: "var(--ink-3)",
                      }}
                    >
                      {t.nameSecond}
                    </span>
                  </>
                ) : null}
              </h1>
              {lang === "en" && (
                <div
                  className="f-display text-[clamp(14px,4vw,22px)] md:text-[clamp(22px,2.6vw,36px)] leading-[1] mt-3 md:mt-2 text-[color:var(--ink-3)]"
                  style={{ letterSpacing: "-0.02em", fontWeight: 400 }}
                >
                  {t.nameSecond}
                </div>
              )}
              <span aria-hidden className="md:hidden mt-4 w-10 h-px bg-[color:var(--ink-3)]/40" />
              <RoleIcons roleLine={t.roleLine} />
              <div className="hidden md:block eyebrow mt-5 text-[color:var(--ink-3)]">{t.roleLine}</div>
            </div>

            <div
              className="order-2 col-span-6 md:col-span-5 md:col-start-8 md:row-start-1 md:row-span-2 flex flex-col items-center md:gap-6 md:sticky md:top-24"
              style={{ perspective: "1000px" }}
            >
              <TiltCard className="relative w-full aspect-[4/5] md:w-[360px] md:h-[440px] md:max-w-none md:aspect-auto">
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    borderRadius: "36px",
                    filter: "blur(40px)",
                    background:
                      "radial-gradient(60% 55% at 50% 55%, rgba(216,231,219,0.75) 0%, transparent 72%)",
                    transform: "translateY(18px) scale(0.96)",
                  }}
                />
                <div
                  className="relative w-full h-full"
                  style={{
                    borderRadius: "28px",
                    padding: "10px",
                    background: "rgba(255,255,255,0.55)",
                    backdropFilter: "blur(30px) saturate(220%)",
                    WebkitBackdropFilter: "blur(30px) saturate(220%)",
                    border: "1px solid rgba(255,255,255,0.65)",
                    boxShadow: [
                      "inset 0 1px 0 rgba(255,255,255,0.85)",
                      "inset 0 0 0 0.5px rgba(255,255,255,0.35)",
                      "0 30px 60px -20px rgba(31,68,51,0.32)",
                      "0 14px 28px -14px rgba(31,68,51,0.22)",
                    ].join(", "),
                  }}
                >
                  <div
                    className="relative w-full h-full overflow-hidden"
                    style={{ borderRadius: "20px" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/media/me.jpg"
                      alt="Jingtang (Arthur) Ma"
                      className="absolute inset-0 w-full h-full"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center top",
                        transform: "translate(6.5%, 0) scale(1.26)",
                        transformOrigin: "center top",
                      }}
                    />
                  </div>
                </div>
              </TiltCard>

              <TiltCard
                glint
                liftZ={12}
                className="hidden md:block relative w-full md:w-[360px] md:max-w-none"
                style={{
                  borderRadius: "28px",
                  padding: "10px",
                  background: "rgba(255,255,255,0.55)",
                  backdropFilter: "blur(30px) saturate(220%)",
                  WebkitBackdropFilter: "blur(30px) saturate(220%)",
                  border: "1px solid rgba(255,255,255,0.65)",
                  boxShadow: [
                    "inset 0 1px 0 rgba(255,255,255,0.9)",
                    "inset 0 0 0 0.5px rgba(255,255,255,0.4)",
                    "0 44px 86px -28px rgba(31,68,51,0.36)",
                    "0 20px 40px -18px rgba(31,68,51,0.22)",
                    "0 6px 14px -8px rgba(31,68,51,0.14)",
                  ].join(", "),
                }}
              >
                <div
                  className="relative px-5 py-5 md:px-6 md:py-6"
                  style={{ borderRadius: "20px" }}
                >
                  <blockquote
                    className={
                      lang === "zh"
                        ? "text-[15px] md:text-[17px] leading-[1.7] text-[color:var(--ink)]"
                        : "f-display text-[15px] md:text-[17px] leading-[1.55] text-[color:var(--ink)]"
                    }
                    style={
                      lang === "zh"
                        ? { fontFamily: "var(--font-cn), serif", fontWeight: 400 }
                        : undefined
                    }
                  >
                    {t.meQuote}
                  </blockquote>
                  <div className="mt-3 eyebrow text-[color:var(--ink-3)]">
                    — Arthur Ma
                  </div>
                </div>
              </TiltCard>
            </div>

            <div
              className="order-3 col-span-12 md:hidden"
              style={{ perspective: "1000px" }}
            >
              <TiltCard
                glint
                liftZ={12}
                className="relative w-full"
                style={{
                  borderRadius: "28px",
                  padding: "10px",
                  background: "rgba(255,255,255,0.55)",
                  backdropFilter: "blur(30px) saturate(220%)",
                  WebkitBackdropFilter: "blur(30px) saturate(220%)",
                  border: "1px solid rgba(255,255,255,0.65)",
                  boxShadow: [
                    "inset 0 1px 0 rgba(255,255,255,0.9)",
                    "inset 0 0 0 0.5px rgba(255,255,255,0.4)",
                    "0 44px 86px -28px rgba(31,68,51,0.36)",
                    "0 20px 40px -18px rgba(31,68,51,0.22)",
                    "0 6px 14px -8px rgba(31,68,51,0.14)",
                  ].join(", "),
                }}
              >
                <div
                  className="relative px-5 py-5"
                  style={{ borderRadius: "20px" }}
                >
                  <blockquote
                    className={
                      lang === "zh"
                        ? "text-[15px] leading-[1.7] text-[color:var(--ink)]"
                        : "f-display text-[15px] leading-[1.55] text-[color:var(--ink)]"
                    }
                    style={
                      lang === "zh"
                        ? { fontFamily: "var(--font-cn), serif", fontWeight: 400 }
                        : undefined
                    }
                  >
                    {t.meQuote}
                  </blockquote>
                  <div className="mt-3 eyebrow text-[color:var(--ink-3)]">
                    — Arthur Ma
                  </div>
                </div>
              </TiltCard>
            </div>

            <div className="order-4 col-span-12 md:col-span-7 md:col-start-1 md:row-start-2">
              {renderBio(t.bio)}
            </div>
          </div>

          <div className="mt-16 md:mt-24">
            <div className="text-center mb-8 md:mb-10">
              <h2
                className="f-display text-[clamp(40px,5.6vw,72px)] leading-[1.02] text-[color:var(--ink)]"
                style={{ letterSpacing: "-0.03em", fontWeight: 600 }}
              >
                {t.mapEyebrow}
              </h2>
              <p
                className="mt-4 text-[18px] md:text-[22px] leading-[1.5] text-[color:var(--ink-3)]"
                style={
                  lang === "zh"
                    ? { fontFamily: "var(--font-cn), serif", fontWeight: 400 }
                    : undefined
                }
              >
                {t.mapLead}
              </p>
            </div>
            <div className="overflow-x-auto -mx-2 px-2 md:mx-0 md:px-0">
              <div className="min-w-[640px] md:min-w-0">
                <WorldMap
                  current={t.currentCity}
                  visited={t.visited}
                  future={t.future}
                  labels={{
                    current: t.mapCurrent,
                    visited: t.mapVisited,
                    future: t.mapFuture,
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </section>
      <AIPersona
        videos={[
          { src: "/media/kling.mp4", label: "KlingAI" },
          { src: "/media/veo.mp4", label: "VEO", note: t.aiVeoNote },
        ]}
      />
    </div>
  );
}
