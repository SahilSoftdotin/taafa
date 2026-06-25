import type { Metadata } from "next";
import { Container } from "@/components/ui/Aurora";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { getDivisionGroups } from "@/content/services";

export const metadata: Metadata = {
  title: "Services — Accounting Services & Financial Advice",
  description:
    "Explore TAAF's Accounting Services (tax, business accounting, BAS, payroll, bookkeeping, trusts) and Financial Advice (SMSF, super, planning, insurance, estate, property) on the Central Coast.",
};

export default function ServicesPage() {
  const divisionGroups = getDivisionGroups();

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
        intro="Two sides of the same partner: Accounting Services to keep you compliant and clear, and Financial Advice to help you grow and protect wealth."
      >
        <Button href="/contact" icon="ArrowRight">
          Book a strategy session
        </Button>
      </PageHero>

      <Container className="pb-24">
        <div className="flex flex-col gap-20">
          {divisionGroups.map((div) => (
            <div key={div.division}>
              <Reveal>
                <div className="mb-8 flex items-center gap-4 border-b border-ink-700 pb-6">
                  <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-aurora-indigo to-aurora-violet text-white">
                    <Icon name={div.icon} className="size-7" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold text-mist-50 sm:text-3xl">
                      {div.division}
                    </h2>
                    <p className="text-sm text-mist-400">{div.blurb}</p>
                  </div>
                </div>
              </Reveal>

              <div className="flex flex-col gap-12">
                {div.groups.map((group) => (
                  <div key={group.category}>
                    <Reveal>
                      <div className="mb-5 flex items-center gap-3">
                        <span className="grid size-9 place-items-center rounded-xl bg-ink-850 text-aurora-cyan">
                          <Icon name={group.icon} className="size-5" />
                        </span>
                        <h3 className="text-lg font-semibold text-mist-100">
                          {group.category}
                        </h3>
                      </div>
                    </Reveal>
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {group.services.map((s, i) => (
                        <Reveal key={s.slug} delay={i}>
                          <ServiceCard service={s} />
                        </Reveal>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
