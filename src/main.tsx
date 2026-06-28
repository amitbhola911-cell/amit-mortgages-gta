// src/main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";
import SiteConfig from "@/config/site"; // adjust path if your alias differs

// Inject Google Analytics (gtag) once at app startup.
// Reads NEXT_PUBLIC_ANALYTICS_ID first, then falls back to SiteConfig.ANALYTICS_ID.
function injectGtag(gaId?: string | null) {
  if (!gaId) return;

  const externalId = "ga-gtag-js";
  const inlineId = "ga-gtag-init";

  // External gtag.js script
  if (!document.getElementById(externalId)) {
    const s = document.createElement("script");
    s.id = externalId;
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(s);
  }

  // Inline initialization
  if (!document.getElementById(inlineId)) {
    const inline = document.createElement("script");
    inline.id = inlineId;
    inline.type = "text/javascript";
    inline.text = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}', { page_path: window.location.pathname });
    `.trim();
    document.head.appendChild(inline);
  }
}

// Prefer environment variable (must be present at build time for Vite builds)
const GA_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID ?? SiteConfig.ANALYTICS_ID ?? null;
injectGtag(GA_ID);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
