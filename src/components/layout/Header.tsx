"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { navItems } from "@/content/nav";
import { company } from "@/content/company";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2.5" : "py-4"
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div
          className={cn(
            "flex items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5",
            scrolled
              ? "glass-strong"
              : "border border-transparent bg-transparent"
          )}
        >
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-aurora-indigo to-aurora-violet text-sm font-bold text-white shadow-[0_8px_24px_-8px_rgba(99,102,241,0.8)]">
              T
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-sm font-semibold tracking-tight text-mist-50">
                {company.shortName}
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-mist-500">
                Accountants &amp; Advisors
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm text-mist-300 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={company.phoneHref}
              className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm text-mist-300 transition-colors hover:text-white md:inline-flex"
            >
              <Icon name="Phone" className="size-4 text-aurora-cyan" />
              {company.phone}
            </a>
            <Button
              href="/contact"
              className="hidden sm:inline-flex"
              icon="ArrowRight"
            >
              Book a Session
            </Button>

            {/* Mobile toggle */}
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 place-items-center rounded-full glass lg:hidden"
            >
              <Icon name={open ? "X" : "Menu"} className="size-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mx-4 mt-2 lg:hidden"
          >
            <div className="glass-strong flex flex-col gap-1 rounded-3xl p-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base text-mist-200 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <Button
                href="/contact"
                className="mt-2 w-full"
                icon="ArrowRight"
                onClick={() => setOpen(false)}
              >
                Book a Strategy Session
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
