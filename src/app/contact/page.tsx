import type { Metadata } from "next";
import { Container } from "@/components/ui/Aurora";
import { PageHero } from "@/components/ui/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { EnquiryForm } from "@/components/EnquiryForm";
import { company, locations } from "@/content/company";

export const metadata: Metadata = {
  title: "Contact & Book a Strategy Session",
  description:
    "Book a no-obligation strategy session with Tenth Avenue Accountants & Financial Advisors in Toukley, Central Coast NSW. Call (02) 4399 1551.",
};

export default function ContactPage() {
  const head = locations[0];
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s start with a{" "}
            <span className="text-gradient">conversation</span>
          </>
        }
        intro="Tell us about your situation and we'll match you with the right advisor. No pressure, no jargon."
      />

      <Container className="pb-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* Details */}
          <div className="flex flex-col gap-5">
            <GlassCard strong className="flex flex-col gap-4 p-7">
              <a
                href={company.phoneHref}
                className="flex items-center gap-4 rounded-2xl bg-ink-850 p-4 transition-colors hover:bg-ink-800"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-aurora-indigo to-aurora-violet text-white">
                  <Icon name="Phone" className="size-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-mist-500">
                    Call us
                  </p>
                  <p className="text-lg font-semibold text-mist-50">
                    {company.phone}
                  </p>
                </div>
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-4 rounded-2xl bg-ink-850 p-4 transition-colors hover:bg-ink-800"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-ink-850 text-aurora-cyan">
                  <Icon name="Mail" className="size-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-mist-500">
                    Email
                  </p>
                  <p className="text-lg font-semibold text-mist-50">
                    {company.email}
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-2xl bg-ink-850 p-4">
                <span className="grid size-11 place-items-center rounded-xl bg-ink-850 text-aurora-cyan">
                  <Icon name="MapPin" className="size-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-mist-500">
                    Visit
                  </p>
                  <p className="text-sm font-medium text-mist-100">
                    {head.address}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl bg-ink-850 p-4">
                <span className="grid size-11 place-items-center rounded-xl bg-ink-850 text-aurora-cyan">
                  <Icon name="Clock" className="size-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-mist-500">
                    Hours
                  </p>
                  <p className="text-sm font-medium text-mist-100">
                    {company.hours}
                  </p>
                </div>
              </div>
            </GlassCard>

            <a
              href={head.mapUrl}
              className="group relative block h-48 overflow-hidden rounded-3xl glass"
            >
              <div className="bg-grid absolute inset-0 opacity-50" />
              <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_55%_50%,rgba(99,102,241,0.22),transparent_70%)]" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="absolute left-1/2 top-1/2 size-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-aurora-cyan/30 animate-pulse-ring" />
                <span className="relative grid size-9 place-items-center rounded-full bg-aurora-indigo text-white ring-4 ring-aurora-cyan/30">
                  <Icon name="MapPin" className="size-4" />
                </span>
              </span>
              <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-xl bg-ink-950/60 px-3 py-2 text-xs text-mist-200 backdrop-blur">
                Open in Google Maps
                <Icon name="ArrowUpRight" className="size-3.5" />
              </span>
            </a>
          </div>

          {/* Enquiry form */}
          <GlassCard strong className="p-7 md:p-9">
            <EnquiryForm />
          </GlassCard>
        </div>
      </Container>
    </>
  );
}
