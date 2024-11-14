import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Positivus",
    imgSrc: "/project-imgs/positivus.png",
    code: "https://github.com/AlMubaraq7/Positivus",
    projectLink: "https://positivus-olive.vercel.app",
    tech: [
      "Astro",
      "React",
      "Tailwind",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
    ],
    description:
      "Positivus is a digital agency dedicated to empowering businesses through data-driven strategies and customized marketing solutions.",
    modalContent: (
      <>
        <p>
          Positivus is a digital agency dedicated to empowering businesses
          through data-driven strategies and customized marketing solutions.
          This project focused on building a platform that showcases Positivus’s
          range of services, including SEO, PPC, social media marketing, and
          content creation.
        </p>
      </>
    ),
  },
  {
    title: "DenimDreams",
    imgSrc: "/project-imgs/denimdreams.png",
    code: "https://github.com/AlMubaraq7/DenimDreams",
    projectLink: "https://denim-dreams.vercel.app",
    tech: [
      "React",
      "TypeScript",
      "Styled Components",
      "Firebase",
      "NodeJS",
      "Express",
      "Redux",
      "Framer Motion",
      "Stripe",
    ],
    description:
      "DenimDreams is a modern online platform dedicated to denim lovers, showcasing a curated selection of denim styles and trends.",
    modalContent: (
      <>
        <p>
          DenimDreams is a modern online platform dedicated to denim lovers,
          showcasing a curated selection of denim styles and trends. Built as a
          practice project, this site features a clean, user-friendly interface
          where users can explore a range of denim products—from classic jeans
          to jackets and accessories.
        </p>
      </>
    ),
  },
  {
    title: "Flowrise",
    imgSrc: "/project-imgs/flowrise.png",
    code: "https://github.com/AlMubaraq7/flowrise",
    projectLink: "https://flowrise-pink.vercel.app/",
    tech: ["NextJS", "Prismic", "GSAP", "TypeScript"],
    description:
      "Flowrise is a dynamic fitness platform designed to make health and wellness accessible and engaging.",
    modalContent: (
      <>
        <p>
          Flowrise is a dynamic fitness platform designed to make health and
          wellness accessible and engaging. This project offers users
          personalized workout routines, wellness tips, and tracking tools to
          support their fitness goals.
        </p>
        <p>
          Built with a headless CMS (Prismic), Flowrise provides a seamless,
          interactive experience with a flexible content structure that allows
          for easy updates and content customization. The clean, vibrant design
          encourages users to focus on their fitness journey and promotes
          engagement with features like progress tracking and curated workout
          plans.
        </p>
      </>
    ),
  },
  {
    title: "Rock Paper Scissors",
    imgSrc: "/project-imgs/rock-paper-scissors.png",
    code: "https://github.com/AlMubaraq7/rock-paper-scissors-lizard-spock",
    projectLink: "https://rock-paper-scissors-lizard-spock-beta.vercel.app",
    tech: ["React", "Redux", "Styled Components", "TypeScript"],
    description:
      "This Rock Paper Scissors Lizard Spock project is a fun, interactive game that adds a creative twist to the traditional game of rock-paper-scissors.",
    modalContent: (
      <>
        <p>
          Inspired by the classic challenge, this version includes two
          additional choices, &ldquo;Lizard&rdquo; and &ldquo;Spock&rdquo;
          adding new strategies and outcomes. Developed with a sleek, responsive
          design, the game provides an intuitive and engaging user experience,
          keeping players entertained with visually appealing animations and
          smooth transitions. Perfect for testing your luck and skill, this
          project demonstrates a strong focus on interactivity and front-end
          animation
        </p>
      </>
    ),
  },
];
