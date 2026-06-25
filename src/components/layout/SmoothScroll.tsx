"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Production-grade smooth scrolling with Lenis.
 * - lerp-based interpolation for a continuous "buttery" feel
 * - native momentum on touch (smoother than emulating it)
 * - single rAF loop; cleaned up on unmount
 * - skips entirely under prefers-reduced-motion
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const lenis = new Lenis({
      lerp: 0.09, // lower = smoother/heavier glide
      wheelMultiplier: 1,
      smoothWheel: true,
      syncTouch: false, // use native momentum on touch devices
      touchMultiplier: 1.5,
      overscroll: false,
    });

    let raf = 0;
    function loop(time: number) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    // Smoothly scroll to in-page anchors, accounting for the fixed header.
    function onClick(e: MouseEvent) {
      const target = (e.target as HTMLElement)?.closest(
        'a[href^="/#"], a[href^="#"]'
      ) as HTMLAnchorElement | null;
      if (!target) return;
      const hash = target.getAttribute("href")!.split("#")[1];
      const el = hash ? document.getElementById(hash) : null;
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el, { offset: -96, duration: 1.1 });
      }
    }
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
