"use client";

import { Container } from "@/components/ui/Aurora";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { platforms, banks, type Partner } from "@/content/partners";

function LogoChip({ p }: { p: Partner }) {
  return (
    <div className="mx-3 flex shrink-0 items-center gap-2.5 rounded-2xl border border-ink-700 bg-ink-900/70 px-6 py-3.5 backdrop-blur">
      <span className="grid size-7 place-items-center rounded-lg bg-gradient-to-br from-aurora-indigo/15 to-aurora-violet/10">
        <Icon
          name={p.verified ? "ShieldCheck" : "Landmark"}
          className="size-4 text-aurora-indigo"
        />
      </span>
      <span className="whitespace-nowrap text-lg font-semibold tracking-tight text-mist-200">
        {p.name}
      </span>
      {p.verified && (
        <span className="rounded-full bg-aurora-teal/15 px-2 py-0.5 text-[10px] font-medium text-aurora-teal">
          Partner
        </span>
      )}
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
