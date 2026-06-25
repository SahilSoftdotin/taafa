"use client";

import { motion } from "motion/react";
import { Icon } from "@/components/ui/Icon";

const bars = [42, 58, 49, 70, 63, 82, 91];
const ease = [0.22, 1, 0.36, 1] as const;

/** Premium floating "financial dashboard" mockup used in the hero. */
export function HeroDashboard() {
  return (
    <div className="relative mx-auto max-w-md [transform-style:preserve-3d]">
      {/* glow */}
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-aurora-indigo/30 via-aurora-violet/20 to-transparent blur-2xl"
      />

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease }}
        className="glass-strong relative rounded-[2rem] p-5"
      >
        {/* header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-mist-500">
              Net Position
            </p>
            <p className="mt-1 text-2xl font-semibold text-mist-50">
              $1.42M
              <span className="ml-2 text-sm font-medium text-aurora-teal">
                +12.4%
              </span>
            </p>
          </div>
          <span className="grid size-9 place-items-center rounded-xl bg-white/5">
            <Icon name="TrendingUp" className="size-5 text-aurora-cyan" />
          </span>
        </div>

        {/* bar chart */}
        <div className="mt-5 flex h-28 items-end gap-2">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.9, delay: 0.4 + i * 0.08, ease }}
              className="flex-1 rounded-md bg-gradient-to-t from-aurora-indigo/40 to-aurora-violet"
            />
          ))}
        </div>

        {/* mini metric grid */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          {[
            { label: "Tax saved", value: "$24,180", icon: "Receipt" },
            { label: "Super growth", value: "+8.9%", icon: "PiggyBank" },
          ].map((m) => (
            <div key={m.label} className="rounded-2xl bg-white/5 p-3">
              <div className="flex items-center gap-2 text-mist-500">
                <Icon name={m.icon} className="size-3.5 text-aurora-teal" />
                <span className="text-[11px]">{m.label}</span>
              </div>
              <p className="mt-1 text-base font-semibold text-mist-50">
                {m.value}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* floating chip — cashflow */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease, delay: 1 }}
        className="glass absolute -left-8 bottom-10 hidden rounded-2xl p-3 sm:block"
      >
        <p className="text-[10px] uppercase tracking-widest text-mist-500">
          Cashflow
        </p>
        <Sparkline />
      </motion.div>

      {/* floating chip — compliance */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease, delay: 0.5 }}
        className="glass absolute -right-6 top-8 hidden items-center gap-2 rounded-2xl px-3 py-2.5 sm:flex"
      >
        <span className="grid size-7 place-items-center rounded-lg bg-aurora-teal/15">
          <Icon name="ShieldCheck" className="size-4 text-aurora-teal" />
        </span>
        <div>
          <p className="text-xs font-semibold text-mist-50">BAS lodged</p>
          <p className="text-[10px] text-mist-500">On time · ATO</p>
        </div>
      </motion.div>
    </div>
  );
}

function Sparkline() {
  return (
    <svg viewBox="0 0 120 40" className="mt-1 h-10 w-28">
      <defs>
        <linearGradient id="spark" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--color-aurora-cyan)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--color-aurora-cyan)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, ease }}
        d="M2 30 L20 24 L38 28 L56 16 L74 20 L92 8 L118 12"
        fill="none"
        stroke="var(--color-aurora-cyan)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 30 L20 24 L38 28 L56 16 L74 20 L92 8 L118 12 L118 40 L2 40 Z"
        fill="url(#spark)"
      />
    </svg>
  );
}
