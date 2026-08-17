"use client";

import { useEffect, useRef, useState } from "react";

// The true value is the default render: server, hydration, reduced-motion,
// hidden tab, JS off. The count is only ever started once we know the element is
// on screen in a visible document, so the number can never ship as a stuck 0.
export default function CountUp({
  value,
  durationMs = 1400,
  className,
}: {
  value: number;
  durationMs?: number;
  className?: string;
}) {
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);
  const played = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let start: number | null = null;

    const run = () => {
      if (played.current) return;
      played.current = true;

      const tick = (t: number) => {
        if (start === null) start = t;
        const p = Math.min((t - start) / durationMs, 1);
        const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p); // ease-out-expo
        setDisplay(Math.round(value * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };

      setDisplay(0);
      raf = requestAnimationFrame(tick);
      // Belt and braces: if rAF is throttled away, land on the real number.
      window.setTimeout(() => setDisplay((d) => (d === value ? d : value)), durationMs + 600);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting) && document.visibilityState === "visible") run();
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, durationMs]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString("en-US")}
    </span>
  );
}
