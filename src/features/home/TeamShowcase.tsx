import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Aurora";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { team } from "@/content/team";

export function TeamShowcase() {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Meet the team"
            title={
              <>
                Real people behind your{" "}
                <span className="text-gradient">numbers</span>
              </>
            }
            intro="A local Central Coast team that explains the 'why', not just the 'what'. Hover to meet them."
          />
          <Button href="/team" variant="outline" icon="ArrowRight">
            Meet the full team
          </Button>
        </div>

        {/* Desktop: expanding panels */}
        <div className="mt-12 hidden h-[460px] gap-3 md:flex">
          {team.map((m, i) => (
            <Link
              key={i}
              href="/team"
              className="group/panel relative flex-1 overflow-hidden rounded-3xl ring-1 ring-ink-700 transition-[flex-grow] duration-500 ease-out hover:flex-[2.6]"
            >
              <Image
                src={m.photo}
                alt={m.role}
                fill
                sizes="(max-width: 1280px) 40vw, 420px"
                className="object-cover transition-transform duration-700 group-hover/panel:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent" />
              <div
                className={`absolute inset-x-0 bottom-0 bg-gradient-to-r ${m.accent} h-1 opacity-80`}
              />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-lg font-semibold text-white">{m.role}</p>
                <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover/panel:max-h-32 group-hover/panel:opacity-100">
                  <p className="mt-1 text-sm text-white/80">{m.bio}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {m.specialties.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] text-white backdrop-blur"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile: card grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 md:hidden">
          {team.slice(0, 4).map((m, i) => (
            <Reveal key={i} delay={i % 2}>
              <Link
                href="/team"
                className="group relative block aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-ink-700"
              >
                <Image
                  src={m.photo}
                  alt={m.role}
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3">
                  <p className="text-sm font-semibold text-white">{m.role}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 inline-flex items-center gap-1.5 text-[11px] text-mist-500/80">
          <Icon name="Sparkles" className="size-3" />
          Sample photos &amp; names — replace with the real TAAF team before launch.
        </p>
      </Container>
    </section>
  );
}
