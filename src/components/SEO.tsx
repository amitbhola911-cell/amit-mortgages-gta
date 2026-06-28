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
    // Document title
    if (meta.title) document.title = meta.title;

    // Basic meta tags
    ensureMetaTag("description", meta.description);
    ensureMetaTag("robots", noIndex ? "noindex, nofollow" : "index, follow");
    ensureLinkRel("canonical", absoluteCanonical);

    // Open Graph
    ensureMetaTag("og:title", meta.title, true);
    ensureMetaTag("og:description", meta.description, true);
    ensureMetaTag("og:type", "website", true);
    ensureMetaTag("og:url", absoluteCanonical, true);
    ensureMetaTag("og:image", absoluteImage, true);
    ensureMetaTag("og:locale", SITE_LOCALE ?? "en-CA", true);

    // Twitter
    ensureMetaTag("twitter:card", "summary_large_image");
    ensureMetaTag("twitter:title", meta.title);
    ensureMetaTag("twitter:description", meta.description);
    ensureMetaTag("twitter:image", absoluteImage);

    /* ---------------- JSON-LD: Organization / LocalBusiness (FinancialService) ---------------- */
    const ldId = "ld-json-localbusiness";
    const existingLd = document.getElementById(ldId) as HTMLScriptElement | null;

    // Build contactPoint if phone/email exist
    const contactPoints: any[] = [];
    if (PHONE) {
      contactPoints.push({
        "@type": "ContactPoint",
        telephone: PHONE,
        contactType: "customer service",
        areaServed: SERVICE_AREAS || undefined,
        availableLanguage: LANGUAGES || ["English"],
      });
    }
    if (EMAIL) {
      contactPoints.push({
        "@type": "ContactPoint",
        email: EMAIL,
        contactType: "customer service",
        areaServed: SERVICE_AREAS || undefined,
        availableLanguage: LANGUAGES || ["English"],
      });
    }

    // Identifier for license (PropertyValue) if FSRA_LICENSE exists
    const identifier = FSRA_LICENSE
      ? {
          "@type": "PropertyValue",
          propertyID: "BusinessLicense",
          value: FSRA_LICENSE,
          description: LICENSE_DISPLAY || "Regulatory license",
        }
      : undefined;

    // Address block (only include when ADDRESS is present)
    const addressBlock = ADDRESS
      ? {
          "@type": "PostalAddress",
          streetAddress: ADDRESS?.streetAddress || undefined,
          addressLocality: ADDRESS?.addressLocality || undefined,
          addressRegion: ADDRESS?.addressRegion || undefined,
          postalCode: ADDRESS?.postalCode || undefined,
          addressCountry: ADDRESS?.addressCountry || undefined,
        }
      : undefined;

    // sameAs: prefer SiteConfig.SOCIALS or empty
    const sameAs = (SiteConfig && (SiteConfig as any).SOCIALS) || undefined;

    // openingHours: if provided in SiteConfig (optional)
    const openingHours = (SiteConfig && (SiteConfig as any).OPENING_HOURS) || undefined;

    const localBusiness: Record<string, any> = {
      "@context": "https://schema.org",
      "@type": "FinancialService",
      name: SiteConfig?.SITE_NAME ?? meta.title ?? "Amit Mortgages",
      legalName: SiteConfig?.LEGAL_NAME || undefined,
      url: SITE || (typeof window !== "undefined" ? window.location.origin : undefined),
      logo: DEFAULT_LOGO || undefined,
      image: absoluteImage || undefined,
      description: meta.description || undefined,
      telephone: PHONE || undefined,
      email: EMAIL || undefined,
      address: addressBlock,
      contactPoint: contactPoints.length ? contactPoints : undefined,
      areaServed: SERVICE_AREAS || undefined,
      knowsLanguage: LANGUAGES || undefined,
      sameAs: sameAs || undefined,
      openingHours: openingHours || undefined,
      hasCredential: FSRA_LICENSE
        ? [
            {
              "@type": "EducationalOccupationalCredential",
              credentialCategory: "License",
              name: `FSRA License ${FSRA_LICENSE}`,
            },
          ]
        : undefined,
      memberOf: LICENSE_DISPLAY
        ? [
            {
              "@type": "Organization",
              name: LICENSE_DISPLAY,
            },
          ]
        : undefined,
      identifier: identifier || undefined,
      // Optional: serviceType or priceRange can be added in SiteConfig and included here
      serviceType: (SiteConfig && (SiteConfig as any).SERVICE_TYPE) || undefined,
      priceRange: (SiteConfig && (SiteConfig as any).PRICE_RANGE) || undefined,
    };

    // Remove undefined keys for a cleaner JSON-LD
    Object.keys(localBusiness).forEach((k) => localBusiness[k] === undefined && delete localBusiness[k]);

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

    // NOTE: Intentionally do NOT inject analytics here. Use a consent-gated injector (CookieConsent).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meta.title, meta.description, meta.canonical, meta.image, noIndex]);

  return <>{children}</>;
}
