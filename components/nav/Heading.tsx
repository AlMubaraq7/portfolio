import { useEffect, useState } from "react";
import styles from "./heading.module.scss";
import { ThemeToggle } from "@/components/utils/ThemeToggle";
import { OutlineButton } from "../buttons/OutlineButton";
import { motion } from "framer-motion";

const navItems = [
  { label: "Software", href: "#software", section: "software" },
  { label: "Design", href: "#email-design", section: "design" },
  { label: "Experience", href: "#experience", section: "experience" },
  { label: "Contact", href: "#contact", section: "contact" },
];

export const Heading = () => {
  const [selected, setSelected] = useState("software");

  useEffect(() => {
    const sectionMap: Record<string, string> = {
      software: "software",
      "email-design": "design",
      experience: "experience",
      contact: "contact",
    };
    const sections = Object.keys(sectionMap)
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelected(sectionMap[entry.target.id]);
          }
        });
      },
      { threshold: 0.25 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={styles.heading}>
      <a
        className={styles.brand}
        href="#main"
        aria-label="Back to the top"
        onClick={() => setSelected("software")}
      >
        <span>M</span>
        <span className={styles.brandDot}>.</span>
      </a>

      <nav className={styles.navPill} aria-label="Primary navigation">
        {navItems.map((item) => (
          <a
            key={item.section}
            href={item.href}
            data-section={item.section}
            className={selected === item.section ? styles.selected : ""}
            aria-current={selected === item.section ? "page" : undefined}
            onClick={() => setSelected(item.section)}
          >
            {selected === item.section && (
              <motion.span
                className={styles.activeIndicator}
                layoutId="active-nav-indicator"
                transition={{ type: "spring", stiffness: 500, damping: 38 }}
              />
            )}
            <span className={styles.navLabel}>{item.label}</span>
          </a>
        ))}
      </nav>

      <div className={styles.headingActions}>
        <OutlineButton onClick={() => window.open("/Resume.pdf")}>
          My resume
        </OutlineButton>
        <ThemeToggle />
      </div>
    </header>
  );
};
