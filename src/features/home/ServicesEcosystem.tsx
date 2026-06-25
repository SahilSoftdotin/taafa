"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Container } from "@/components/ui/Aurora";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { categoryOrder, services } from "@/content/services";
import type { ServiceCategory } from "@/types";

const filters: ("All" | ServiceCategory)[] = ["All", ...categoryOrder];
const ease = [0.22, 1, 0.36, 1] as const;

export function ServicesEcosystem() {
  const [active, setActive] = useState<"All" | ServiceCategory>("All");
  const visible =
    active === "All" ? services : services.filter((s) => s.category === active);

  return (
    <section id="services" className="relative py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Services Ecosystem"
          title={
            <>
              One partner for your <span className="text-gradient">entire</span>{" "}
              financial universe
            </>
          }
          intro="From a single tax return to running your SMSF and protecting your family — every service below works together, on one transparent system."
        />

        {/* Category filter */}
        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                active === f
                  ? "border-transparent bg-gradient-to-r from-aurora-indigo to-aurora-violet text-white"
                  : "border-ink-700 text-mist-300 hover:border-ink-600 hover:text-mist-50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards */}
        <motion.div
          layout
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((s) => (
              <motion.div
                key={s.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease }}
              >
                <Link
                  href={`/services/${s.slug}`}
                  className="border-aurora group relative flex h-full flex-col gap-3 overflow-hidden rounded-3xl glass p-6 transition-transform duration-500 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl bg-ink-850 text-aurora-cyan transition-colors duration-300 group-hover:bg-aurora-indigo/20">
                      <Icon name={s.icon} className="size-6" />
                    </span>
                    <Icon
                      name="ArrowUpRight"
                      className="size-5 text-mist-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-mist-50"
                    />
                  </div>
                  <div className="mt-1">
                    <span className="text-[11px] uppercase tracking-[0.16em] text-mist-500">
                      {s.category}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-mist-50">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-mist-400">
                    {s.summary}
                  </p>
                  {!s.verified && (
                    <span className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-full bg-champagne/10 px-2.5 py-1 text-[10px] text-champagne">
                      <Icon name="Sparkles" className="size-3" />
                      To confirm with client
                    </span>
                  )}
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
