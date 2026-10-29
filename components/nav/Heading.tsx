import { useEffect, useState } from "react";
import styles from "./heading.module.scss";
import { ThemeToggle } from "@/components/utils/ThemeToggle";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";
import { motion } from "framer-motion";

const navItems = [
  { label: "Work", href: "#software", section: "work" },
  { label: "About", href: "#about", section: "about" },
  { label: "Contact", href: "#contact", section: "contact" },
];

export const Heading = () => {
  const [selected, setSelected] = useState("work");

  useEffect(() => {
    const sectionMap: Record<string, string> = {
      about: "about",
      software: "work",
      "email-design": "work",
      experience: "work",
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
        onClick={() => setSelected("work")}
      >
        <span>M</span>
        <span className={styles.brandDot}>.</span>
      </a>

      <nav className={styles.navPill} aria-label="Primary navigation">
        {navItems.map((item) => (
          <a
            key={item.section}
            href={item.href}
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
        <MyLinks />
        <OutlineButton onClick={() => window.open("/Resume.pdf")}>My resume</OutlineButton>
        <ThemeToggle />
      </div>
    </header>
  );
};
