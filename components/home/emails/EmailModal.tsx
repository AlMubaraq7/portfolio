import styles from "./emailmodal.module.scss";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiOutlineExport, AiFillStar } from "react-icons/ai";
import { MdClose, MdOpenInFull } from "react-icons/md";

interface Campaign {
  title?: string;
  description?: string;
  imgSrc: string;
}

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
  brand: string;
  description: string;
  link?: string;
  campaigns: Campaign[];
}

export const EmailModal = ({
  setIsOpen,
  isOpen,
  brand,
  description,
  link,
  campaigns,
}: Props) => {
  const count = campaigns.length;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflowY;
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, setIsOpen]);

  const content = (
    <div className={styles.modal} onClick={() => setIsOpen(false)}>
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className={styles.modalCard}
      >
        <div className={styles.modalHeader}>
          <div className={styles.headingBlock}>
            <h4 className={styles.brand}>
              {brand}
              <span>.</span>
            </h4>
            <div className={styles.flourish}>
              <span className={styles.stars} aria-hidden="true">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </span>
              {count > 0 && (
                <span className={styles.stat}>
                  {count} campaign{count > 1 ? "s" : ""}
                </span>
              )}
            </div>
          </div>

          <div className={styles.headerActions}>
            <button
              className={styles.iconBtn}
              onClick={() => setIsOpen(false)}
              aria-label="Close"
              title="Close"
            >
              <MdClose />
            </button>
          </div>
        </div>

        <p className={styles.modalDescription}>{description}</p>

        {link && (
          <div className={styles.modalFooter}>
            <Link
              className={styles.viewLink}
              target="_blank"
              rel="nofollow"
              href={link}
            >
              <AiOutlineExport /> View live
            </Link>
          </div>
        )}

        {count > 0 && (
          <>
            <div className={styles.showcaseHead}>
              <p className={styles.campaignsHeading}>
                Campaigns<span>.</span>
              </p>
            </div>

            <motion.div
              className={styles.showcase}
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.06 } },
              }}
            >
              {campaigns.map((c, i) => (
                <motion.div
                  key={`${c.imgSrc}-${i}`}
                  className={styles.screen}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div className={styles.screenMedia}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.imgSrc}
                      alt={c.title ?? `${brand} campaign email ${i + 1}`}
                      className={styles.screenImage}
                      draggable={false}
                      loading="lazy"
                    />
                    <a
                      className={styles.fullSizeBtn}
                      href={c.imgSrc}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label="Open full size"
                      title="Open full size"
                    >
                      <MdOpenInFull />
                    </a>
                  </div>
                  {(c.title || c.description) && (
                    <div className={styles.screenCaption}>
                      {c.title && <h5>{c.title}</h5>}
                      {c.description && <p>{c.description}</p>}
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </motion.div>
    </div>
  );

  if (!isOpen || typeof document === "undefined") return null;

  return createPortal(content, document.body);
};
