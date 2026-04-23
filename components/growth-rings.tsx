"use client";

export function GrowthRings({
  years,
  highlightStart,
  highlightEnd,
  onHoverYear,
  onRingsLeave,
}: {
  years: string[];
  highlightStart: number;
  highlightEnd: number;
  onHoverYear?: (year: number) => void;
  onRingsLeave?: () => void;
}) {
  const count = years.length;
  const size = 460;
  const cx = size / 2;
  const cy = size / 2;

  // Innermost ring sits right at the edge of the center dot (dot r=4, ring r=6)
  // so the oldest year "meets" the dot, per user ask.
  const innerRadius = 6;
  const outerPadding = 36;
  const maxRadius = size / 2 - outerPadding;
  const spacing = count > 1 ? (maxRadius - innerRadius) / (count - 1) : 0;

  // `years` is outer → inner. Reverse so we render innermost first.
  const yearsRev = [...years].reverse();
  const innermostYear = parseInt(yearsRev[0], 10);

  const radiusForYear = (y: number) =>
    innerRadius + (y - innermostYear) * spacing;

  const lo = Math.min(highlightStart, highlightEnd);
  const hi = Math.max(highlightStart, highlightEnd);
  const isRange = lo < hi;
  const innerBoundaryR = radiusForYear(lo);
  const outerBoundaryR = radiusForYear(hi);

  const fillColor = "rgba(255,139,49,0.15)";

  return (
    <div className="relative">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="ring-svg"
        onMouseLeave={onRingsLeave}
      >
        {isRange && (
          <path
            d={
              `M ${cx - outerBoundaryR} ${cy} ` +
              `A ${outerBoundaryR} ${outerBoundaryR} 0 0 1 ${cx + outerBoundaryR} ${cy} ` +
              `A ${outerBoundaryR} ${outerBoundaryR} 0 0 1 ${cx - outerBoundaryR} ${cy} Z ` +
              `M ${cx - innerBoundaryR} ${cy} ` +
              `A ${innerBoundaryR} ${innerBoundaryR} 0 0 1 ${cx + innerBoundaryR} ${cy} ` +
              `A ${innerBoundaryR} ${innerBoundaryR} 0 0 1 ${cx - innerBoundaryR} ${cy} Z`
            }
            fill={fillColor}
            fillRule="evenodd"
          />
        )}

        <circle cx={cx} cy={cy} r="4" fill="var(--ink)" />

        {yearsRev.map((yr, i) => {
          const radius = innerRadius + i * spacing;
          const yearNum = parseInt(yr, 10);
          const isBoundary = isRange
            ? yearNum === lo || yearNum === hi
            : yearNum === lo;

          return (
            <g
              key={`${yr}-${i}`}
              className="ring"
              onMouseEnter={() => onHoverYear?.(yearNum)}
            >
              <circle
                cx={cx}
                cy={cy}
                r={radius}
                fill="none"
                stroke={isBoundary ? "var(--orange-1)" : "var(--green-2)"}
                strokeWidth={isBoundary ? 2 : 1}
                opacity={isBoundary ? 1 : 0.55}
                strokeDasharray={isBoundary ? "0" : "2 3"}
              />
              <text
                x={cx}
                y={cy - radius - 9}
                textAnchor="middle"
                className="f-mono"
                fontSize="10"
                fill={isBoundary ? "var(--orange-1)" : "var(--ink-3)"}
                letterSpacing="1.6"
              >
                {yr}
              </text>
            </g>
          );
        })}

        <circle
          cx={cx}
          cy={cy}
          r={innerRadius + (count - 1) * spacing + 22}
          fill="none"
          stroke="var(--veil)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
