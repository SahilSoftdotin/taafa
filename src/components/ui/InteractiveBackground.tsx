"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
} from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Vibrant, cursor-reactive background layer. A soft multi-colour spotlight
 * follows the pointer over drifting aurora blobs — tuned for the light theme.
 * Purely decorative; respects reduced-motion via the global CSS rule.
 */
export function InteractiveBackground({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(50);
  const my = useMotionValue(30);
  const x = useSpring(mx, { stiffness: 120, damping: 30, mass: 0.4 });
  const y = useSpring(my, { stiffness: 120, damping: 30, mass: 0.4 });

  const spotlight = useMotionTemplate`radial-gradient(38rem 38rem at ${x}% ${y}%, rgba(99,102,241,0.22), transparent 60%), radial-gradient(28rem 28rem at calc(${x}% + 14%) calc(${y}% + 18%), rgba(217,70,239,0.16), transparent 60%), radial-gradient(32rem 32rem at calc(${x}% - 16%) calc(${y}% + 8%), rgba(20,184,166,0.18), transparent 60%)`;

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      className={cn("relative", className)}
    >
      {/* base wash + drifting blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-[-15%] size-[55vw] rounded-full bg-aurora-indigo/15 blur-[130px] animate-aurora-drift" />
        <div className="absolute right-[-12%] top-[0%] size-[42vw] rounded-full bg-fuchsia/12 blur-[140px] animate-aurora-drift [animation-delay:-6s]" />
        <div className="absolute bottom-[-25%] left-1/3 size-[48vw] rounded-full bg-aurora-teal/14 blur-[150px] animate-aurora-drift [animation-delay:-3s]" />
        <div className="absolute right-[10%] bottom-[-15%] size-[34vw] rounded-full bg-amber/10 blur-[140px] animate-aurora-drift [animation-delay:-9s]" />
      </div>
      {/* cursor spotlight */}
      <motion.div
        aria-hidden
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0"
      />
      {/* dotted grid + readability fade */}
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
      {children}
    </div>
  );
}
