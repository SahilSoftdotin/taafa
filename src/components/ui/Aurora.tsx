import { cn } from "@/lib/utils";

/**
 * Decorative aurora gradient field. Pure CSS, drifts slowly. Purely visual.
 */
export function Aurora({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <div className="absolute -left-1/4 top-[-10%] size-[55vw] rounded-full bg-aurora-indigo/20 blur-[120px] animate-aurora-drift" />
      <div className="absolute right-[-15%] top-[6%] size-[45vw] rounded-full bg-fuchsia/15 blur-[130px] animate-aurora-drift [animation-delay:-6s]" />
      <div className="absolute bottom-[-20%] left-1/3 size-[50vw] rounded-full bg-aurora-teal/18 blur-[140px] animate-aurora-drift [animation-delay:-3s]" />
      <div className="absolute right-[8%] bottom-[-10%] size-[35vw] rounded-full bg-amber/12 blur-[130px] animate-aurora-drift [animation-delay:-9s]" />
    </div>
  );
}

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}
