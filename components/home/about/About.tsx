import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { CollapsibleSection } from "@/components/utils/CollapsibleSection";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <CollapsibleSection id="about" title="About" dir="l">
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              I&apos;m Mubaraq Momoh &mdash; a software engineer and email
              designer <strong>based in Lagos, Nigeria</strong>, with a B.Sc. in
              Computer Engineering. I like building things that feel effortless
              to use, and I tend to get a little obsessed with the details most
              people never notice.
              <br />
              <br />
              For the past year I&apos;ve split my time between two things I
              genuinely enjoy: writing front-end code and designing email
              campaigns. The web side is about performance and interfaces that
              stay out of your way; email is a stranger puzzle &mdash; making
              one design hold up across dozens of clients that each break the
              rules their own way &mdash; and I&apos;ve come to really enjoy
              that.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m currently open to new work and always up for a problem
              worth chewing on. If you&apos;ve got something in mind &mdash; or
              just want to talk shop &mdash; my inbox is open. 🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </CollapsibleSection>
  );
};
