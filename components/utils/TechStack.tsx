import { IconType } from "react-icons";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiAstro,
  SiFramer,
  SiStyledcomponents,
  SiFirebase,
  SiNodedotjs,
  SiExpress,
  SiRedux,
  SiStripe,
  SiNextdotjs,
  SiPrismic,
  SiGreensock,
  SiHtml5,
  SiCss3,
  SiWordpress,
  SiElementor,
  SiJavascript,
  SiMongodb,
  SiGraphql,
  SiGit,
  SiSpringboot,
  SiFigma,
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";
import styles from "./techstack.module.scss";

interface TechEntry {
  icon: IconType;
  label: string;
}

// Maps a tech name (lower-cased) to its logo + a friendly label shown on hover.
const TECH: Record<string, TechEntry> = {
  react: { icon: SiReact, label: "React" },
  javascript: { icon: SiJavascript, label: "JavaScript" },
  typescript: { icon: SiTypescript, label: "TypeScript" },
  tailwind: { icon: SiTailwindcss, label: "Tailwind CSS" },
  "tailwind css": { icon: SiTailwindcss, label: "Tailwind CSS" },
  astro: { icon: SiAstro, label: "Astro" },
  "framer motion": { icon: SiFramer, label: "Framer Motion" },
  "styled components": { icon: SiStyledcomponents, label: "Styled Components" },
  "styled component": { icon: SiStyledcomponents, label: "Styled Components" },
  firebase: { icon: SiFirebase, label: "Firebase" },
  nodejs: { icon: SiNodedotjs, label: "Node.js" },
  express: { icon: SiExpress, label: "Express" },
  redux: { icon: SiRedux, label: "Redux" },
  stripe: { icon: SiStripe, label: "Stripe" },
  nextjs: { icon: SiNextdotjs, label: "Next.js" },
  prismic: { icon: SiPrismic, label: "Prismic" },
  gsap: { icon: SiGreensock, label: "GSAP" },
  html: { icon: SiHtml5, label: "HTML" },
  css: { icon: SiCss3, label: "CSS" },
  wordpress: { icon: SiWordpress, label: "WordPress" },
  elementor: { icon: SiElementor, label: "Elementor" },
  sql: { icon: FaDatabase, label: "SQL" },
  mongodb: { icon: SiMongodb, label: "MongoDB" },
  graphql: { icon: SiGraphql, label: "GraphQL" },
  git: { icon: SiGit, label: "Git" },
  java: { icon: FaJava, label: "Java" },
  "spring boot": { icon: SiSpringboot, label: "Spring Boot" },
  figma: { icon: SiFigma, label: "Figma" },
};

interface Props {
  tech: string[];
}

export const TechStack = ({ tech }: Props) => {
  // Some projects list a tech more than once — dedupe while keeping order.
  const seen = new Set<string>();
  const items: { key: string; raw: string }[] = [];
  for (const raw of tech) {
    const key = raw.toLowerCase().trim();
    if (seen.has(key)) continue;
    seen.add(key);
    items.push({ key, raw });
  }

  return (
    <ul className={styles.techStack} aria-label="Tech stack">
      {items.map(({ key, raw }) => {
        const entry = TECH[key];
        const label = entry?.label ?? raw;
        const Icon = entry?.icon;

        return (
          <li key={key} className={styles.tech}>
            {Icon ? (
              <>
                <Icon aria-hidden="true" />
                <span className={styles.tooltip}>{label}</span>
              </>
            ) : (
              // Unknown tech (no logo mapped): keep the name visible as text.
              <span className={styles.fallback}>{label}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
};
