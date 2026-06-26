"use client";

import { useEffect, useState } from "react";

/**
 * Smooth cross-fading rotating word. All words are stacked absolutely over an
 * invisible spacer (sized to the longest word, so layout never shifts); only
 * opacity + translateY transition, which stays buttery on the GPU.
 */
export function RotatingWords({
  words,
  interval = 2000,
  className = "",
}: {
  words: string[];
  interval?: number;
  className?: string;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const t = setInterval(() => setI((p) => (p + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [words.length, interval]);

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");

  return (
    <span className="relative inline-block align-bottom">
      {/* spacer reserves space; same className so width/height match the words */}
      <span aria-hidden className={`invisible ${className}`}>
        {longest}
      </span>
      {words.map((w, idx) => (
        <span
          key={w}
          aria-hidden={idx !== i}
          className={`absolute left-0 top-0 whitespace-nowrap transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${className}`}
          style={{
            opacity: idx === i ? 1 : 0,
            transform: idx === i ? "translateY(0)" : "translateY(0.4em)",
            willChange: "opacity, transform",
          }}
        >
          {w}
        </span>
      ))}
    </span>
  );
}
