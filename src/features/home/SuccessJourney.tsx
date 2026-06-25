"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Container } from "@/components/ui/Aurora";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";

const steps = [
  {
    icon: "MapPin",
    title: "Starting position",
    body: "We review where you are today — income, structure, super, debts and goals — with no judgement and full transparency.",
  },
  {
    icon: "Compass",
    title: "Strategy",
    body: "Together we map a clear plan: the right structure, the tax efficiencies, the cover and the milestones that matter.",
  },
  {
    icon: "Rocket",
    title: "Execution",
    body: "We do the work — lodgements, setup, advice and admin — and keep you informed in plain English at every step.",
  },
  {
    icon: "TrendingUp",
    title: "Growth",
    body: "We review, refine and compound. As your life and business evolve, your plan keeps moving you forward.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function SuccessJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 80%"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Client Success Journey"
          title={
            <>
              From where you are to{" "}
              <span className="text-gradient">where you want to be</span>
            </>
          }
          intro="A simple, proven path — and a partner beside you the whole way."
        />

        <div ref={ref} className="relative mt-16">
          {/* Connecting path (desktop) */}
          <svg
            aria-hidden
            viewBox="0 0 1000 120"
            preserveAspectRatio="none"
            className="absolute left-0 top-12 hidden h-24 w-full lg:block"
          >
            <path
              d="M40 90 C 240 10, 260 10, 460 60 S 760 110, 960 30"
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="2"
              strokeDasharray="2 8"
            />
            <motion.path
              d="M40 90 C 240 10, 260 10, 460 60 S 760 110, 960 30"
              fill="none"
              stroke="url(#journey)"
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ pathLength }}
            />
            <defs>
              <linearGradient id="journey" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="var(--color-aurora-teal)" />
                <stop offset="50%" stopColor="var(--color-aurora-indigo)" />
                <stop offset="100%" stopColor="var(--color-aurora-violet)" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid gap-6 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease }}
                className="relative"
              >
                <div className="glass relative flex h-full flex-col gap-4 rounded-3xl p-6">
                  <div className="flex items-center gap-3">
                    <span className="relative grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-aurora-indigo to-aurora-violet text-white">
                      <Icon name={s.icon} className="size-6" />
                      <span className="absolute inset-0 rounded-2xl ring-1 ring-white/20" />
                    </span>
                    <span className="font-mono text-sm text-mist-500">
                      Step {i + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-mist-50">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-mist-400">
                    {s.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
