"use client";

import { useEffect, useState } from "react";

/**
 * Cycles through a list of words in place, re-triggering a CSS swap animation
 * on each change (the `key` remount restarts `animate-word-swap`).
 * Respects prefers-reduced-motion by holding on the first word.
 */
export function RotatingWords({
  words,
  interval = 2200,
  className,
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

  return (
    <span
      key={i}
      className={`inline-block animate-word-swap [transform-style:preserve-3d] ${
        className ?? ""
      }`}
    >
      {words[i]}
    </span>
  );
}
