import { CountUp } from "../components/fx/CountUp";

/**
 * Animated value for a stat from stats.js. Approximate figures get a "~" so they never read as exact.
 * @param {{ stat: import("../data/stats").Stat, className?: string }} props
 */
export function StatValue({ stat, className }) {
  const prefix = `${stat.approx ? "~" : ""}${stat.prefix}`;
  return <CountUp to={stat.value} prefix={prefix} suffix={stat.suffix} className={className} />;
}
