import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Aurora";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { getServiceGroups } from "@/content/services";

export const metadata: Metadata = {
  title: "Services — Accounting, Tax, SMSF & Financial Advice",
  description:
    "Explore TAAF's full range of accounting, taxation, SMSF, financial planning, insurance, estate planning and business advisory services on the Central Coast.",
};

export default function ServicesPage() {
  const groups = getServiceGroups();

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Everything your finances need,{" "}
            <span className="text-gradient">in one place</span>
          </>
        }
        intro="Accounting, tax, wealth, protection and advice — designed to work together. Browse by area below."
      >
        <Button href="/contact" icon="ArrowRight">
          Book a strategy session
        </Button>
      </PageHero>

      <Container className="pb-24">
        <div className="flex flex-col gap-16">
          {groups.map((group) => (
            <div key={group.category}>
              <Reveal>
                <div className="mb-6 flex items-center gap-4">
                  <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-aurora-indigo/30 to-aurora-violet/20 text-aurora-cyan">
                    <Icon name={group.icon} className="size-6" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold text-mist-50">
                      {group.category}
                    </h2>
                    <p className="text-sm text-mist-400">{group.blurb}</p>
                  </div>
                </div>
              </Reveal>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.services.map((s, i) => (
                  <Reveal key={s.slug} delay={i}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="border-aurora group flex h-full flex-col gap-3 rounded-3xl glass p-6 transition-transform duration-500 hover:-translate-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="grid size-11 place-items-center rounded-2xl bg-ink-850 text-aurora-cyan">
                          <Icon name={s.icon} className="size-5" />
                        </span>
                        <Icon
                          name="ArrowUpRight"
                          className="size-5 text-mist-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-mist-50"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-mist-50">
                        {s.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-mist-400">
                        {s.summary}
                      </p>
                      {!s.verified && (
                        <span className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-full bg-champagne/10 px-2.5 py-1 text-[10px] text-champagne">
                          <Icon name="Sparkles" className="size-3" />
                          To confirm with client
                        </span>
                      )}
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
