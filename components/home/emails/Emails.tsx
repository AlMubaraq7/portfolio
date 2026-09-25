import { CollapsibleSection } from "@/components/utils/CollapsibleSection";
import { EmailBrand } from "./EmailBrand";
import styles from "./emails.module.scss";

export const Emails = () => {
  return (
    <CollapsibleSection id="email-design" title="Email Design" dir="l">
      <div className={styles.emails}>
        {emailBrands.map((emailBrand) => {
          return <EmailBrand key={emailBrand.brand} {...emailBrand} />;
        })}
      </div>
    </CollapsibleSection>
  );
};

// PLACEHOLDER DATA — replace with real work.
// Drop the design images into /public/email-imgs and update the paths + copy below.
// Each entry is a brand/client; `campaigns` are the individual campaign emails
// shown in the swipeable gallery modal. Each campaign has its own image, and an
// optional `title` + `description`. A brand can hold up to ~15 campaigns.
// Set `link` to "" to hide the View link.
const emailBrands = [
  {
    brand: "Sephora",
    coverImg: "/email-imgs/sephora-cover.png",
    description:
      "A set of campaign emails for Sephora — product launches and seasonal promotions designed for high engagement.",
    link: "",
    campaigns: [
      {
        title: "Skincare",
        description:
          "A routine-focused launch email pairing hero products with a clear, single call to action.",
        imgSrc: "/email-imgs/sephora-skincare.png",
      },
      {
        title: "Makeup",
        description:
          "A bold, high-contrast promo email built to drive urgency during the seasonal sale.",
        imgSrc: "/email-imgs/sephora-makeup.png",
      },
      {
        title: "Fragrance",
        description:
          "An editorial-style reveal introducing the latest fragrance brands and products.",
        imgSrc: "/email-imgs/sephora-fragrance.png",
      },
      {
        title: "Insider",
        description:
          "A loyalty-focused campaign rewarding returning shoppers with Beauty Insider perks and points.",
        imgSrc: "/email-imgs/sephora-insider.png",
      },
      {
        title: "Hair",
        description:
          "A discovery-led edit spotlighting rising haircare brands, paired with a find-your-texture guide.",
        imgSrc: "/email-imgs/sephora-hair.png",
      },
      {
        title: "New In",
        description:
          "A clean, discovery-first roundup introducing the latest arrivals across the site.",
        imgSrc: "/email-imgs/sephora-new-in.png",
      },
    ],
  },
  {
    brand: "Nike",
    coverImg: "/email-imgs/nike-cover.png",
    description:
      "Newsletter and promotional emails for Nike focused on clean layouts and strong calls to action.",
    link: "",
    campaigns: [
      {
        title: "Move Different",
        description:
          "A high-impact product launch campaign introducing Nike’s next generation of performance footwear, combining bold editorial imagery, product storytelling, and movement-focused categories to drive discovery and shopping.",
        imgSrc: "/email-imgs/nike-move-different.png",
      },
      {
        title: "Dri-FIT ADV Performance",
        description:
          "A high-impact, direct-to-consumer (DTC) email campaign designed for Nike Running to promote the high-performance Dri-FIT ADV product line. Mirroring Nike's signature athletic aesthetic.",
        imgSrc: "/email-imgs/nike-dri-fit.png",
      },
    ],
  },
];
