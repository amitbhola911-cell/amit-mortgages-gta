import { useEffect } from "react";

type Props = {
  title: string;
  description?: string;
  canonical?: string;
};

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
}

export default function SEO({ title, description, canonical }: Props) {
  useEffect(() => {
    document.title = title;
    if (description) {
      setMeta("name", "description", description);
      setMeta("property", "og:description", description);
    }
    setMeta("property", "og:title", title);
    if (canonical) {
      const href =
        typeof window !== "undefined" ? new URL(canonical, window.location.origin).toString() : canonical;
      setCanonical(href);
      setMeta("property", "og:url", href);
    }
  }, [title, description, canonical]);
  return null;
}
