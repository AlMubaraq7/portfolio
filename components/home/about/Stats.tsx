import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

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
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">Tailwind CSS</span>
            <span className="chip">React</span>
            <span className="chip">NextJS</span>
            <span className="chip">Styled Component</span>
            <span className="chip">Redux</span>
            <span className="chip">NodeJS</span>
            <span className="chip">Express</span>
            <span className="chip">SQL</span>
            <span className="chip">MongoDB</span>
            <span className="chip">Firebase</span>
            <span className="chip">Astro</span>
            <span className="chip">Framer Motion</span>
            <span className="chip">GSAP</span>
            <span className="chip">GraphQL</span>
            <span className="chip">Stripe</span>
            <span className="chip">Git</span>
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
            <span className="chip">Java</span>
            <span className="chip">Spring Boot</span>
            <span className="chip">Figma</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
