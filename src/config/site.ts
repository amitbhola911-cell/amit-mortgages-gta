// src/config/site.ts
// Single source of truth for site-wide URLs and contact info.
// Edit the values below to match your production settings before committing.

export const SITE = "https://amitmortgages.ca"; // change if different
export const DEFAULT_OG = `${SITE}/og-default.jpg`;
export const DEFAULT_LOGO = `${SITE}/logo.png`;

/**
 * Contact & business info
 * - Fill these from your authoritative source (company docs, license, or files in the repo).
 * - Leave empty strings if you prefer to inject values from environment or another file.
 */
export const PHONE = process.env.NEXT_PUBLIC_PHONE ?? "+1-647-992-1909";
export const EMAIL = process.env.NEXT_PUBLIC_EMAIL ?? "info@amitmortgages.ca";

/**
 * Physical address used in structured data (LocalBusiness)
 * Keep fields separate so they can be used in JSON-LD easily.
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
 * - FSRA_LICENSE is your individual licence number.
 * - LICENSE_DISPLAY is the brokerage licence (human readable) that must be shown.
 */
export const FSRA_LICENSE = "M22002220";
export const LICENSE_DISPLAY = "FSRA License 13072";

/**
 * Service area and languages for LocalBusiness schema and copy
 */
export const SERVICE_AREAS = ["Greater Toronto Area", "Mississauga", "Toronto", "Brampton"];
export const LANGUAGES = ["English", "Hindi", "Punjabi", "Urdu"];

/**
 * Analytics and tracking
 * - Prefer environment variable NEXT_PUBLIC_ANALYTICS_ID for flexibility.
 * - Fallback defaults to the Measurement ID you provided so the site will start sending events immediately.
 * - STREAM_ID is included for reference if you need it in dashboards or server-side calls.
 */
export const ANALYTICS_ID: string | null =
  process.env.NEXT_PUBLIC_ANALYTICS_ID ?? "G-J709MLC3GR";

export const STREAM_ID: string | null = process.env.NEXT_PUBLIC_STREAM_ID ?? "4083996442";

/**
 * Optional site metadata
 */
export const SITE_LOCALE = "en-CA";
export const OPENING_HOURS = "Mo-Fr 09:00-18:00";

/**
 * Utility: build an absolute URL from a relative path
 * Usage: absoluteUrl("/about") -> "https://amitmortgages.ca/about"
 */
export function absoluteUrl(path = "/") {
  try {
    return path.startsWith("http") ? path : new URL(path, SITE).toString();
  } catch {
    return SITE;
  }
}

/**
 * Optional: default meta values used across pages
 */
export const DEFAULT_META = {
  title: "Amit Mortgages — GTA Mortgage Agent",
  description:
    "One advisor, 50+ lenders. Get sharper mortgage rates and personal guidance for buying, renewing, or refinancing in the Greater Toronto Area.",
  canonical: "/",
  image: DEFAULT_OG,
};

/**
 * Export a single default object for convenience (optional)
 */
const SiteConfig = {
  SITE,
  DEFAULT_OG,
  DEFAULT_LOGO,
  PHONE,
  EMAIL,
  ADDRESS,
  FSRA_LICENSE,
  LICENSE_DISPLAY,
  SERVICE_AREAS,
  LANGUAGES,
  ANALYTICS_ID,
  STREAM_ID,
  SITE_LOCALE,
  OPENING_HOURS,
  absoluteUrl,
  DEFAULT_META,
};

export default SiteConfig;
