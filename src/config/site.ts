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
export const PHONE = "+1-647-992-1909"; // E.164 format
export const EMAIL = "info@amitmortgages.ca";

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
 * If you prefer not to hardcode, set to empty string and provide via environment or page-level props.
 */
export const FSRA_LICENSE = "M22002220"; // set to "" if you don't want to include in JSON-LD
export const LICENSE_DISPLAY = "FSRA License 13072"; // human-friendly display text

/**
 * Service area and languages for LocalBusiness schema and copy
 */
export const SERVICE_AREAS = ["Greater Toronto Area", "Mississauga", "Toronto", "Brampton"];
export const LANGUAGES = ["English", "Hindi", "Punjabi", "Urdu"];

/**
 * Analytics and tracking
 * Set to null to omit the analytics snippet in SEO component.
 */
export const ANALYTICS_ID: string | null = "G-XXXXXXX";

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
  absoluteUrl,
  DEFAULT_META,
};

export default SiteConfig;
