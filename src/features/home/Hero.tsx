"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Aurora";
import { InteractiveBackground } from "@/components/ui/InteractiveBackground";
import { RotatingWords } from "@/components/ui/RotatingWords";
import { img, heroVideo } from "@/content/images";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { company, trustMarks } from "@/content/company";
import { HeroDashboard } from "./HeroDashboard";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#060a18] pb-16 pt-32 md:pt-36">
      {/* cinematic background video */}
      <video
        className="absolute inset-0 size-full scale-105 object-cover object-center opacity-90"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* contrast overlay */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(6,10,24,0.94) 0%, rgba(6,10,24,0.78) 45%, rgba(8,14,38,0.55) 100%)",
        }}
      />
      {/* cursor-reactive colour glow over the video */}
      <InteractiveBackground className="absolute inset-0 opacity-70 mix-blend-screen" />
      {/* bottom fade into the light page */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink-950"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy */}
          <div className="flex flex-col items-start gap-7">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-tight text-white backdrop-blur"
            >
              <Icon name="ShieldCheck" className="size-3.5 text-champagne" />
              {company.accreditation} · Since {company.established}
            </motion.span>

            {/* Big animated headline with a rotating word */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="text-balance text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.4rem]"
            >
              <span className="block">Financial</span>
              <span className="block">
                <RotatingWords
                  words={["confidence.", "independence.", "freedom.", "growth."]}
                  className="font-serif italic text-gradient-aurora"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.7 }}
              className="max-w-xl text-lg leading-relaxed text-white/75 md:text-xl"
            >
              Helping individuals, families and businesses across the Central
              Coast create, protect and grow wealth — through transparent
              accounting, advisory and strategic financial planning.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.85 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Button href="/contact" icon="ArrowRight">
                Book a Strategy Session
              </Button>
              <Button
                href="/services"
                variant="outline"
                className="border-white/30 text-white hover:border-white/50 hover:bg-white/10"
              >
                Explore Services
              </Button>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.05 }}
              className="mt-2 flex flex-wrap gap-x-6 gap-y-2"
            >
              {trustMarks.map((mark) => (
                <li
                  key={mark.label}
                  className="inline-flex items-center gap-2 text-sm text-white/80"
                >
                  <Icon name="CheckCircle2" className="size-4 text-aurora-teal" />
                  {mark.label}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* 3D dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 8 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, ease, delay: 0.4 }}
            className="relative [perspective:1600px]"
          >
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease, delay: 0.3 }}
              className="absolute -right-2 -top-10 hidden w-[78%] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] ring-1 ring-white/15 sm:block"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={img.hero}
                  alt="TAAF advisors meeting with clients"
                  fill
                  priority
                  sizes="(max-width: 1024px) 60vw, 30vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-aurora-indigo/30 via-transparent to-aurora-cyan/10" />
              </div>
            </motion.div>

            <HeroDashboard />
          </motion.div>
        </div>
      </Container>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="relative h-9 w-5 rounded-full border border-white/30">
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
