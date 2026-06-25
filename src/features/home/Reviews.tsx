"use client";

import { Container } from "@/components/ui/Aurora";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { company } from "@/content/company";
import { testimonials, type Testimonial } from "@/content/testimonials";

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5 text-amber" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`size-4 ${i < n ? "fill-amber" : "fill-ink-700"}`}
          aria-hidden
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 15l-5.3 2.8 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ t }: { t: Testimonial }) {
  return (
    <figure className="glass mx-3 flex w-[320px] shrink-0 flex-col gap-4 rounded-3xl p-6 sm:w-[380px]">
      <div className="flex items-center justify-between">
        <Stars n={t.rating} />
        <Icon name="Sparkles" className="size-4 text-aurora-violet/60" />
      </div>
      <blockquote className="text-[15px] leading-relaxed text-mist-200">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-3 pt-2">
        <span
          className={`grid size-11 shrink-0 place-items-center rounded-full bg-gradient-to-br ${t.accent} text-sm font-semibold text-white`}
        >
          {initials(t.name)}
        </span>
        <div>
          <p className="text-sm font-semibold text-mist-50">{t.name}</p>
          <p className="text-xs text-mist-500">{t.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

function Row({
  items,
  reverse = false,
}: {
  items: Testimonial[];
  reverse?: boolean;
}) {
  // Duplicated track for a seamless -50% translate loop.
  const doubled = [...items, ...items];
  return (
    <div className="marquee-mask group flex overflow-hidden py-2">
      <div
        className={`flex w-max ${
          reverse ? "animate-marquee-rev" : "animate-marquee"
        } group-hover:[animation-play-state:paused]`}
      >
        {doubled.map((t, i) => (
          <ReviewCard key={i} t={t} />
        ))}
      </div>
    </div>
  );
}

export function Reviews() {
  const half = Math.ceil(testimonials.length / 2);
  const rowA = testimonials.slice(0, half);
  const rowB = testimonials.slice(half);

  return (
    <section className="bg-mesh relative overflow-hidden py-24 md:py-32">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Client reviews"
          title={
            <>
              Trusted by Central Coast{" "}
              <span className="text-gradient">families &amp; businesses</span>
            </>
          }
          intro={`Since ${company.established}, with a transparent, plain-English approach clients actually enjoy.`}
        />
      </Container>

      <div className="mt-14 flex flex-col gap-4">
        <Row items={rowA} />
        <Row items={rowB} reverse />
      </div>

      <Container>
        <p className="mt-10 text-center text-[11px] text-mist-500/80">
          Sample reviews shown for the concept — replace with real, consented
          Google/Facebook reviews before launch.
        </p>
      </Container>
    </section>
  );
}
