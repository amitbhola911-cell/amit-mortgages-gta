import { Megaphone } from "lucide-react";

/**
 * 📝 EDIT YOUR TICKER MESSAGES HERE
 * Add, remove, or change any line below. They scroll in order.
 */
const TICKER_MESSAGES: string[] = [
  "BREAKING: Fixed 5-year rates starting from 4.19% — Call 647 992 1909 today!",
  "🏠 First-time home buyers: Up to $4,000 Ontario Land Transfer Tax rebate available",
  "💼 Self-employed? We work with lenders who understand your income",
  "⚡ Pre-approval in 24 hours — Lock your rate before the next BoC announcement",
  "🔑 Renewing soon? Don't auto-renew. Compare 50+ lenders with Amit Mortgages",
];

export function NewsTicker() {
  // Duplicate the list so the CSS marquee loops seamlessly
  const reel = [...TICKER_MESSAGES, ...TICKER_MESSAGES];

  return (
    <div className="relative flex items-stretch overflow-hidden border-y border-red-900/40 bg-red-700 text-white shadow-md">
      <div className="flex shrink-0 items-center gap-2 bg-red-900 px-4 py-2 text-xs font-bold uppercase tracking-widest">
        <Megaphone className="h-4 w-4 animate-pulse" />
        <span>Breaking</span>
      </div>

      <div className="relative flex-1 overflow-hidden">
        <div className="ticker-track flex whitespace-nowrap py-2 text-sm font-medium">
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
