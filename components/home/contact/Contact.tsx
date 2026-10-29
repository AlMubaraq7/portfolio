import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/utils/Reveal";
import { StandardButton } from "@/components/buttons/StandardButton";
import styles from "./contact.module.scss";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";

export const Contact = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <button
          type="button"
          className={styles.contactToggle}
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
        >
          <Reveal width="100%">
            <h4 className={styles.contactTitle}>
              Contact<span>.</span>
            </h4>
          </Reveal>
          <span
            className={`${styles.contactIcon} ${
              open ? styles.contactIconOpen : ""
            }`}
            aria-hidden="true"
          >
            <MdKeyboardArrowDown />
          </span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="contact-body"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              style={{ overflow: "hidden" }}
            >
              <Reveal width="100%">
                <p className={styles.contactCopy}>
                  Have an idea to discuss? Shoot me an email if you want to
                  connect! You can also find me on{" "}
                  <Link
                    href="https://www.linkedin.com/in/al-mubaraq-momoh-b14040265"
                    target="_blank"
                    rel="nofollow"
                  >
                    Linkedin
                  </Link>{" "}
                  if that&apos;s more your speed.
                </p>
              </Reveal>
              <Reveal width="100%">
                <div className={styles.emailButton}>
                  <StandardButton
                    onClick={() => {
                      window.location.href = "mailto:momohmubaraq@gmail.com";
                    }}
                  >
                    Send me an email
                  </StandardButton>
                </div>
              </Reveal>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
