import React, { useEffect, useRef, useState } from "react";

interface Props {
  start?: number;
  end: number;
  duration?: number; // seconds
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  onComplete?: () => void;
}

function formatNumber(value: number, decimals = 0) {
  if (decimals > 0) {
    return value.toFixed(decimals);
  }
  return Math.round(value).toLocaleString();
}

export default function CountUp({
  start = 0,
  end,
  duration = 1.2,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
  onComplete,
}: Props) {
  const [display, setDisplay] = useState<string>(() =>
    prefix + formatNumber(start, decimals) + suffix
  );

  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const fromRef = useRef<number>(start);
  const toRef = useRef<number>(end);

  useEffect(() => {
    // keep refs up to date if props change
    fromRef.current = start;
    toRef.current = end;

    // Respect reduced motion
    const prefersReduced = typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;
    if (prefersReduced) {
      setDisplay(prefix + formatNumber(end, decimals) + suffix);
      onComplete?.();
      return;
    }

    // If duration is zero or start === end, jump to end
    if (duration <= 0 || start === end) {
      setDisplay(prefix + formatNumber(end, decimals) + suffix);
      onComplete?.();
      return;
    }

    // reset any previous animation
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    startTimeRef.current = null;

    const step = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = (timestamp - startTimeRef.current) / 1000; // seconds
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = fromRef.current + (toRef.current - fromRef.current) * eased;

      setDisplay(prefix + formatNumber(current, decimals) + suffix);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        // ensure exact final value
        setDisplay(prefix + formatNumber(toRef.current, decimals) + suffix);
        onComplete?.();
        startTimeRef.current = null;
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      startTimeRef.current = null;
    };
    // Intentionally include only the props that should restart the animation
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, end, duration, decimals, prefix, suffix]);

  return (
    <span aria-hidden="true" className={className}>
      {display}
    </span>
  );
}
