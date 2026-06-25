import { Container } from "@/components/ui/Aurora";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

interface Clip {
  src: string;
  category: string;
  title: string;
  caption: string;
}

const clips: Clip[] = [
  {
    src: "/video/cards/accounting-docs.mp4",
    category: "Accounting",
    title: "Books done right",
    caption: "BAS, payroll and bookkeeping, kept accurate on Xero.",
  },
  {
    src: "/video/cards/finance-meeting.mp4",
    category: "Finance",
    title: "Advice, face to face",
    caption: "Plain-English planning for your goals and retirement.",
  },
  {
    src: "/video/cards/insurance-policy.mp4",
    category: "Insurance",
    title: "Cover that fits",
    caption: "Life, income protection, TPD and trauma — explained.",
  },
  {
    src: "/video/cards/accounting-calc.mp4",
    category: "Accounting",
    title: "Every number checked",
    caption: "Compliant returns for individuals and businesses.",
  },
  {
    src: "/video/cards/finance-analysis.mp4",
    category: "Finance",
    title: "Plans backed by data",
    caption: "Strategy built on a clear read of your position.",
  },
];

function Clip({ clip }: { clip: Clip }) {
  return (
    <>
      <video
        className="absolute inset-0 size-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label={`${clip.category} — ${clip.title}`}
      >
        <source src={clip.src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/15 to-transparent" />
    </>
  );
}

export function VideoShowcase() {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="In motion"
          title={
            <>
              Accounting, finance &amp; insurance{" "}
              <span className="text-gradient">in action</span>
            </>
          }
          intro="A glimpse of the work behind your numbers. Hover a card to focus it."
        />

        {/* Desktop: expanding video panels */}
        <div className="mt-12 hidden h-[460px] gap-3 md:flex">
          {clips.map((c, i) => (
            <div
              key={i}
              className="group/v relative flex-1 overflow-hidden rounded-3xl ring-1 ring-ink-700 transition-[flex-grow] duration-500 ease-out hover:flex-[2.8]"
            >
              <Clip clip={c} />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="inline-flex rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] font-medium text-white backdrop-blur">
                  {c.category}
                </span>
                <p className="mt-2 text-lg font-semibold text-white">
                  {c.title}
                </p>
                <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover/v:max-h-20 group-hover/v:opacity-100">
                  <p className="mt-1 text-sm text-white/80">{c.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: compact grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 md:hidden">
          {clips.slice(0, 4).map((c, i) => (
            <Reveal key={i} delay={i % 2}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-ink-700">
                <Clip clip={c} />
                <div className="absolute inset-x-0 bottom-0 p-3">
                  <span className="text-[10px] uppercase tracking-wide text-white/70">
                    {c.category}
                  </span>
                  <p className="text-sm font-semibold text-white">{c.title}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
