import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Aurora";
import { PageHero } from "@/components/ui/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { getService, services } from "@/content/services";
import { company } from "@/content/company";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={service.category}
        title={service.title}
        intro={service.summary}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button href="/contact" icon="ArrowRight">
            Enquire about this service
          </Button>
          <Button href="/services" variant="ghost" icon="ArrowUpRight">
            All services
          </Button>
          {!service.verified && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-champagne/10 px-3 py-1.5 text-xs text-champagne">
              <Icon name="Sparkles" className="size-3.5" />
              Service from brief — confirm with client
            </span>
          )}
        </div>
      </PageHero>

      <Container className="pb-24">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          {/* Main */}
          <div className="flex flex-col gap-8">
            <Reveal>
              <GlassCard className="p-8">
                <h2 className="text-xl font-semibold text-mist-50">Overview</h2>
                <p className="mt-3 leading-relaxed text-mist-300">
                  {service.description}
                </p>
              </GlassCard>
            </Reveal>

            <Reveal delay={1}>
              <GlassCard className="p-8">
                <h2 className="text-xl font-semibold text-mist-50">
                  What&apos;s included
                </h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {service.inclusions.map((inc) => (
                    <li
                      key={inc}
                      className="flex items-start gap-3 rounded-2xl bg-white/5 p-4"
                    >
                      <Icon
                        name="CheckCircle2"
                        className="mt-0.5 size-5 shrink-0 text-aurora-teal"
                      />
                      <span className="text-sm text-mist-200">{inc}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>

            {related.length > 0 && (
              <Reveal delay={2}>
                <div>
                  <h2 className="mb-4 text-lg font-semibold text-mist-50">
                    Related {service.category} services
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/services/${r.slug}`}
                        className="border-aurora group flex flex-col gap-2 rounded-2xl glass p-5 transition-transform hover:-translate-y-1"
                      >
                        <Icon
                          name={r.icon}
                          className="size-5 text-aurora-cyan"
                        />
                        <span className="text-sm font-semibold text-mist-50">
                          {r.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <GlassCard strong className="p-7">
              <h3 className="text-lg font-semibold text-mist-50">
                Talk to an advisor
              </h3>
              <p className="mt-2 text-sm text-mist-400">
                Get a transparent, fixed-fee quote for {service.title.toLowerCase()}.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 transition-colors hover:bg-white/10"
                >
                  <Icon name="Phone" className="size-5 text-aurora-cyan" />
                  <div>
                    <p className="text-sm font-semibold text-mist-50">
                      {company.phone}
                    </p>
                    <p className="text-xs text-mist-500">{company.hours}</p>
                  </div>
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 transition-colors hover:bg-white/10"
                >
                  <Icon name="Mail" className="size-5 text-aurora-cyan" />
                  <span className="text-sm text-mist-50">{company.email}</span>
                </a>
              </div>
              <Button href="/contact" className="mt-5 w-full" icon="ArrowRight">
                Book a session
              </Button>
              <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-mist-500">
                <Icon name="ShieldCheck" className="size-3.5 text-champagne" />
                {company.accreditation}
              </p>
            </GlassCard>
          </aside>
        </div>
      </Container>
    </>
  );
}
