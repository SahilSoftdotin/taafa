"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Aurora, Container } from "@/components/ui/Aurora";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";

const ease = [0.22, 1, 0.36, 1] as const;

interface Module {
  key: string;
  label: string;
  icon: string;
  headline: string;
  value: string;
  delta: string;
  series: number[];
  kpis: { label: string; value: string }[];
  gauge: number; // 0–100
  gaugeLabel: string;
}

const modules: Module[] = [
  {
    key: "tax",
    label: "Tax",
    icon: "Receipt",
    headline: "Estimated tax position",
    value: "$24,180",
    delta: "saved this year",
    series: [30, 42, 38, 55, 49, 63, 71],
    kpis: [
      { label: "Deductions found", value: "62" },
      { label: "Lodgements on time", value: "100%" },
      { label: "Avg. refund", value: "$3,940" },
    ],
    gauge: 92,
    gaugeLabel: "Tax efficiency",
  },
  {
    key: "wealth",
    label: "Wealth",
    icon: "TrendingUp",
    headline: "Net wealth tracked",
    value: "$1.42M",
    delta: "+12.4% YoY",
    series: [40, 44, 52, 50, 61, 68, 80],
    kpis: [
      { label: "Assets", value: "$1.9M" },
      { label: "Liabilities", value: "$0.48M" },
      { label: "Savings rate", value: "26%" },
    ],
    gauge: 78,
    gaugeLabel: "Goal progress",
  },
  {
    key: "insurance",
    label: "Insurance",
    icon: "ShieldCheck",
    headline: "Protection coverage",
    value: "Fully covered",
    delta: "4 active policies",
    series: [70, 70, 72, 75, 80, 82, 88],
    kpis: [
      { label: "Income protected", value: "85%" },
      { label: "Life cover", value: "$1.2M" },
      { label: "Gaps flagged", value: "0" },
    ],
    gauge: 88,
    gaugeLabel: "Coverage score",
  },
  {
    key: "smsf",
    label: "SMSF",
    icon: "Landmark",
    headline: "Fund balance",
    value: "$684,200",
    delta: "+8.9% return",
    series: [20, 28, 35, 41, 52, 60, 69],
    kpis: [
      { label: "Compliance", value: "Green" },
      { label: "Members", value: "2" },
      { label: "Audit", value: "Clear" },
    ],
    gauge: 95,
    gaugeLabel: "Compliance",
  },
  {
    key: "cashflow",
    label: "Cash Flow",
    icon: "Wallet",
    headline: "Monthly net cashflow",
    value: "+$18,640",
    delta: "vs $14,200 last mo.",
    series: [12, 18, 9, 22, 17, 28, 31],
    kpis: [
      { label: "Inflows", value: "$96k" },
      { label: "Outflows", value: "$77k" },
      { label: "Runway", value: "9.4 mo" },
    ],
    gauge: 74,
    gaugeLabel: "Cashflow health",
  },
  {
    key: "investments",
    label: "Investments",
    icon: "LineChart",
    headline: "Portfolio value",
    value: "$512,900",
    delta: "+6.2% QTD",
    series: [44, 41, 49, 53, 58, 55, 66],
    kpis: [
      { label: "Diversification", value: "High" },
      { label: "Fees", value: "0.4%" },
      { label: "Property", value: "$2.1M" },
    ],
    gauge: 81,
    gaugeLabel: "Allocation health",
  },
];

export function CommandCenter() {
  const [active, setActive] = useState(modules[1]);

  return (
    <section
      id="command-center"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <Aurora className="opacity-60" />
      <Container className="relative">
        <SectionHeading
          align="center"
          eyebrow="The Financial Command Center"
          title={
            <>
              Your whole financial life,{" "}
              <span className="text-gradient">on one screen</span>
            </>
          }
          intro="A glimpse of how TAAF brings tax, wealth, insurance, SMSF, cashflow and investments together — so nothing falls through the cracks. Select a module."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-[260px_1fr]">
          {/* Module rail */}
          <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {modules.map((m) => {
              const isActive = m.key === active.key;
              return (
                <button
                  key={m.key}
                  onClick={() => setActive(m)}
                  className={`group flex shrink-0 items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition-all duration-300 lg:w-full ${
                    isActive
                      ? "glass-strong border-ink-600"
                      : "border-ink-700 hover:border-ink-600 hover:bg-ink-850"
                  }`}
                >
                  <span
                    className={`grid size-10 shrink-0 place-items-center rounded-xl transition-colors ${
                      isActive
                        ? "bg-gradient-to-br from-aurora-indigo to-aurora-violet text-white"
                        : "bg-ink-850 text-aurora-cyan"
                    }`}
                  >
                    <Icon name={m.icon} className="size-5" />
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      isActive ? "text-mist-50" : "text-mist-300"
                    }`}
                  >
                    {m.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Dashboard panel */}
          <div className="glass-strong relative min-h-[420px] overflow-hidden rounded-3xl p-6 md:p-8">
            <div
              aria-hidden
              className="bg-grid pointer-events-none absolute inset-0 opacity-40"
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={active.key}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease }}
                className="relative grid gap-6 md:grid-cols-[1.4fr_1fr]"
              >
                {/* main */}
                <div>
                  <div className="flex items-center gap-2 text-mist-500">
                    <Icon
                      name={active.icon}
                      className="size-4 text-aurora-cyan"
                    />
                    <span className="text-xs uppercase tracking-[0.16em]">
                      {active.label} · live demo
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-mist-400">
                    {active.headline}
                  </p>
                  <p className="mt-1 text-4xl font-semibold text-mist-50">
                    {active.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-aurora-teal">
                    {active.delta}
                  </p>

                  <AreaChart series={active.series} />

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {active.kpis.map((k) => (
                      <div
                        key={k.label}
                        className="rounded-2xl bg-ink-850 p-3"
                      >
                        <p className="text-base font-semibold text-mist-50">
                          {k.value}
                        </p>
                        <p className="mt-0.5 text-[11px] leading-tight text-mist-500">
                          {k.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* gauge */}
                <div className="flex flex-col items-center justify-center gap-4 rounded-3xl bg-ink-850 p-6">
                  <Gauge value={active.gauge} />
                  <p className="text-center text-sm text-mist-400">
                    {active.gaugeLabel}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <p className="mt-5 text-center text-[11px] text-mist-500/70">
          Illustrative interface for the redesign concept — sample data only.
        </p>
      </Container>
    </section>
  );
}

function AreaChart({ series }: { series: number[] }) {
  const max = Math.max(...series);
  const pts = series.map((v, i) => {
    const x = (i / (series.length - 1)) * 100;
    const y = 100 - (v / max) * 88 - 6;
    return [x, y] as const;
  });
  const line = pts.map(([x, y]) => `${x},${y}`).join(" ");
  const area = `0,100 ${line} 100,100`;

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="mt-6 h-32 w-full"
    >
      <defs>
        <linearGradient id="cc-area" x1="0" x2="0" y1="0" y2="1">
          <stop
            offset="0%"
            stopColor="var(--color-aurora-indigo)"
            stopOpacity="0.45"
          />
          <stop
            offset="100%"
            stopColor="var(--color-aurora-indigo)"
            stopOpacity="0"
          />
        </linearGradient>
      </defs>
      <motion.polygon
        key={`area-${line}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        points={area}
        fill="url(#cc-area)"
      />
      <motion.polyline
        key={`line-${line}`}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease }}
        points={line}
        fill="none"
        stroke="var(--color-aurora-cyan)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function Gauge({ value }: { value: number }) {
  const r = 52;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <div className="relative grid place-items-center">
      <svg viewBox="0 0 140 140" className="size-36 -rotate-90">
        <circle
          cx="70"
          cy="70"
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="10"
        />
        <defs>
          <linearGradient id="gauge" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--color-aurora-teal)" />
            <stop offset="100%" stopColor="var(--color-aurora-violet)" />
          </linearGradient>
        </defs>
        <motion.circle
          key={value}
          cx="70"
          cy="70"
          r={r}
          fill="none"
          stroke="url(#gauge)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease }}
        />
      </svg>
      <span className="absolute text-2xl font-semibold text-mist-50">
        {value}
        <span className="text-base text-mist-500">%</span>
      </span>
    </div>
  );
}
