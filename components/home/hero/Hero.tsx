import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { Counter } from "@/components/utils/Counter";
import styles from "./hero.module.scss";
import { MouseEvent } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

// Quick, honest snapshot — tweak these numbers as the work grows.
const stats = [
  { value: 1, suffix: "+", label: "Years Experience" },
  { value: 4, suffix: "+", label: "Web Projects" },
  { value: 6, suffix: "+", label: "Email Campaigns" },
];

export const Hero = () => {
  // Start off-screen so no glow shows until the cursor enters the hero.
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const spotlight = useMotionTemplate`radial-gradient(30rem 30rem at ${mouseX}px ${mouseY}px, rgba(153, 33, 33, 0.18), transparent 70%)`;
  const glowMask = useMotionTemplate`radial-gradient(16rem 16rem at ${mouseX}px ${mouseY}px, #000 10%, transparent 75%)`;

  return (
    <section
      className={`section-wrapper ${styles.hero}`}
      onMouseMove={handleMouseMove}
    >
      <div className={styles.gridBg} aria-hidden="true" />
      <motion.div
        className={styles.spotlight}
        style={{ background: spotlight }}
        aria-hidden="true"
      />
      <motion.div
        className={styles.gridGlow}
        style={{ WebkitMaskImage: glowMask, maskImage: glowMask }}
        aria-hidden="true"
      />
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            Hi, I&apos;m Mubaraq<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            I&apos;m a <span>Software Engineer</span> &amp; an{" "}
            <span>Email Designer</span>
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
