"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Container } from "@/components/ui/Aurora";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services, categoryDivision, divisions } from "@/content/services";
import type { Division } from "@/content/services";

const filters: ("All" | Division)[] = ["All", ...divisions];
const ease = [0.22, 1, 0.36, 1] as const;

export function ServicesEcosystem() {
  const [active, setActive] = useState<"All" | Division>("All");
  const visible =
    active === "All"
      ? services
      : services.filter((s) => categoryDivision[s.category] === active);

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
          intro="Accounting Services and Financial Advice — every service works together, on one transparent system."
        />

        {/* Division filter */}
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
          className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
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
                <ServiceCard service={s} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
