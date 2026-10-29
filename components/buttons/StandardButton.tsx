import { MouseEventHandler } from "react";
import styles from "./standardbutton.module.scss";

interface Props {
  children: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  compact?: boolean;
}

export const StandardButton = ({ children, onClick, compact = false }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.standardButton} ${compact ? styles.compact : ""}`}
    >
      <span>{children}</span>
    </button>
  );
};
