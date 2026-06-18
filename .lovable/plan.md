## Goals
Apply 8Twelve compliance branding, swap in personal logo + photo + new contact details, add a Privacy Policy page, animate the stats counters, and refresh About copy.

## 1. Upload assets (lovable-assets CLI from /mnt/user-uploads/)
- `src/assets/personal-logo.png.asset.json` ← personal-logo.png
- `src/assets/profile-photo.png.asset.json` ← profile-photo.png (replaces use of `advisor.jpg`)
- `src/assets/8twelve-logo.png.asset.json` ← 8twelve-logo.png

## 2. Header (`src/components/SiteHeader.tsx`)
- Left: personal-logo (height ~h-12 on desktop, h-10 mobile) + "Amit Mortgages" wordmark.
- Right: 8Twelve logo (~h-14, i.e. ~10% larger than personal) with small caption underneath: **"Brokerage Licence #13072"**.
- Keep nav row below logos on desktop, hamburger on mobile. Phone CTA updated to **647 992 1909**.
- Add **Privacy** to nav.

## 3. Footer (`src/components/SiteFooter.tsx`)
- Mirror header: left = personal logo (10% smaller than 8Twelve), right = 8Twelve logo + "Brokerage Licence #13072".
- Update phone → `647 992 1909`, email → `info@amitmortgages.com` (everywhere they appear).
- Add Privacy Policy link in the explore list and as a dedicated bottom-row link.

## 4. Global contact info sweep
Replace `(416) 555-0199` → `647 992 1909` (and `tel:+14165550199` → `tel:+16479921909`) and `hello@amitmortgages.ca` → `info@amitmortgages.com` across:
- `SiteHeader.tsx`, `SiteFooter.tsx`, `Contact.tsx`, `Apply.tsx`, `NewsTicker.tsx`, `Index.tsx` (none currently but check).

## 5. NewsTicker speed
Reduce CSS animation duration from `45s` to `30s` in `src/styles.css` (`.ticker-track`).

## 6. Animated counters
- New `src/components/CountUp.tsx`: uses IntersectionObserver + requestAnimationFrame to animate from 0 → target when section scrolls into view. Props: `end`, `prefix`, `suffix`, `decimals`, `duration`.
- Use it in `Index.tsx` hero stats: 50 (+), 420 ($M+), 4.9 (★).

## 7. About page updates (`src/pages/About.tsx`)
- Languages chip: replace `Gujarati` with `Urdu` (so list reads: English · Hindi · Punjabi · Urdu). Same fix in `Index.tsx` advisor bullet.
- Replace the three intro paragraphs with the six new paragraphs provided (bold lead sentence + body each), rendered as styled sections.

## 8. Privacy Policy page
- New `src/pages/Privacy.tsx` with full 8Twelve privacy text (parsed from upload), rendered with typographic headings, paragraphs, and bullet lists. SEO component with title/desc.
- Wire route `/privacy` in `src/App.tsx`.
- Footer + header link to it.

## 9. Mobile responsiveness pass
- Verify header logos stack/scale on small screens (use `h-10 md:h-12` etc., flex-wrap).
- Footer grid already responsive; ensure new logo row collapses to stacked centered on mobile.

## 10. Dark→light gradient background
Already in place in `styles.css` body background. Tweak top stop to be slightly darker (e.g. `oklch(0.78 0.07 240)` at 0%) so the dark→light gradient is more pronounced across pages.

## Out of scope (will not touch)
- Formspree endpoint (still placeholder, waiting on user).
- Calculators page logic.
- Removing existing GTA hero image / Toronto skyline.

## Technical notes
- Asset pointers imported as JSON and used via `{logo.url}`.
- Counter respects `prefers-reduced-motion` (jumps straight to final value).
- All phone/email changes done via targeted line-replace, not regex shell.
