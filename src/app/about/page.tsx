import type { Metadata } from "next";
import { Container } from "@/components/ui/Aurora";
import { PageHero } from "@/components/ui/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "About — Transparent accounting on the Central Coast",
  description:
    "Tenth Avenue Accountants & Financial Advisors has provided transparent accounting and financial advice on the Central Coast since 2017. Xero Platinum Champion Partner.",
};

const values = [
  {
    icon: "ShieldCheck",
    title: "Transparency first",
    body: "Clear reporting and fixed-fee quotes. You'll always understand your position and what you're paying for.",
  },
  {
    icon: "Compass",
    title: "Accredited expertise",
    body: "Registered tax agents and a Xero Platinum Champion Partner — real depth across accounting and advice.",
  },
  {
    icon: "Handshake",
    title: "Genuinely local",
    body: "We're part of the Central Coast community, building long-term relationships, not transactions.",
  },
  {
    icon: "TrendingUp",
    title: "Built for growth",
    body: "We help individuals and businesses create, protect and grow wealth — for the long term.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About TAAF"
        title={
          <>
            Transparent financial guidance,{" "}
            <span className="text-gradient">since 2017</span>
          </>
        }
        intro={company.promise}
      >
        <Button href="/contact" icon="ArrowRight">
          Work with us
        </Button>
      </PageHero>

      <Container className="pb-8">
        {/* Story */}
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <GlassCard className="flex h-full flex-col gap-4 p-8">
              <h2 className="text-2xl font-semibold text-mist-50">Our story</h2>
              <p className="leading-relaxed text-mist-300">
                Based in Toukley on the Central Coast, Tenth Avenue Accountants
                &amp; Financial Advisors was founded to make accounting and
                financial advice clearer, more practical and more human.
              </p>
              <p className="leading-relaxed text-mist-400">
                We combine accounting knowledge with a transparent approach —
                helping you understand every step of your financial position.
                From personal, sole trader, partnership and company tax returns
                to life insurance, estate planning and superannuation, we
                prioritise accuracy and accountability in everything we do.
              </p>
              <p className="leading-relaxed text-mist-400">
                As a Xero Platinum Champion Partner, we bring modern, cloud-based
                systems to every engagement — so your numbers are always current,
                accurate and working for you.
              </p>
            </GlassCard>
          </Reveal>

          <Reveal delay={1}>
            <GlassCard strong className="flex h-full flex-col gap-5 p-8">
              <h3 className="text-lg font-semibold text-mist-50">
                At a glance
              </h3>
              {[
                { icon: "MapPin", label: "Based in", value: "Toukley, NSW" },
                {
                  icon: "Clock",
                  label: "Serving since",
                  value: String(company.established),
                },
                {
                  icon: "ShieldCheck",
                  label: "Accreditation",
                  value: company.accreditation,
                },
                { icon: "Phone", label: "Phone", value: company.phone },
                { icon: "Mail", label: "Email", value: company.email },
              ].map((row) => (
                <div key={row.label} className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-white/5 text-aurora-cyan">
                    <Icon name={row.icon} className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-mist-500">
                      {row.label}
                    </p>
                    <p className="text-sm font-medium text-mist-100">
                      {row.value}
                    </p>
                  </div>
                </div>
              ))}
            </GlassCard>
          </Reveal>
        </div>
      </Container>

      {/* Values */}
      <Container className="pb-24">
        <h2 className="mb-8 mt-8 text-2xl font-semibold text-mist-50">
          What we stand for
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i}>
              <GlassCard hover className="flex h-full flex-col gap-3 p-6">
                <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-aurora-indigo/30 to-aurora-violet/20 text-aurora-cyan">
                  <Icon name={v.icon} className="size-6" />
                </span>
                <h3 className="text-lg font-semibold text-mist-50">
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed text-mist-400">
                  {v.body}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </>
  );
}
