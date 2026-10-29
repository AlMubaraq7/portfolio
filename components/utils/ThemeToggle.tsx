import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import styles from "./themetoggle.module.scss";

type Theme = "dark" | "light";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  // The inline script in _document sets data-theme before paint; read it back
  // on mount so the icon matches the active theme (avoids hydration mismatch).
  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "light") setTheme("light");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      window.localStorage.setItem("theme", next);
    } catch (e) {}
    setTheme(next);
  };

  return (
    <button
      type="button"
      className={styles.themeToggle}
      data-theme-state={theme}
      onClick={toggle}
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      title={theme === "dark" ? "Light mode" : "Dark mode"}
    >
      <span
        className={`${styles.modeOption} ${
          theme === "dark" ? styles.active : ""
        }`}
        aria-hidden="true"
      >
        {theme === "dark" && (
          <motion.span
            className={styles.activePanel}
            layoutId="theme-active-panel"
            transition={{ type: "spring", stiffness: 500, damping: 38 }}
          />
        )}
        <motion.span
          className={styles.icon}
          animate={{
            opacity: theme === "dark" ? 1 : 0.58,
            rotate: theme === "dark" ? 0 : -12,
          }}
          transition={{ type: "spring", stiffness: 420, damping: 26 }}
        >
          <FiMoon size={28} />
        </motion.span>
        <AnimatePresence initial={false}>
          {theme === "dark" && (
            <motion.svg
              className={styles.sparkles}
              viewBox="0 0 16 16"
              fill="none"
              initial={{ opacity: 0, scale: 0.4, rotate: -25 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.4, rotate: 25 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <path
                d="M5 1.5c.25 1.85 1.15 2.75 3 3-1.85.25-2.75 1.15-3 3-.25-1.85-1.15-2.75-3-3 1.85-.25 2.75-1.15 3-3Z"
                fill="currentColor"
              />
              <path
                d="M11.5 8c.18 1.3.82 1.92 2.1 2.1-1.28.18-1.92.82-2.1 2.1-.18-1.28-.82-1.92-2.1-2.1 1.28-.18 1.92-.8 2.1-2.1Z"
                fill="currentColor"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </span>

      <span
        className={`${styles.modeOption} ${
          theme === "light" ? styles.active : ""
        }`}
        aria-hidden="true"
      >
        {theme === "light" && (
          <motion.span
            className={styles.activePanel}
            layoutId="theme-active-panel"
            transition={{ type: "spring", stiffness: 500, damping: 38 }}
          />
        )}
        <motion.span
          className={styles.icon}
          animate={{
            opacity: theme === "light" ? 1 : 0.58,
            rotate: theme === "light" ? 0 : 12,
          }}
          transition={{ type: "spring", stiffness: 420, damping: 26 }}
        >
          <FiSun size={28} />
        </motion.span>
      </span>
    </button>
  );
};
