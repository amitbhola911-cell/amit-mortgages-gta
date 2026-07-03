// src/config/site.ts
// Single source of truth for site-wide URLs and contact info.
// Edit the values below to match your production settings before committing.

export const SITE_NAME = "Amit Mortgages";
export const LEGAL_NAME = "Amit Mortgages Inc.";
export const SITE = "https://amitmortgages.ca";
export const SITE_LOCALE = "en-CA";

export const DEFAULT_OG = `${SITE}/og-default.jpg`;
export const DEFAULT_LOGO = `${SITE}/logo.png`;

/**
 * Contact & business info
 * Use environment variables for values you may want to change without a code deploy.
 */
export const PHONE = process.env.NEXT_PUBLIC_PHONE ?? "+1-647-992-1909";
export const EMAIL = process.env.NEXT_PUBLIC_EMAIL ?? "info@amitmortgages.ca";

/**
 * Physical address used in structured data (LocalBusiness)
 */
export const ADDRESS = {
  streetAddress: "55 Renfrew Dr, #201",
  addressLocality: "Markham",
  addressRegion: "ON",
  postalCode: "L3R 8H3",
  addressCountry: "CA",
};

/**
 * Licensing and regulatory identifiers
 */
export const FSRA_LICENSE = process.env.NEXT_PUBLIC_FSRA_LICENSE ?? "M22002220";
export const LICENSE_DISPLAY = process.env.NEXT_PUBLIC_LICENSE_DISPLAY ?? "FSRA License 13072";

/**
 * Service area, languages, socials, opening hours
 */
export const SERVICE_AREAS = ["Greater Toronto Area", "Mississauga", "Toronto", "Brampton"];
export const LANGUAGES = ["English", "Hindi", "Punjabi", "Urdu"];
export const SOCIALS = [
  "https://www.instagram.com/AmitMortgages",
  "https://wa.me/16479921909"
];
export const OPENING_HOURS = ["Mo-Fr 09:00-18:00", "Sa 10:00-16:00"];

/**
 * Analytics and tracking
 * Leave ANALYTICS_ID empty to require consent gating (recommended).
 * If you prefer automatic injection (not recommended for privacy), set NEXT_PUBLIC_ANALYTICS_ID.
 */
export const ANALYTICS_ID: string | null = process.env.NEXT_PUBLIC_ANALYTICS_ID ?? "";
export const STREAM_ID: string | null = process.env.NEXT_PUBLIC_STREAM_ID ?? "";

/**
 * Optional site metadata used by SEO component
 */
export const DEFAULT_META = {
  title: "Amit Mortgages — GTA Mortgage Agent",
  description:
    "One advisor, 50+ lenders. Get sharper mortgage rates and personal guidance for buying, renewing, or refinancing in the Greater Toronto Area.",
  canonical: "/",
  image: DEFAULT_OG,
};

export const SERVICE_TYPE = ["Mortgage Broker", "Mortgage Advice", "Refinance"];
export const PRICE_RANGE = "$$$";

/**
 * Utility: build an absolute URL from a relative path
 */
export function absoluteUrl(path = "/") {
  try {
    return path.startsWith("http") ? path : new URL(path, SITE).toString();
  } catch {
    return SITE;
  }
}

/**
 * Default export for convenience
 */
const SiteConfig = {
  SITE_NAME,
  LEGAL_NAME,
  SITE,
  SITE_LOCALE,
  DEFAULT_OG,
  DEFAULT_LOGO,
  PHONE,
  EMAIL,
  ADDRESS,
  FSRA_LICENSE,
  LICENSE_DISPLAY,
  SERVICE_AREAS,
  LANGUAGES,
  SOCIALS,
  OPENING_HOURS,
  ANALYTICS_ID,
  STREAM_ID,
  DEFAULT_META,
  SERVICE_TYPE,
  PRICE_RANGE,
  absoluteUrl,
};

export default SiteConfig;
