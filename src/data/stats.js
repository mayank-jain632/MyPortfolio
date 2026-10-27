// Proof bank, from hub/PORTFOLIO_CONTEXT.md section 3. Shaped for CountUp:
// <CountUp to={value} prefix={prefix} suffix={suffix} />, with "about" added when `approx` is true.
// Never add desk performance figures here.

/**
 * @typedef {object} Stat
 * @property {string} id
 * @property {number} value
 * @property {string} prefix
 * @property {string} suffix
 * @property {boolean} approx render "about" before the number
 * @property {string} label
 * @property {string} source where the number comes from
 * @property {boolean} featured shown in the headline proof strip
 */

/** @returns {Stat} */
function stat({ prefix = "", suffix = "", approx = false, featured = false, ...rest }) {
  return { prefix, suffix, approx, featured, ...rest };
}

/** @type {Stat[]} */
export const stats = [
  stat({ id: "signal-latency", value: 1, prefix: "<", suffix: "s", label: "signal execution, down from minutes", source: "Crescent", featured: true }),
  stat({ id: "signal-clients", value: 50, label: "clients receiving automated signals", source: "Crescent", featured: true }),
  stat({ id: "daily-signals", value: 20, approx: true, label: "signals a day", source: "Crescent" }),
  stat({ id: "invoice-turnaround", value: 15, suffix: " min", approx: true, label: "invoice turnaround per client", source: "Crescent" }),
  stat({ id: "invoices-monthly", value: 100, suffix: "+", label: "invoices a month", source: "Crescent" }),
  // Resume says about 30, Mayank has said 20 to 25. "20+" holds either way.
  stat({ id: "hours-saved", value: 20, suffix: "+", label: "hours saved monthly on invoicing", source: "Crescent", featured: true }),
  stat({ id: "training-images", value: 3000, suffix: "+", label: "image training set, built end to end", source: "AvaWatz" }),
  stat({ id: "hackathon-hours", value: 6, suffix: " hours", label: "to build a recursive multi-agent platform", source: "AWS Agentic AI Hackathon" }),
  stat({ id: "mesh-latency", value: 100, prefix: "<", suffix: "ms", label: "latency over a private Tailscale mesh", source: "Clarity" }),
  stat({ id: "recognition-trials", value: 30, approx: true, label: "live trials where our team's app recognized enrolled family", source: "Myst (team result)" }),
  stat({ id: "live-strategies", value: 4, suffix: " to 5", label: "live strategies gated by volatility signals", source: "Trading desk" }),
  stat({ id: "stores", value: 3, suffix: "+", label: "stores running shelf vision", source: "Family Dollar via Convergent Forge" }),
  stat({ id: "hackathon-podiums", value: 3, label: "hackathon podiums in 2026", source: "Clarity, AWS, Myst", featured: true }),
];

export const featuredStats = stats.filter((item) => item.featured);

/** @param {string} id */
export function getStat(id) {
  return stats.find((item) => item.id === id);
}
