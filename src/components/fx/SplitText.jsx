import { motion } from "motion/react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { DURATION, EASE, VIEWPORT } from "../../lib/motion";

const unitVariants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: DURATION.reveal, ease: EASE.outExpo } },
};

function splitUnits(text, by) {
  return by === "line" ? text.split("\n") : text.split(/\s+/).filter(Boolean);
}

/**
 * Reveals text word by word (default) or line by line, each unit rising out of a mask.
 * For line mode, separate lines with "\n". Screen readers get the plain text once.
 *
 * @param {object} props
 * @param {string} props.text
 * @param {"word" | "line"} [props.by]
 * @param {"view" | "mount"} [props.trigger] animate when scrolled into view, or immediately
 * @param {string} [props.as] wrapper element
 */
export function SplitText({
  text,
  by = "word",
  trigger = "view",
  as = "span",
  stagger = 0.06,
  delay = 0,
  className,
}) {
  const isReduced = useReducedMotion();
  const Wrapper = as;

  if (isReduced) {
    return <Wrapper className={className}>{text.replace(/\n/g, " ")}</Wrapper>;
  }

  const MotionWrapper = motion[as];
  const triggerProps =
    trigger === "mount"
      ? { animate: "visible" }
      : { whileInView: "visible", viewport: VIEWPORT };
  const isLine = by === "line";

  return (
    <MotionWrapper
      className={className}
      initial="hidden"
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      {...triggerProps}
    >
      <span className="sr-only">{text.replace(/\n/g, " ")}</span>
      {splitUnits(text, by).map((unit, index) => (
        <span key={`${unit}-${index}`} aria-hidden="true" className={isLine ? "block" : "inline"}>
          {/* Padding keeps descenders inside the mask; the negative margin cancels it in layout. */}
          <span className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-bottom">
            <motion.span className="inline-block will-change-transform" variants={unitVariants}>
              {unit}
            </motion.span>
          </span>
          {!isLine && " "}
        </span>
      ))}
    </MotionWrapper>
  );
}
