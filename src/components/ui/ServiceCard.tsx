"use client";

import Link from "next/link";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
} from "motion/react";
import { Icon } from "@/components/ui/Icon";
import type { Service, ServiceCategory } from "@/types";

const accents: Record<ServiceCategory, string> = {
  Taxation: "99,102,241", // indigo
  Accounting: "6,182,212", // cyan
  "SMSF & Super": "20,184,166", // teal
  "Financial Planning": "14,165,233", // sky
  Insurance: "217,70,239", // fuchsia
  "Estate Planning": "139,92,246", // violet
  "Property & Lending": "245,158,11", // amber
  "Business Advisory": "251,113,133", // coral
};

/** Gradient card with pointer-driven 3D tilt and a moving glare. */
export function ServiceCard({ service }: { service: Service }) {
  const rgb = accents[service.category];
  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 });
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 });
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const glare = useMotionTemplate`radial-gradient(20rem 20rem at ${gx}% ${gy}%, rgba(${rgb},0.18), transparent 60%)`;

  function onMove(e: React.PointerEvent<HTMLAnchorElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * 12);
    rx.set((0.5 - py) * 12);
    gx.set(px * 100);
    gy.set(py * 100);
  }
  function onLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.div
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className="[transform-style:preserve-3d]"
    >
      <Link
        href={`/services/${service.slug}`}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-3xl border border-ink-700 p-6 shadow-[0_20px_45px_-30px_rgba(30,41,99,0.5)] transition-shadow duration-500 hover:shadow-[0_30px_60px_-28px_rgba(30,41,99,0.6)]"
        style={{
          backgroundImage: `linear-gradient(150deg, rgba(${rgb},0.10), rgba(255,255,255,0.85) 45%, rgba(255,255,255,0.95))`,
        }}
      >
        {/* moving glare */}
        <motion.span
          aria-hidden
          style={{ background: glare }}
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
        {/* top accent bar */}
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-1"
          style={{
            background: `linear-gradient(90deg, rgba(${rgb},0.9), transparent)`,
          }}
        />

        <div className="relative flex items-center justify-between">
          <span
            className="grid size-12 place-items-center rounded-2xl text-white shadow-sm"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(${rgb},1), rgba(${rgb},0.65))`,
            }}
          >
            <Icon name={service.icon} className="size-6" />
          </span>
          <Icon
            name="ArrowUpRight"
            className="size-5 text-mist-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-mist-50"
          />
        </div>

        <div className="relative mt-1">
          <span className="text-[11px] uppercase tracking-[0.16em] text-mist-500">
            {service.category}
          </span>
          <h3 className="mt-1 text-lg font-semibold text-mist-50">
            {service.title}
          </h3>
        </div>
        <p className="relative text-sm leading-relaxed text-mist-400">
          {service.summary}
        </p>
        {!service.verified && (
          <span className="relative mt-auto inline-flex w-fit items-center gap-1.5 rounded-full bg-champagne/10 px-2.5 py-1 text-[10px] text-champagne">
            <Icon name="Sparkles" className="size-3" />
            To confirm with client
          </span>
        )}
      </Link>
    </motion.div>
  );
}
