import { Aurora, Container } from "@/components/ui/Aurora";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { ConsultationForm } from "@/components/ConsultationForm";
import { company } from "@/content/company";

const perks = [
  "A clear read on your current position",
  "Plain-English answers — no jargon",
  "Fixed-fee quote, zero pressure",
  "Tax, business & wealth under one roof",
];

export function BookConsultation() {
  return (
    <section id="book" className="relative overflow-hidden py-24 md:py-32">
      <Aurora className="opacity-70" />
      <Container className="relative">
        <div className="glass-strong grid gap-10 rounded-[2.5rem] p-7 md:p-12 lg:grid-cols-[1fr_1.05fr]">
          {/* Pitch */}
          <div className="flex flex-col gap-6">
            <Eyebrow>Book a consultation</Eyebrow>
            <h2 className="text-balance text-3xl font-semibold leading-[1.1] text-mist-50 sm:text-4xl">
              Your first session is a{" "}
              <span className="text-gradient">conversation</span>, not a sales
              pitch
            </h2>
            <p className="text-mist-400">
              Tell us a little about your situation and we&apos;ll match you with
              the right advisor. Most clients leave the first call with at least
              one thing they can act on straight away.
            </p>

            <ul className="flex flex-col gap-3">
              {perks.map((p, i) => (
                <Reveal as="li" key={p} delay={i}>
                  <span className="flex items-center gap-3 text-mist-200">
                    <Icon
                      name="CheckCircle2"
                      className="size-5 shrink-0 text-aurora-teal"
                    />
                    {p}
                  </span>
                </Reveal>
              ))}
            </ul>

            <div className="mt-2 flex flex-col gap-2 rounded-2xl bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-mist-500">
                Prefer to call?
              </p>
              <a
                href={company.phoneHref}
                className="inline-flex items-center gap-2 text-xl font-semibold text-mist-50 hover:text-aurora-cyan"
              >
                <Icon name="Phone" className="size-5 text-aurora-cyan" />
                {company.phone}
              </a>
              <p className="text-sm text-mist-500">{company.hours}</p>
            </div>
          </div>

          {/* Form card */}
          <div className="glass rounded-3xl p-6 md:p-8">
            <ConsultationForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
