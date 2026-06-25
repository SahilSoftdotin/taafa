"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Aurora";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { locations } from "@/content/company";

// Approximate plot positions on the stylised map (percent).
const pinPos = [
  { left: "62%", top: "58%" }, // Toukley
  { left: "48%", top: "40%" }, // Newcastle
  { left: "34%", top: "52%" }, // Cessnock
];

export function Locations() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Where we are"
          title={
            <>
              Local to the <span className="text-gradient">Central Coast</span>
            </>
          }
          intro="Based in Toukley, serving individuals and businesses across the region. Prefer to meet remotely? We do that too."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          {/* Location list */}
          <div className="flex flex-col gap-3">
            {locations.map((loc, i) => (
              <button
                key={loc.name}
                onClick={() => setActive(i)}
                className={`group flex items-start gap-4 rounded-3xl border p-5 text-left transition-all duration-300 ${
                  active === i
                    ? "glass-strong border-ink-600"
                    : "border-ink-700 hover:border-ink-600 hover:bg-ink-850"
                }`}
              >
                <span
                  className={`mt-0.5 grid size-10 shrink-0 place-items-center rounded-xl ${
                    loc.verified
                      ? "bg-gradient-to-br from-aurora-indigo to-aurora-violet text-white"
                      : "bg-ink-850 text-mist-400"
                  }`}
                >
                  <Icon name="MapPin" className="size-5" />
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-mist-50">
                      {loc.name}
                    </h3>
                    {loc.primary && (
                      <span className="rounded-full bg-aurora-teal/15 px-2 py-0.5 text-[10px] font-medium text-aurora-teal">
                        Head office
                      </span>
                    )}
                    {!loc.verified && (
                      <span className="rounded-full bg-champagne/10 px-2 py-0.5 text-[10px] text-champagne">
                        To confirm
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-mist-400">{loc.address}</p>
                  {loc.verified && loc.mapUrl !== "#" && (
                    <a
                      href={loc.mapUrl}
                      className="mt-2 inline-flex items-center gap-1 text-xs text-aurora-cyan hover:underline"
                    >
                      View on map
                      <Icon name="ArrowUpRight" className="size-3" />
                    </a>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Stylised map */}
          <div className="glass-strong relative min-h-[360px] overflow-hidden rounded-3xl">
            <div className="bg-grid absolute inset-0 opacity-50" aria-hidden />
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(60%_60%_at_55%_50%,rgba(99,102,241,0.18),transparent_70%)]"
            />
            {/* coastline-ish flourish */}
            <svg
              viewBox="0 0 400 300"
              className="absolute inset-0 h-full w-full opacity-40"
              aria-hidden
            >
              <path
                d="M40 260 C 120 230, 150 180, 220 170 S 330 120, 360 40"
                fill="none"
                stroke="rgba(45,212,191,0.5)"
                strokeWidth="1.5"
                strokeDasharray="3 6"
              />
            </svg>

            {locations.map((loc, i) => (
              <button
                key={loc.name}
                onClick={() => setActive(i)}
                style={pinPos[i]}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                aria-label={loc.name}
              >
                {active === i && (
                  <span className="absolute left-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-aurora-cyan/40 animate-pulse-ring" />
                )}
                <motion.span
                  whileHover={{ scale: 1.2 }}
                  className={`relative grid size-7 place-items-center rounded-full border-2 ${
                    loc.verified
                      ? "border-white/70 bg-aurora-indigo"
                      : "border-ink-600 bg-ink-700"
                  } ${active === i ? "ring-4 ring-aurora-cyan/30" : ""}`}
                >
                  <Icon name="MapPin" className="size-3.5 text-white" />
                </motion.span>
                <span className="mt-1 block whitespace-nowrap text-center text-[11px] font-medium text-mist-200">
                  {loc.name}
                </span>
              </button>
            ))}

            <div className="absolute bottom-4 left-4 rounded-xl bg-ink-950/60 px-3 py-2 text-[11px] text-mist-400 backdrop-blur">
              <Icon
                name="MapPin"
                className="mr-1 inline size-3 text-aurora-cyan"
              />
              {locations[active].name} ·{" "}
              {locations[active].verified ? "Active" : "Placeholder"}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
