"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Aurora";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { platforms, banks, type Partner } from "@/content/partners";

function LogoChip({ p }: { p: Partner }) {
  return (
    <div className="mx-3 flex h-16 shrink-0 items-center justify-center rounded-2xl border border-ink-700 bg-ink-900/80 px-8 backdrop-blur">
      <Image
        src={p.logo}
        alt={p.name}
        width={150}
        height={32}
        className="h-7 w-auto opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
      />
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: Partner[];
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-mask group flex overflow-hidden py-2">
      <div
        className={`flex w-max ${
          reverse ? "animate-marquee-rev" : "animate-marquee"
        } group-hover:[animation-play-state:paused]`}
      >
        {doubled.map((p, i) => (
          <LogoChip key={`${p.name}-${i}`} p={p} />
        ))}
      </div>
    </div>
  );
}

export function PartnersMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-ink-700 bg-ink-900/40 py-16 md:py-20">
      <Container>
        <div className="flex flex-col items-center gap-3 text-center">
          <Eyebrow>Trusted finance ecosystem</Eyebrow>
          <h2 className="max-w-2xl text-balance text-2xl font-semibold text-mist-50 sm:text-3xl">
            Connected to the platforms &amp; banks{" "}
            <span className="text-gradient">you already use</span>
          </h2>
        </div>
      </Container>

      <div className="mt-10 flex flex-col gap-3">
        <MarqueeRow items={platforms} />
        <MarqueeRow items={banks} reverse />
      </div>

      <Container>
        <p className="mt-8 text-center text-[11px] text-mist-500/80">
          Logos shown illustratively for the concept. Only Xero is a verified
          partnership (Platinum Champion Partner) — confirm relationships and
          trademark usage rights before launch.
        </p>
      </Container>
    </section>
  );
}
