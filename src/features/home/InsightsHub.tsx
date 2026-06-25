import Link from "next/link";
import { Container } from "@/components/ui/Aurora";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { insights } from "@/content/insights";

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function InsightsHub() {
  const featured = insights.slice(0, 3);

  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Insights Hub"
            title={
              <>
                Practical thinking on{" "}
                <span className="text-gradient">tax, wealth &amp; growth</span>
              </>
            }
            intro="Clear, jargon-free guidance for Central Coast individuals and business owners."
          />
          <Button href="/insights" variant="outline" icon="ArrowRight">
            All insights
          </Button>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {featured.map((post, i) => (
            <Reveal key={post.slug} delay={i}>
              <Link
                href="/insights"
                className="border-aurora group flex h-full flex-col overflow-hidden rounded-3xl glass transition-transform duration-500 hover:-translate-y-1"
              >
                {/* gradient header strip as image stand-in */}
                <div className="relative h-40 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-aurora-indigo/40 via-ink-800 to-aurora-violet/30" />
                  <div className="bg-grid absolute inset-0 opacity-40" />
                  <span className="absolute left-4 top-4 rounded-full bg-ink-950/60 px-3 py-1 text-[11px] font-medium text-mist-200 backdrop-blur">
                    {post.category}
                  </span>
                  <Icon
                    name="FileText"
                    className="absolute bottom-4 right-4 size-8 text-white/20"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="text-lg font-semibold leading-snug text-mist-50">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-mist-400">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center gap-3 pt-2 text-xs text-mist-500">
                    <span>{formatDate(post.date)}</span>
                    <span className="inline-flex items-center gap-1">
                      <Icon name="Clock" className="size-3" />
                      {post.readMinutes} min read
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
