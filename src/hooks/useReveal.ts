import { useEffect, useRef, useState } from "react";

type Options = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

export default function useReveal({ threshold = 0.15, rootMargin = "0px", once = true }: Options = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let didUnobserve = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once && !didUnobserve) {
              observer.unobserve(node);
              didUnobserve = true;
            }
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      try {
        if (!didUnobserve) observer.unobserve(node);
      } catch {
        /* ignore if node already removed */
      }
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  return { ref, visible };
}
