import { useEffect, useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
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
      className={styles.themeToggle}
      onClick={toggle}
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      title={theme === "dark" ? "Light mode" : "Dark mode"}
    >
      {theme === "dark" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
    </button>
  );
};
