import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { Counter } from "@/components/utils/Counter";
import styles from "./hero.module.scss";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Quick, honest snapshot — tweak these numbers as the work grows.
const stats = [
  { value: 1, suffix: "+", label: "Years Experience" },
  { value: 4, suffix: "+", label: "Web Projects" },
  { value: 6, suffix: "+", label: "Email Campaigns" },
];

const heroTitles = [
  "Hey, I'm Mubaraq",
  "Email Designer",
  "Frontend Engineer",
];

export const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setTitleIndex((current) => (current + 1) % heroTitles.length);
    }, 2400);

    return () => clearInterval(titleInterval);
  }, []);

  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal width="100%">
          <motion.div
            layout="size"
            className={`${styles.nameWrap} ${
              titleIndex === 1
                ? styles.emailTitle
                : titleIndex === 2
                  ? styles.frontendTitle
                  : ""
            }`}
            transition={{
              layout: { type: "spring", stiffness: 260, damping: 24 },
            }}
          >
            <h1 className={styles.title}>
              <AnimatePresence initial={false} mode="popLayout">
                <motion.span
                  layout
                  key={heroTitles[titleIndex]}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {heroTitles[titleIndex]}
                </motion.span>
              </AnimatePresence>
            </h1>
          </motion.div>
        </Reveal>
        <Reveal width="100%" overflow="visible" zIndex={30}>
          <h2 className={styles.statement} aria-label="I build websites and I design emails.">
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
            I build websites and design emails &mdash; two crafts that both come
            down to sweating the small stuff. On the engineering side I turn
            designs into fast, responsive interfaces; on the email side I build
            campaigns that render cleanly across every inbox and actually earn
            the click.
          </p>
        </Reveal>
        <Reveal>
          <ul className={styles.statsRow}>
            {stats.map((stat) => (
              <li key={stat.label} className={styles.stat}>
                <Counter
                  className={styles.statValue}
                  to={stat.value}
                  suffix={stat.suffix}
                />
                <span className={styles.statLabel}>{stat.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <StandardButton
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView()
            }
          >
            Contact me
          </StandardButton>
        </Reveal>
      </div>
    </section>
  );
};
