import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from "framer-motion";

interface Props {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export const Counter = ({
  to,
  suffix = "",
  duration = 1.6,
  className,
}: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();

  const count = useMotionValue(0);
  const rounded = useTransform(count, (value) => Math.round(value));

  useEffect(() => {
    if (!isInView) return;

    // honour users who prefer reduced motion — jump straight to the value
    if (reduceMotion) {
      count.set(to);
      return;
    }

    const controls = animate(count, to, { duration, ease: "easeOut" });
    return controls.stop;
  }, [isInView, reduceMotion, to, duration, count]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};
