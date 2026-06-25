import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Aurora";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { team } from "@/content/team";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "Meet the local Central Coast team behind Tenth Avenue Accountants & Financial Advisors — accountants, advisors and specialists who explain the 'why'.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet the team"
        title={
          <>
            The people behind your{" "}
            <span className="text-gradient">financial confidence</span>
          </>
        }
        intro={`A local Central Coast team, transparent by default and serving the region since ${company.established}.`}
      >
        <Button href="/contact" icon="ArrowRight">
          Book a session with us
        </Button>
      </PageHero>

      <Container className="pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={i} delay={i % 3}>
              <article className="group border-aurora flex h-full flex-col overflow-hidden rounded-3xl glass transition-transform duration-500 hover:-translate-y-1">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={m.photo}
                    alt={m.role}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent" />
                  <div
                    className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${m.accent}`}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div>
                    <h2 className="text-lg font-semibold text-mist-50">
                      {m.name}
                    </h2>
                    <p className="text-sm font-medium text-aurora-indigo">
                      {m.role}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-mist-400">
                    {m.bio}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                    {m.specialties.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-ink-850 px-2.5 py-1 text-[11px] text-mist-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 inline-flex items-center gap-1.5 text-xs text-mist-500/80">
          <Icon name="Sparkles" className="size-3.5" />
          Sample team for the concept — replace names, roles, bios and headshots
          with the real TAAF team before launch.
        </p>
      </Container>
    </>
  );
}
