import { MdKeyboardArrowDown } from "react-icons/md";
import styles from "./header.module.scss";
import { Reveal } from "./Reveal";

interface Props {
  title: string;
  dir?: "l" | "r";
  collapsible?: boolean;
  open?: boolean;
  onToggle?: () => void;
}

export const SectionHeader = ({
  title,
  dir = "r",
  collapsible = false,
  open = true,
  onToggle,
}: Props) => {
  const style = {
    flexDirection: dir === "r" ? "row" : "row-reverse",
  } as const;

  const inner = (
    <>
      <div className={styles.line} />
      <h3>
        <Reveal>
          <span className={styles.title}>
            {title}
            <span>.</span>
          </span>
        </Reveal>
      </h3>
      {collapsible && (
        <span
          className={`${styles.icon} ${open ? styles.iconOpen : ""}`}
          aria-hidden="true"
        >
          <MdKeyboardArrowDown />
        </span>
      )}
    </>
  );

  if (collapsible) {
    return (
      <button
        type="button"
        className={`${styles.sectionHeader} ${styles.clickable}`}
        style={style}
        onClick={onToggle}
        aria-expanded={open}
      >
        {inner}
      </button>
    );
  }

  return (
    <div className={styles.sectionHeader} style={style}>
      {inner}
    </div>
  );
};
