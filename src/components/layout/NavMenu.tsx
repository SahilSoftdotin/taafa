"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Icon } from "@/components/ui/Icon";
import { getDivisionGroups } from "@/content/services";

const links = [
  { label: "Team", href: "/team" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function NavMenu() {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const divisionGroups = getDivisionGroups();

  function show() {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  }
  function hide() {
    timer.current = setTimeout(() => setOpen(false), 120);
  }

  return (
    <nav className="hidden items-center gap-1 lg:flex">
      {/* Services mega-menu */}
      <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
        <Link
          href="/services"
          className="inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm text-mist-300 transition-colors hover:text-mist-50"
          aria-expanded={open}
        >
          Services
          <Icon
            name="ArrowUpRight"
            className={`size-3.5 transition-transform duration-300 ${
              open ? "rotate-90" : ""
            }`}
          />
        </Link>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.22, ease }}
              className="absolute left-1/2 top-full z-50 mt-3 w-[min(92vw,860px)] -translate-x-1/2"
            >
              <div className="glass-strong grid grid-cols-2 gap-6 rounded-3xl p-6">
                {divisionGroups.map((div) => (
                  <div key={div.division}>
                    <div className="mb-3 flex items-center gap-2.5 border-b border-ink-700 pb-3">
                      <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-aurora-indigo to-aurora-violet text-white">
                        <Icon name={div.icon} className="size-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-mist-50">
                          {div.division}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      {div.groups.map((group) => (
                        <div key={group.category}>
                          <p className="mb-1 text-[10px] uppercase tracking-[0.16em] text-mist-500">
                            {group.category}
                          </p>
                          <ul className="grid grid-cols-1 gap-0.5">
                            {group.services.map((s) => (
                              <li key={s.slug}>
                                <Link
                                  href={`/services/${s.slug}`}
                                  className="group flex items-center gap-2 rounded-lg px-2 py-1.5 text-[13px] text-mist-300 transition-colors hover:bg-ink-850 hover:text-mist-50"
                                  onClick={() => setOpen(false)}
                                >
                                  <Icon
                                    name={s.icon}
                                    className="size-3.5 text-aurora-indigo/70"
                                  />
                                  {s.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="col-span-2 mt-1 flex items-center justify-between rounded-2xl bg-ink-850 px-5 py-3">
                  <p className="text-sm text-mist-400">
                    Not sure where you fit? We&apos;ll point you the right way.
                  </p>
                  <Link
                    href="/services"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-aurora-indigo hover:text-aurora-violet"
                  >
                    View all services
                    <Icon name="ArrowRight" className="size-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {links.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="rounded-full px-3.5 py-2 text-sm text-mist-300 transition-colors hover:text-mist-50"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
