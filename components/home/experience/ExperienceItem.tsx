import { Reveal } from "@/components/utils/Reveal";
import { TechStack } from "@/components/utils/TechStack";
import styles from "./experience.module.scss";

interface Props {
  title: string;
  position: string;
  time: string;
  location: string;
  description: string;
  tech: string[];
}

export const ExperienceItem = ({
  title,
  position,
  time,
  location,
  description,
  tech,
}: Props) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemHeader}>
        <Reveal>
          <span className={styles.position}>{position}</span>
        </Reveal>
        <Reveal>
          <span className={styles.time}>{time}</span>
        </Reveal>
      </div>

      <div className={styles.itemSubHeader}>
        <Reveal>
          <span className={styles.company}>{title}</span>
        </Reveal>
        <Reveal>
          <span className={styles.location}>{location}</span>
        </Reveal>
      </div>

      <Reveal>
        <p className={styles.description}>{description}</p>
      </Reveal>
      <Reveal>
        <div className={styles.tech}>
          <TechStack tech={tech} />
        </div>
      </Reveal>
    </div>
  );
};
