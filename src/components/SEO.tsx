// src/components/SEO.tsx
import React, { useEffect } from "react";
import SiteConfig, {
  DEFAULT_META,
  absoluteUrl,
  ANALYTICS_ID,
  DEFAULT_OG,
  DEFAULT_LOGO,
  SITE,
  PHONE,
  EMAIL,
  ADDRESS,
  FSRA_LICENSE,
  LICENSE_DISPLAY,
  SERVICE_AREAS,
  LANGUAGES,
  SITE_LOCALE,
} from "@/config/site";

/** Props for SEO component */
type SEOProps = {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  noIndex?: boolean;
  children?: React.ReactNode;
};

function ensureMetaTag(nameOrProp: string, value: string, isProperty = false) {
  const selector = isProperty ? `meta[property="${nameOrProp}"]` : `meta[name="${nameOrProp}"]`;
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    if (isProperty) el.setAttribute("property", nameOrProp);
    else el.setAttribute("name", nameOrProp);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function ensureLinkRel(rel: string, href: string) {
  const selector = `link[rel="${rel}"]`;
  let el = document.head.querySelector(selector) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function injectScriptOnce(id: string, src?: string, inline?: string, async = true) {
  if (document.getElementById(id)) return;
  const s = document.createElement("script");
  s.id = id;
  if (src) {
    s.src = src;
    s.async = async;
  }
  if (inline) s.text = inline;
  document.head.appendChild(s);
}

export default function SEO({
  title,
  description,
  canonical = "/",
  image,
  noIndex = false,
  children,
}: SEOProps) {
  const meta = {
    title: title ?? DEFAULT_META.title,
    description: description ?? DEFAULT_META.description,
    canonical: canonical ?? DEFAULT_META.canonical,
    image: image ?? DEFAULT_META.image ?? DEFAULT_OG,
  };

  const absoluteCanonical = absoluteUrl(meta.canonical);
  const absoluteImage = meta.image?.startsWith("http")
    ? meta.image
    : absoluteUrl(meta.image || DEFAULT_OG);

  useEffect(() => {
    document.title = meta.title;

    ensureMetaTag("description", meta.description);
    ensureMetaTag("robots", noIndex ? "noindex, nofollow" : "index, follow");
    ensureLinkRel("canonical", absoluteCanonical);

    ensureMetaTag("og:title", meta.title, true);
    ensureMetaTag("og:description", meta.description, true);
    ensureMetaTag("og:type", "website", true);
    ensureMetaTag("og:url", absoluteCanonical, true);
    ensureMetaTag("og:image", absoluteImage, true);
    ensureMetaTag("og:locale", SITE_LOCALE ?? "en-CA", true);

    ensureMetaTag("twitter:card", "summary_large_image");
    ensureMetaTag("twitter:title", meta.title);
    ensureMetaTag("twitter:description", meta.description);
    ensureMetaTag("twitter:image", absoluteImage);

    const ldId = "ld-json-localbusiness";
    const existingLd = document.getElementById(ldId) as HTMLScriptElement | null;
    const localBusiness = {
      "@context": "https://schema.org",
      "@type": "FinancialService",
      "name": meta.title,
      "url": SITE,
      "logo": DEFAULT_LOGO,
      "image": absoluteImage,
      "telephone": PHONE || undefined,
      "email": EMAIL || undefined,
      "address": {
        "@type": "PostalAddress",
        streetAddress: ADDRESS?.streetAddress || undefined,
        addressLocality: ADDRESS?.addressLocality || undefined,
        addressRegion: ADDRESS?.addressRegion || undefined,
        postalCode: ADDRESS?.postalCode || undefined,
        addressCountry: ADDRESS?.addressCountry || undefined,
      },
      "areaServed": SERVICE_AREAS || undefined,
      "knowsLanguage": LANGUAGES || undefined,
      "sameAs": [],
      "hasCredential": FSRA_LICENSE ? [{ "@type": "EducationalOccupationalCredential", "credentialCategory": "License", "name": `FSRA License ${FSRA_LICENSE}` }] : undefined,
      "memberOf": LICENSE_DISPLAY ? [{ "@type": "Organization", "name": LICENSE_DISPLAY }] : undefined,
    };

    const ldJson = JSON.stringify(localBusiness, null, 2);

    if (existingLd) {
      existingLd.text = ldJson;
    } else {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.id = ldId;
      s.text = ldJson;
      document.head.appendChild(s);
    }

    // Inject Google tag (gtag.js) only when ANALYTICS_ID is set and not already present
    const gaId = ANALYTICS_ID ?? null;
    if (gaId) {
      const gaScriptId = "ga-gtag-js";
      if (!document.getElementById(gaScriptId)) {
        injectScriptOnce(gaScriptId, `https://www.googletagmanager.com/gtag/js?id=${gaId}`, undefined, true);
      }

      const gaInlineId = "ga-gtag-init";
      if (!document.getElementById(gaInlineId)) {
        const inline = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}', { page_path: window.location.pathname });
        `.trim();
        injectScriptOnce(gaInlineId, undefined, inline, false);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meta.title, meta.description, meta.canonical, meta.image, noIndex]);

  return <>{children}</>;
}
