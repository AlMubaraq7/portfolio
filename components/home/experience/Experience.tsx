import { CollapsibleSection } from "@/components/utils/CollapsibleSection";
import { ExperienceItem } from "./ExperienceItem";
import styles from "./experience.module.scss";

export const Experience = () => {
  return (
    <CollapsibleSection id="experience" title="Experience" dir="l">
      <div className={styles.timeline}>
        {experience.map((item) => (
          <ExperienceItem key={item.title} {...item} />
        ))}
      </div>
    </CollapsibleSection>
  );
};

const experience = [
  {
    title: "Agtarise Solutions",
    position: "Web Developer",
    time: "September 2024 - November 2024",
    location: "Ikeja, Lagos State",
    description:
      "Collaborated with the team in creation of fully functional websites such as an LMS platform and an e-commerce site",
    tech: ["HTML", "CSS", "WordPress", "Elementor"],
  },
];
