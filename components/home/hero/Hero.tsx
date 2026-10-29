import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import styles from "./hero.module.scss";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Quick, honest snapshot — tweak these numbers as the work grows.
const heroTitles = ["Hey, I'm Mubaraq", "Email Designer", "Frontend Engineer"];

export const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [titleSize, setTitleSize] = useState<{
    width: number;
    height: number;
  } | null>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  const titleWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setTitleIndex((current) => (current + 1) % heroTitles.length);
    }, 2400);

    return () => clearInterval(titleInterval);
  }, []);

  useLayoutEffect(() => {
    const title = titleRef.current;
    const wrapper = titleWrapRef.current;
    if (!title || !wrapper) return;
    let active = true;

    const measure = () => {
      if (!active) return;
      const titleRect = title.getBoundingClientRect();
      const wrapperStyles = window.getComputedStyle(wrapper);
      const horizontalPadding =
        parseFloat(wrapperStyles.paddingLeft) +
        parseFloat(wrapperStyles.paddingRight);
      const verticalPadding =
        parseFloat(wrapperStyles.paddingTop) +
        parseFloat(wrapperStyles.paddingBottom);

      setTitleSize({
        width: Math.ceil(titleRect.width + horizontalPadding),
        height: Math.ceil(titleRect.height + verticalPadding),
      });
    };

    measure();
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure);

    return () => {
      active = false;
      window.removeEventListener("resize", measure);
    };
  }, [titleIndex]);

  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal width="100%">
          <motion.div
            ref={titleWrapRef}
            className={`${styles.nameWrap} ${
              titleIndex === 1
                ? styles.emailTitle
                : titleIndex === 2
                  ? styles.frontendTitle
                  : ""
            }`}
            animate={
              titleSize
                ? { width: titleSize.width, height: titleSize.height }
                : undefined
            }
            transition={{
              duration: 0.42,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h1 className={styles.title}>
              <AnimatePresence initial={false} mode="sync">
                <motion.span
                  className={styles.titleLayer}
                  key={heroTitles[titleIndex]}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    duration: 0.42,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span ref={titleRef} className={styles.titleText}>
                    {heroTitles[titleIndex]}
                  </span>
                </motion.span>
              </AnimatePresence>
            </h1>
          </motion.div>
        </Reveal>
        <Reveal width="100%" overflow="visible" zIndex={30}>
          <h2
            className={styles.statement}
            aria-label="I build websites and I design emails."
          >
            <span className={styles.phraseRow}>
              <motion.span
                className={`${styles.phrase} ${styles.build}`}
                drag
                dragSnapToOrigin
                dragElastic={0.35}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 1.03, cursor: "grabbing" }}
                whileDrag={{ scale: 1.03, zIndex: 100, cursor: "grabbing" }}
                transition={{ type: "spring", stiffness: 420, damping: 14 }}
                dragTransition={{ bounceStiffness: 180, bounceDamping: 18 }}
              >
                I build
              </motion.span>
              <motion.span
                className={`${styles.phrase} ${styles.websites}`}
                drag
                dragSnapToOrigin
                dragElastic={0.35}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 1.03, cursor: "grabbing" }}
                whileDrag={{ scale: 1.03, zIndex: 100, cursor: "grabbing" }}
                transition={{ type: "spring", stiffness: 420, damping: 14 }}
                dragTransition={{ bounceStiffness: 180, bounceDamping: 18 }}
              >
                websites
              </motion.span>
            </span>
            <span className={styles.phraseRow}>
              <motion.span
                className={`${styles.phrase} ${styles.andI}`}
                drag
                dragSnapToOrigin
                dragElastic={0.35}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 1.03, cursor: "grabbing" }}
                whileDrag={{ scale: 1.03, zIndex: 100, cursor: "grabbing" }}
                transition={{ type: "spring", stiffness: 420, damping: 14 }}
                dragTransition={{ bounceStiffness: 180, bounceDamping: 18 }}
              >
                and I
              </motion.span>
              <motion.span
                className={`${styles.phrase} ${styles.emails}`}
                drag
                dragSnapToOrigin
                dragElastic={0.35}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 1.03, cursor: "grabbing" }}
                whileDrag={{ scale: 1.03, zIndex: 100, cursor: "grabbing" }}
                transition={{ type: "spring", stiffness: 420, damping: 14 }}
                dragTransition={{ bounceStiffness: 180, bounceDamping: 18 }}
              >
                design emails.
              </motion.span>
            </span>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            Two crafts that both come down to sweating the small stuff. On the
            engineering side I turn designs into fast, responsive interfaces; on
            the email side I build campaigns that render cleanly across every
            inbox and actually earn the click.
          </p>
        </Reveal>
        <Reveal>
          <StandardButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Contact me
          </StandardButton>
        </Reveal>
      </div>
    </section>
  );
};
