"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

type Pin = { name: string; coords: [number, number] };

type Tone = "current" | "visited" | "future";

const TONE = {
  current: { fill: "var(--green-1)", r: 5, halo: 9 },
  visited: { fill: "var(--amber)",   r: 3.5, halo: 7 },
  future:  { fill: "#D946EF",        r: 4.5, halo: 10 },
} as const;

// Pale country-fill washes keyed to each tone.
const TONE_BG = {
  current: { fill: "#C9E0CF", hover: "#B6D3BE" },
  visited: { fill: "#F2DFB8", hover: "#E6CF9E" },
  future:  { fill: "#F0D4EE", hover: "#E4BFE1" },
} as const;

// Natural Earth country names (as they appear in world-atlas 110m) → tone.
// Hong Kong is merged into China at 110m resolution, so the tint comes from China.
const COUNTRY_TONE: Record<string, keyof typeof TONE_BG> = {
  "United States of America": "current",
  "United States": "current",
  Canada: "visited",
  China: "visited",
  Japan: "visited",
  "South Korea": "visited",
  "Korea, South": "visited",
  "Republic of Korea": "visited",
  Thailand: "visited",
  Vietnam: "visited",
  Taiwan: "visited",
  Egypt: "visited",
  Kenya: "visited",
  Namibia: "future",
  Philippines: "future",
};

export function WorldMap({
  current,
  visited,
  future,
  labels,
}: {
  current: Pin;
  visited: Pin[];
  future: Pin[];
  labels: { current: string; visited: string; future: string };
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<string | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const renderPin = (p: Pin, tone: Tone, keyPrefix: string) => {
    const tc = TONE[tone];
    const key = `${keyPrefix}-${p.name}`;
    const isHover = hover === key;
    return (
      <Marker
        key={key}
        coordinates={p.coords}
        onMouseEnter={() => setHover(key)}
        onMouseLeave={() => setHover((h) => (h === key ? null : h))}
      >
        <motion.g
          initial={{ scale: 1 }}
          animate={{ scale: isHover ? 1.28 : 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        >
          {tone === "future" && (
            <circle
              r={tc.halo + 4}
              fill="none"
              stroke={tc.fill}
              strokeWidth={1}
              strokeDasharray="3 3"
              opacity={0.65}
            />
          )}
          <circle r={tc.halo} fill={tc.fill} opacity={0.18} />
          <circle
            r={tc.r}
            fill={isHover ? "var(--orange-1)" : tc.fill}
            stroke="#FBFBF7"
            strokeWidth={1.2}
            style={{ transition: "fill .3s" }}
          />
          {isHover && (
            <text
              textAnchor="middle"
              y={-(tc.halo + 6)}
              className="f-mono"
              style={{
                fontSize: 10,
                fill: "var(--ink)",
                letterSpacing: "0.08em",
                paintOrder: "stroke",
                stroke: "#FBFBF7",
                strokeWidth: 3,
              }}
            >
              {p.name}
            </text>
          )}
        </motion.g>
      </Marker>
    );
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden card p-3 md:p-5"
      style={{
        background: [
          "radial-gradient(900px 560px at 12% 8%, #F3F8EF 0%, transparent 62%)",
          "radial-gradient(720px 460px at 92% 92%, #ECF1E5 0%, transparent 65%)",
          "radial-gradient(520px 360px at 50% 50%, #F6F8F3 0%, transparent 72%)",
          "linear-gradient(165deg, #F4F7F0 0%, #EDF2E7 100%)",
        ].join(","),
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6), inset 0 0 0 1px rgba(31,68,51,0.04)",
        overscrollBehavior: "contain",
        touchAction: "none",
      }}
    >
      <div className="eyebrow text-[color:var(--ink-3)] absolute top-4 left-5 z-10 flex flex-wrap items-center gap-x-4 gap-y-1">
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 rounded-full" style={{ background: TONE.current.fill }} />
          {labels.current}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 rounded-full" style={{ background: TONE.visited.fill }} />
          {labels.visited}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 rounded-full" style={{ background: TONE.future.fill }} />
          {labels.future}
        </span>
      </div>

      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{ scale: 165 }}
        width={980}
        height={520}
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <ZoomableGroup center={[0, 15]} zoom={1} minZoom={1} maxZoom={8}>
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const name =
                  (geo.properties as { name?: string } | undefined)?.name ?? "";
                const tone = COUNTRY_TONE[name];
                const fill = tone ? TONE_BG[tone].fill : "#DDE6D9";
                const hoverFill = tone ? TONE_BG[tone].hover : "#C9DBC4";
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: { fill, stroke: "#FBFBF7", strokeWidth: 0.6, outline: "none" },
                      hover:   { fill: hoverFill, stroke: "#FBFBF7", strokeWidth: 0.6, outline: "none" },
                      pressed: { fill: hoverFill, stroke: "#FBFBF7", strokeWidth: 0.6, outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>

          {renderPin(current, "current", "cur")}
          {visited.map((p) => renderPin(p, "visited", "vis"))}
          {future.map((p) => renderPin(p, "future", "fut"))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}
