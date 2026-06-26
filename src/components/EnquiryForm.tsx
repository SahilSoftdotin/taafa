"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

const steps = [
  "About you",
  "About your situation",
  "How we can help",
  "Timeframe",
  "Final details",
];

const clientTypes = [
  "Individual / family",
  "Sole trader",
  "Business owner",
  "Company director",
  "SMSF trustee",
  "Property investor",
];

const serviceOptions = [
  "Personal tax return",
  "Business accounting & BAS",
  "Bookkeeping & payroll",
  "Company / trust tax",
  "SMSF & superannuation",
  "Financial planning",
  "Insurance",
  "Estate planning",
  "Investment property",
  "Business advisory",
];

const timeframes = [
  "This tax season",
  "As soon as possible",
  "In the next few months",
  "Just exploring",
];

const contactMethods = ["Phone call", "Email"];

interface FormState {
  name: string;
  email: string;
  phone: string;
  business: string;
  clientType: string;
  services: string[];
  timeframe: string;
  contactMethod: string;
  message: string;
  consent: boolean;
}

const stepVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: -40, transition: { duration: 0.2 } },
};

const inputCls =
  "w-full rounded-2xl border border-ink-700 bg-ink-850 px-4 py-3 text-sm text-mist-100 outline-none transition-colors placeholder:text-mist-500 focus:border-aurora-indigo/60";

export function EnquiryForm() {
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [data, setData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    business: "",
    clientType: "",
    services: [],
    timeframe: "",
    contactMethod: "",
    message: "",
    consent: false,
  });

  const set = (k: keyof FormState, v: string | boolean) =>
    setData((p) => ({ ...p, [k]: v }));
  const toggleService = (s: string) =>
    setData((p) => ({
      ...p,
      services: p.services.includes(s)
        ? p.services.filter((x) => x !== s)
        : [...p.services, s],
    }));

  const valid = () => {
    switch (step) {
      case 0:
        return data.name.trim() !== "" && /\S+@\S+\.\S+/.test(data.email);
      case 1:
        return data.clientType !== "";
      case 2:
        return data.services.length > 0;
      case 3:
        return data.timeframe !== "" && data.contactMethod !== "";
      case 4:
        return data.consent;
      default:
        return true;
    }
  };

  const last = step === steps.length - 1;
  const submit = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
    }, 1200);
  };

  if (sent) {
    return (
      <div className="flex min-h-[440px] flex-col items-center justify-center gap-4 text-center">
        <span className="grid size-16 place-items-center rounded-full bg-aurora-teal/15 text-aurora-teal">
          <Icon name="CheckCircle2" className="size-8" />
        </span>
        <h3 className="text-2xl font-semibold text-mist-50">
          Thanks, {data.name.split(" ")[0] || "there"} — enquiry received
        </h3>
        <p className="max-w-sm text-mist-400">
          A TAAF advisor will reach out by {data.contactMethod.toLowerCase()}{" "}
          within one business day.
        </p>
        <p className="text-xs text-mist-500">
          (Demo only — connect a backend before launch.)
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* progress */}
      <div className="mb-7">
        <div className="mb-2 flex justify-between">
          {steps.map((s, i) => (
            <button
              key={s}
              type="button"
              onClick={() => i <= step && setStep(i)}
              className="flex flex-1 flex-col items-center gap-1.5"
            >
              <span
                className={cn(
                  "size-3 rounded-full transition-all duration-300",
                  i < step
                    ? "bg-aurora-indigo"
                    : i === step
                      ? "bg-aurora-indigo ring-4 ring-aurora-indigo/20"
                      : "bg-ink-700"
                )}
              />
              <span
                className={cn(
                  "hidden text-[10px] sm:block",
                  i === step ? "font-medium text-mist-200" : "text-mist-500"
                )}
              >
                {s}
              </span>
            </button>
          ))}
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink-800">
          <motion.div
            className="h-full bg-gradient-to-r from-aurora-indigo to-aurora-violet"
            initial={false}
            animate={{ width: `${(step / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <div className="min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            variants={stepVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col gap-4"
          >
            {step === 0 && (
              <>
                <Field label="Full name">
                  <input
                    className={inputCls}
                    placeholder="Jane Smith"
                    value={data.name}
                    onChange={(e) => set("name", e.target.value)}
                  />
                </Field>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Email">
                    <input
                      type="email"
                      className={inputCls}
                      placeholder="you@email.com"
                      value={data.email}
                      onChange={(e) => set("email", e.target.value)}
                    />
                  </Field>
                  <Field label="Phone (optional)">
                    <input
                      type="tel"
                      className={inputCls}
                      placeholder="0400 000 000"
                      value={data.phone}
                      onChange={(e) => set("phone", e.target.value)}
                    />
                  </Field>
                </div>
                <Field label="Business name (optional)">
                  <input
                    className={inputCls}
                    placeholder="Your business"
                    value={data.business}
                    onChange={(e) => set("business", e.target.value)}
                  />
                </Field>
              </>
            )}

            {step === 1 && (
              <Field label="Which best describes you?">
                <OptionGrid
                  options={clientTypes}
                  value={data.clientType}
                  onSelect={(v) => set("clientType", v)}
                />
              </Field>
            )}

            {step === 2 && (
              <Field label="What do you need help with? (select all that apply)">
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {serviceOptions.map((s) => (
                    <Toggle
                      key={s}
                      label={s}
                      active={data.services.includes(s)}
                      onClick={() => toggleService(s)}
                    />
                  ))}
                </div>
              </Field>
            )}

            {step === 3 && (
              <>
                <Field label="When do you need help?">
                  <OptionGrid
                    options={timeframes}
                    value={data.timeframe}
                    onSelect={(v) => set("timeframe", v)}
                  />
                </Field>
                <Field label="Preferred contact method">
                  <OptionGrid
                    options={contactMethods}
                    value={data.contactMethod}
                    onSelect={(v) => set("contactMethod", v)}
                    cols={2}
                  />
                </Field>
              </>
            )}

            {step === 4 && (
              <>
                <Field label="Anything else we should know? (optional)">
                  <textarea
                    rows={4}
                    className={inputCls}
                    placeholder="A quick note about your situation…"
                    value={data.message}
                    onChange={(e) => set("message", e.target.value)}
                  />
                </Field>
                <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-ink-700 bg-ink-850 p-4">
                  <input
                    type="checkbox"
                    className="mt-0.5 size-4 accent-[var(--color-aurora-indigo)]"
                    checked={data.consent}
                    onChange={(e) => set("consent", e.target.checked)}
                  />
                  <span className="text-sm text-mist-300">
                    I agree to be contacted about my enquiry. We&apos;ll never
                    share your details.
                  </span>
                </label>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* footer */}
      <div className="mt-6 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="inline-flex items-center gap-1.5 rounded-full border border-ink-700 px-5 py-2.5 text-sm font-medium text-mist-300 transition-colors hover:border-ink-600 hover:text-mist-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Icon name="ArrowRight" className="size-4 rotate-180" /> Back
        </button>
        <button
          type="button"
          onClick={last ? submit : () => setStep((s) => s + 1)}
          disabled={!valid() || submitting}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-aurora-indigo to-aurora-violet px-6 py-2.5 text-sm font-semibold text-white shadow-[0_14px_30px_-14px_rgba(99,102,241,0.7)] transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
        >
          {submitting
            ? "Sending…"
            : last
              ? "Submit enquiry"
              : "Continue"}
          {!submitting && (
            <Icon name={last ? "CheckCircle2" : "ArrowRight"} className="size-4" />
          )}
        </button>
      </div>
      <p className="mt-3 text-center text-[11px] text-mist-500">
        Step {step + 1} of {steps.length} · {steps[step]}
      </p>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-mist-300">{label}</label>
      {children}
    </div>
  );
}

function OptionGrid({
  options,
  value,
  onSelect,
  cols = 1,
}: {
  options: string[];
  value: string;
  onSelect: (v: string) => void;
  cols?: number;
}) {
  return (
    <div
      className={cn(
        "grid gap-2",
        cols === 2 ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-2"
      )}
    >
      {options.map((o) => (
        <Toggle
          key={o}
          label={o}
          active={value === o}
          onClick={() => onSelect(o)}
          radio
        />
      ))}
    </div>
  );
}

function Toggle({
  label,
  active,
  onClick,
  radio = false,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  radio?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center gap-2.5 rounded-xl border p-3 text-left text-sm transition-all duration-200",
        active
          ? "border-aurora-indigo bg-aurora-indigo/10 text-mist-50"
          : "border-ink-700 text-mist-300 hover:border-ink-600 hover:bg-ink-850"
      )}
    >
      <span
        className={cn(
          "grid size-4 shrink-0 place-items-center border border-current text-white",
          radio ? "rounded-full" : "rounded",
          active ? "bg-aurora-indigo" : "bg-transparent"
        )}
      >
        {active && <Icon name="CheckCircle2" className="size-3" />}
      </span>
      {label}
    </button>
  );
}
