import { Container } from "@/components/ui/Aurora";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { stats } from "@/content/company";

export function TrustBar() {
  return (
    <section className="relative border-y border-white/8 bg-ink-900/40 py-14">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i}>
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <span className="text-4xl font-semibold text-gradient md:text-5xl">
                  <Counter
                    to={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </span>
                <span className="mt-2 text-sm text-mist-400">{stat.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={4}>
          <p className="mt-8 text-center text-[11px] text-mist-500/70 md:text-left">
            * Figures marked with an asterisk are placeholders for the concept
            and should be confirmed with the client before launch.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
