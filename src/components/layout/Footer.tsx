import Link from "next/link";
import Image from "next/image";
import { company } from "@/content/company";
import { footerNav } from "@/content/nav";
import { Container } from "@/components/ui/Aurora";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-ink-700 bg-ink-900/60">
      <div className="bg-grid absolute inset-0 opacity-40" aria-hidden />
      <Container className="relative py-16">
        {/* CTA strip */}
        <div className="glass-strong mb-14 flex flex-col items-start justify-between gap-6 rounded-3xl p-8 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-semibold text-mist-50">
              Ready to take control of your finances?
            </h3>
            <p className="mt-2 max-w-xl text-mist-400">
              Book a no-pressure strategy session with a Central Coast advisor
              who&apos;ll explain everything in plain English.
            </p>
          </div>
          <Button href="/contact" icon="ArrowRight" className="shrink-0">
            Book a Strategy Session
          </Button>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand col */}
          <div className="flex flex-col gap-4">
            <Image
              src="/brand/taaf-logo.png"
              alt={`${company.name} logo`}
              width={200}
              height={57}
              className="h-12 w-auto"
            />
            <p className="max-w-xs text-sm leading-relaxed text-mist-400">
              {company.promise}
            </p>
            <div className="mt-2 flex flex-col gap-2 text-sm">
              <a
                href={company.phoneHref}
                className="inline-flex items-center gap-2 text-mist-300 hover:text-mist-50"
              >
                <Icon name="Phone" className="size-4 text-aurora-cyan" />
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-2 text-mist-300 hover:text-mist-50"
              >
                <Icon name="Mail" className="size-4 text-aurora-cyan" />
                {company.email}
              </a>
              <span className="inline-flex items-center gap-2 text-mist-400">
                <Icon name="MapPin" className="size-4 text-aurora-cyan" />
                Toukley, {company.region}
              </span>
            </div>
          </div>

          {footerNav.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-mist-500">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-2">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-mist-300 transition-colors hover:text-mist-50"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-ink-700 pt-6 text-xs text-mist-500 md:flex-row md:items-center">
          <div className="flex flex-col gap-1">
            <p>
              © {new Date().getFullYear()} {company.name}. ABN {company.abn}. All
              rights reserved.
            </p>
            <p className="text-mist-500/80">
              Crafted by{" "}
              <a
                href="https://visiondigitallab.com/?ref=taafa"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-mist-400 transition-colors hover:text-aurora-indigo"
              >
                Vision Digital Lab
              </a>
            </p>
          </div>
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5 text-mist-400">
              <Icon name="ShieldCheck" className="size-3.5 text-champagne" />
              {company.accreditation}
            </span>
            <a href={company.socials.facebook} className="hover:text-mist-50">
              Facebook
            </a>
            <a href={company.socials.instagram} className="hover:text-mist-50">
              Instagram
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
