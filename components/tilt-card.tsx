"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, type CSSProperties, type ReactNode } from "react";

export function TiltCard({
  children,
  className,
  style,
  maxTilt = 9,
  glint = false,
  liftZ = 0,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  maxTilt?: number;
  glint?: boolean;
  liftZ?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const hover = useMotionValue(0);

  const spring = { stiffness: 190, damping: 20, mass: 0.55 };
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [maxTilt, -maxTilt]), spring);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-maxTilt, maxTilt]), spring);
  const z = useSpring(useTransform(hover, [0, 1], [0, liftZ]), spring);

  // Card-wide directional sheen that sweeps across the surface as the tilt
  // angle changes. Position moves opposite the cursor — mimicking how a
  // reflection drifts across a real glass panel being rotated in the hand.
  // Range kept inside [25%, 75%] so with a 200% background the peak is
  // always within the card (never pans off when the cursor nears an edge).
  const sheenX = useTransform(mx, [-0.5, 0.5], [25, 75]);
  const sheenY = useTransform(my, [-0.5, 0.5], [25, 75]);
  const sheenPos = useMotionTemplate`${sheenX}% ${sheenY}%`;
  const glintOpacity = useSpring(hover, { stiffness: 140, damping: 22 });

  if (reduce) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onEnter = () => hover.set(1);
  const onLeave = () => {
    mx.set(0);
    my.set(0);
    hover.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{ ...style, rotateX, rotateY, z, willChange: "transform" }}
    >
      {children}
      {glint && (
        <motion.div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            pointerEvents: "none",
            backgroundImage:
              "linear-gradient(125deg, " +
              "rgba(218, 224, 234, 0.22) 0%, " +
              "rgba(236, 241, 248, 0.55) 35%, " +
              "rgba(250, 252, 255, 0.88) 50%, " +
              "rgba(236, 241, 248, 0.55) 65%, " +
              "rgba(218, 224, 234, 0.22) 100%)",
            backgroundSize: "200% 200%",
            backgroundPosition: sheenPos,
            backgroundRepeat: "no-repeat",
            opacity: glintOpacity,
          }}
        />
      )}
    </motion.div>
  );
}
