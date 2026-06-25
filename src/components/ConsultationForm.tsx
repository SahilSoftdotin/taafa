"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

const services = [
  "Personal tax",
  "Business accounting",
  "SMSF / Super",
  "Financial planning",
  "Insurance",
  "Not sure yet",
];

/**
 * Front-end booking form for the concept. No backend wired — submitting shows
 * a success state. Hook up to an API route / CRM (e.g. HubSpot, Cloudflare
 * Worker, or email service) before launch.
 */
export function ConsultationForm() {
  const [sent, setSent] = useState(false);
  const [interest, setInterest] = useState(services[0]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex min-h-[420px] flex-col items-center justify-center gap-4 text-center"
          >
            <span className="grid size-16 place-items-center rounded-full bg-aurora-teal/15 text-aurora-teal">
              <Icon name="CheckCircle2" className="size-8" />
            </span>
            <h3 className="text-2xl font-semibold text-mist-50">
              Thanks — we&apos;ll be in touch
            </h3>
            <p className="max-w-sm text-mist-400">
              A TAAF advisor will reach out within one business day to confirm
              your strategy session.
            </p>
            <p className="text-xs text-mist-500">
              (Demo only — connect a backend before launch.)
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={onSubmit}
            className="flex flex-col gap-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name" name="name" placeholder="Jane Smith" />
              <Field
                label="Phone"
                name="phone"
                type="tel"
                placeholder="0400 000 000"
              />
            </div>
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="you@email.com"
            />

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-mist-300">
                I&apos;m interested in
              </label>
              <div className="flex flex-wrap gap-2">
                {services.map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => setInterest(s)}
                    className={cn(
                      "rounded-full border px-3.5 py-1.5 text-sm transition-all",
                      interest === s
                        ? "border-transparent bg-gradient-to-r from-aurora-indigo to-aurora-violet text-white"
                        : "border-white/10 text-mist-300 hover:border-white/25"
                    )}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-mist-300"
              >
                Anything we should know?
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="A quick note about your situation…"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-mist-100 outline-none transition-colors placeholder:text-mist-500 focus:border-aurora-indigo/60"
              />
            </div>

            <button
              type="submit"
              className="group mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-aurora-indigo to-aurora-violet px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_-16px_rgba(99,102,241,0.7)] transition-all hover:-translate-y-0.5"
            >
              Book my strategy session
              <Icon
                name="ArrowRight"
                className="size-4 transition-transform group-hover:translate-x-0.5"
              />
            </button>
            <p className="text-center text-xs text-mist-500">
              No obligation. We&apos;ll never share your details.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-mist-300">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-mist-100 outline-none transition-colors placeholder:text-mist-500 focus:border-aurora-indigo/60"
      />
    </div>
  );
}
