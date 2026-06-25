import { Aurora, Container } from "@/components/ui/Aurora";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-12 pt-36 md:pt-44">
      <Aurora className="opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,transparent_50%,var(--color-ink-950)_100%)]"
      />
      <Container className="relative">
        <div className="flex max-w-3xl flex-col gap-6">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-mist-50 sm:text-5xl md:text-6xl">
              {title}
            </h1>
          </Reveal>
          {intro && (
            <Reveal delay={2}>
              <p className="max-w-2xl text-lg leading-relaxed text-mist-400">
                {intro}
              </p>
            </Reveal>
          )}
          {children && <Reveal delay={3}>{children}</Reveal>}
        </div>
      </Container>
    </section>
  );
}
