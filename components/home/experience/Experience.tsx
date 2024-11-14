import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
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
