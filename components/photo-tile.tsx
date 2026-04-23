function shade(hex: string, amt: number): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const clamp = (v: number) => Math.max(0, Math.min(255, Math.round(v)));
  const f = (c: number) => clamp(c + amt * 255);
  const to = (v: number) => v.toString(16).padStart(2, "0");
  return `#${to(f(r))}${to(f(g))}${to(f(b))}`;
}

export function PhotoTile({
  tint,
  label,
  meta,
  variant,
}: {
  tint: string;
  label: string;
  meta: string;
  variant?: string;
}) {
  return (
    <div
      className={`photo-tile ${variant || ""}`}
      style={{
        background:
          `radial-gradient(120% 90% at 30% 20%, ${tint}dd 0%, transparent 55%),` +
          `linear-gradient(160deg, ${tint} 0%, ${shade(tint, -0.12)} 100%)`,
      }}
    >
      <div className="absolute inset-0 grain" />
      <svg
        viewBox="0 0 400 500"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          d="M0 380 Q 100 340 200 360 T 400 340 L 400 500 L 0 500 Z"
          fill="rgba(31,68,51,0.18)"
        />
        <path
          d="M0 420 Q 120 400 240 414 T 400 400 L 400 500 L 0 500 Z"
          fill="rgba(31,68,51,0.14)"
        />
      </svg>
      <div className="absolute bottom-3 left-3 right-3 rounded-xl px-3 py-2 bg-[rgba(255,251,240,0.82)] backdrop-blur-sm">
        <div className="text-[12.5px] text-[color:var(--ink)] truncate">{label}</div>
        <div className="eyebrow text-[color:var(--ink-3)] text-[9px] mt-0.5">{meta}</div>
      </div>
    </div>
  );
}
