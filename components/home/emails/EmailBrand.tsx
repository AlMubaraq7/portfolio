import Image from "next/image";
import { Reveal } from "@/components/utils/Reveal";
import { useAnimation, useInView, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiOutlineExport } from "react-icons/ai";
import { EmailModal } from "./EmailModal";
import styles from "./emails.module.scss";

interface Campaign {
  title?: string;
  description?: string;
  imgSrc: string;
}

interface Props {
  brand: string;
  coverImg: string;
  description: string;
  link?: string;
  campaigns: Campaign[];
}

export const EmailBrand = ({
  brand,
  coverImg,
  description,
  link,
  campaigns,
}: Props) => {
  const [hovered, setHovered] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className={styles.emailImage}
        >
          <Image
            priority
            src={coverImg}
            alt={`Email design work for ${brand}.`}
            width={1000}
            height={0}
            style={{
              transform: hovered ? "scale(1.05)" : "scale(1)",
            }}
          />
        </div>
        <div className={styles.emailCopy}>
          <Reveal width="100%">
            <div className={styles.emailTitle}>
              <h4>{brand}</h4>
              <div className={styles.emailTitleLine} />

              {link && (
                <Link href={link} target="_blank" rel="nofollow">
                  <AiOutlineExport size="2.8rem" />
                </Link>
              )}
            </div>
          </Reveal>
          <Reveal>
            <p className={styles.emailDescription}>
              {description} <br />
              <span onClick={() => setIsOpen(true)}>View campaigns {">"}</span>
            </p>
          </Reveal>
        </div>
      </motion.div>
      <EmailModal
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        brand={brand}
        description={description}
        link={link}
        campaigns={campaigns}
      />
    </>
  );
};
