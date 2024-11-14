import styles from "./headinglinks.module.scss";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillHome,
} from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";

export const MyLinks = () => {
  return (
    <div className={styles.links}>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
      >
        <Link
          href="https://www.linkedin.com/in/al-mubaraq-momoh-b14040265"
          target="_blank"
          rel="nofollow"
        >
          <AiFillLinkedin size="2.4rem" />
        </Link>
      </motion.span>

      {/* <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link
          href="https://www.github.com/AlMubaraq7"
          target="_blank"
          rel="nofollow"
        >
          <AiFillTwitterCircle size="2.4rem" />
        </Link>
      </motion.span> */}

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link
          href="https://www.github.com/AlMubaraq7"
          target="_blank"
          rel="nofollow"
        >
          <AiFillGithub size="2.4rem" />
        </Link>
      </motion.span>
      {/* <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link
          href="https://www.instagram.com/aluckyfin/"
          target="_blank"
          rel="nofollow"
        >
          <AiFillHome size="2.4rem" />
        </Link>
      </motion.span> */}
    </div>
  );
};
