import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";
import { TechStack } from "@/components/utils/TechStack";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Confident With</span>
          </h4>
          <div className={styles.statGrid}>
            <TechStack
              tech={[
                "JavaScript",
                "TypeScript",
                "HTML",
                "CSS",
                "Tailwind CSS",
                "React",
                "NextJS",
                "Styled Component",
                "Redux",
                "NodeJS",
                "Express",
                "SQL",
                "MongoDB",
                "Firebase",
                "Astro",
                "Framer Motion",
                "GSAP",
                "GraphQL",
                "Stripe",
                "Git",
              ]}
            />
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Actively Learning</span>
          </h4>
          <div className={styles.statGrid}>
            <TechStack tech={["Java", "Spring Boot", "Figma"]} />
          </div>
        </div>
      </Reveal>
    </div>
  );
};
