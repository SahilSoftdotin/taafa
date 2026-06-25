"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Icon } from "@/components/ui/Icon";
import { Eyebrow } from "@/components/ui/SectionHeading";

const pillars = [
  {
    icon: "ShieldCheck",
    title: "Transparency",
    body: "Fixed-fee quotes and plain-English reporting. You always know what you're paying and exactly where you stand.",
  },
  {
    icon: "Compass",
    title: "Expertise",
    body: "Registered tax agents and a Xero Platinum Champion Partner — depth across tax, super, insurance and advice.",
  },
  {
    icon: "Handshake",
    title: "Trust",
    body: "A genuine local relationship on the Central Coast. We answer the phone, and we explain the 'why'.",
  },
  {
    icon: "TrendingUp",
    title: "Long-term partnership",
    body: "We think in years, not just tax seasons — building a plan that compounds as your life and business grow.",
  },
  {
    icon: "CheckCircle2",
    title: "Compliance",
    body: "Accurate, on-time lodgements aligned to current ATO requirements. Fewer surprises, less risk.",
  },
  {
    icon: "Rocket",
    title: "Growth",
    body: "Advice that moves you forward — smarter structures, healthier cashflow and a clear path to your goals.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function WhyTaaf() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  // Move the track left as the user scrolls through the pinned section.
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-72%"]);

  return (
    <section id="why-taaf" ref={ref} className="relative h-[320vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto mb-10 w-full max-w-7xl px-5 sm:px-8">
          <Eyebrow>Why TAAF</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold leading-[1.1] text-mist-50 sm:text-4xl md:text-5xl">
            Six reasons clients stay{" "}
            <span className="text-gradient">for the long run</span>
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-6 px-5 sm:px-8">
          {pillars.map((p, i) => (
            <article
              key={p.title}
              className="glass relative flex h-[360px] w-[300px] shrink-0 flex-col justify-between rounded-3xl p-7 md:w-[380px]"
            >
              <div className="absolute right-6 top-6 text-7xl font-bold text-white/[0.04]">
                0{i + 1}
              </div>
              <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-aurora-indigo/30 to-aurora-violet/20 text-aurora-cyan">
                <Icon name={p.icon} className="size-7" />
              </span>
              <div>
                <h3 className="text-2xl font-semibold text-mist-50">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist-400">
                  {p.body}
                </p>
              </div>
            </article>
          ))}

          {/* end CTA card */}
          <motion.a
            href="/contact"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4, ease }}
            className="border-aurora flex h-[360px] w-[300px] shrink-0 flex-col justify-center gap-4 rounded-3xl glass-strong p-7 md:w-[380px]"
          >
            <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-aurora-indigo to-aurora-violet text-white">
              <Icon name="ArrowRight" className="size-7" />
            </span>
            <h3 className="text-2xl font-semibold text-mist-50">
              Let&apos;s build your plan
            </h3>
            <p className="text-sm text-mist-400">
              Book a strategy session and see the difference a transparent
              partner makes.
            </p>
          </motion.a>
        </motion.div>

        <p className="mx-auto mt-8 hidden w-full max-w-7xl px-8 text-xs text-mist-500 md:block">
          Keep scrolling →
        </p>
      </div>
    </section>
  );
}
