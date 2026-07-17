import { Megaphone } from "lucide-react";

/**
 * 📝 EDIT YOUR TICKER MESSAGES HERE
 */
const TICKER_MESSAGES: string[] = [
  "BREAKING: Fixed 5-year rates starting from 4.19% — Call 647 992 1909 today!",
  "RATE ANNOUNCEMENT: The Bank of Canada held its benchmark interest rate steady at 2.25% on July 15, 2026, marking 6th consecutive hold.",
  "PREDICTION: Economy to stabalize alongside projections that inflation will gradually ease.",
  "🏠 First-time home buyers: Up to $4,000 Ontario Land Transfer Tax rebate available",
  "💼 Self-employed? We work with lenders who understand your income",
  "⚡ Pre-approval in 24 hours — Lock your rate before the next BoC announcement",
  "🔑 Renewing soon? Don't auto-renew. Compare 50+ lenders with Amit Mortgages",
  "🏗️ Buying pre-construction or new build? Let's line up your financing early",
  "💳 Credit bruised? We work with lenders who look past the score",
  "🏡 Unlock your home equity with a HELOC — renovate, invest, or consolidate",
  "🗣️ Fluent in English, Hindi, Punjabi & Urdu — let's talk in your language",
];

export function NewsTicker() {
  const reel = [...TICKER_MESSAGES, ...TICKER_MESSAGES];

  return (
    <div className="relative flex items-stretch overflow-hidden border-y border-red-900/40 bg-red-700 text-white shadow-md">
      <div className="flex shrink-0 items-center gap-2 bg-red-900 px-4 py-2 text-xs font-bold uppercase tracking-widest">
        <Megaphone className="h-4 w-4 animate-pulse" />
        <span>Breaking</span>
      </div>

      <div className="relative flex-1 overflow-hidden">
        <div className="ticker-track flex w-max whitespace-nowrap py-2 text-sm font-medium animate-ticker">
          {reel.map((msg, i) => (
            <span key={i} className="mx-8 inline-flex items-center gap-3">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/80" />
              {msg}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
