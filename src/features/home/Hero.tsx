"use client";

import { motion } from "motion/react";
import { Aurora, Container } from "@/components/ui/Aurora";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { company, trustMarks } from "@/content/company";
import { HeroDashboard } from "./HeroDashboard";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-32 md:pt-36">
      <Aurora />
      {/* radial vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,transparent_40%,var(--color-ink-950)_100%)]"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy */}
          <div className="flex flex-col items-start gap-7">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-tight text-mist-300 backdrop-blur"
            >
              <Icon name="ShieldCheck" className="size-3.5 text-champagne" />
              {company.accreditation} · Since {company.established}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.05 }}
              className="text-balance text-4xl font-semibold leading-[1.04] tracking-tight text-mist-50 sm:text-5xl md:text-6xl lg:text-[4.1rem]"
            >
              Financial confidence.
              <br />
              <span className="text-gradient-aurora">Built for the future.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.15 }}
              className="max-w-xl text-lg leading-relaxed text-mist-400"
            >
              Helping individuals, families and businesses across the Central
              Coast create, protect and grow wealth — through transparent
              accounting, advisory and strategic financial planning.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.25 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Button href="/contact" icon="ArrowRight">
                Book a Strategy Session
              </Button>
              <Button href="/services" variant="outline">
                Explore Services
              </Button>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-2 flex flex-wrap gap-x-6 gap-y-2"
            >
              {trustMarks.map((mark) => (
                <li
                  key={mark.label}
                  className="inline-flex items-center gap-2 text-sm text-mist-400"
                >
                  <Icon
                    name="CheckCircle2"
                    className="size-4 text-aurora-teal"
                  />
                  {mark.label}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* 3D dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 8 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, ease, delay: 0.3 }}
            className="relative [perspective:1600px]"
          >
            <HeroDashboard />
          </motion.div>
        </div>
      </Container>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-mist-500 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="relative h-9 w-5 rounded-full border border-white/15">
          <motion.span
            animate={{ y: [4, 14, 4] }}
            transition={{ duration: 1.8, repeat: Infinity, ease }}
            className="absolute left-1/2 top-1 size-1.5 -translate-x-1/2 rounded-full bg-aurora-cyan"
          />
        </span>
      </motion.div>
    </section>
  );
}
