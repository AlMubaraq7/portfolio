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
      {
        title: "Ready for What’s Next",
        description:
          "A seasonal Nike Studio Fleece campaign focused on everyday movement, comfort, and versatility. The campaign positions Studio Fleece as a layer that transitions seamlessly from training to everyday life, using energetic athlete photography, bold typography, and a minimal editorial layout.",
        imgSrc: "/email-imgs/nike-ready-for-whats-next.png",
      },
      {
        title: "Ready for the Next Mile",
        description:
          "A performance-driven Nike Pegasus Plus 2 product-launch email built around speed, responsiveness, and lightweight movement.",
        imgSrc: "/email-imgs/nike-ready-for-the-next-mile.png",
      },
      {
        title: "The Drop",
        description:
          "A Nike product-launch email built around the Air Jordan 1 Low OG “Garden” release. The campaign creates anticipation with a close-up teaser, reveals the full sneaker, then uses its heritage story and distinctive details to build desire.",
        imgSrc: "/email-imgs/nike-the-drop.png",
      },
      {
        title: "Find Your Way Out",
        description:
          "A Nike ACG outdoor campaign built around exploration, movement, and getting outside. Instead of pushing one product, the email sells the experience of adventure.",
        imgSrc: "/email-imgs/nike-find-your-way-out.png",
      },
      {
        title: "Make It Yours",
        description:
          "A Nike By You campaign that turns customization into the main experience. Instead of simply presenting a finished sneaker, the email invites the customer to imagine their own version: Choose the base, colors, details, and make something personal.",
        imgSrc: "/email-imgs/nike-make-it-yours.png",
      },
      {
        title: "Welcome to Nike",
        description:
          "A Nike membership welcome email that introduces the customer to the Nike ecosystem beyond shopping—personalized experiences, member benefits, products, and Nike's digital services.",
        imgSrc: "/email-imgs/nike-welcome-to-nike.png",
      },
    ],
  },
  {
    brand: "Apple",
    coverImg: "/email-imgs/apple-cover.png",
    description:
      "Product launches and feature-focused emails for Apple built around minimal layouts, premium product imagery, and clear, focused calls to action.",
    link: "",
    campaigns: [
      {
        title: "Pro, Redefined",
        description:
          "An iPhone 18 Pro product-launch email showcasing its new design, four finishes, pro-level camera system, performance, and Apple Intelligence. The campaign uses Apple’s minimalist visual language, large product imagery, generous whitespace, and concise feature-led sections to create a premium launch experience.",
        imgSrc: "/email-imgs/apple-pro-redefined.png",
      },
      {
        title: "More Personal. More Powerful.",
        description:
          "An Apple Intelligence email introducing a more capable Siri through everyday use cases, highlighting personal context, onscreen awareness, and systemwide actions. The campaign uses soft gradients, minimal layouts, and concise feature-led sections to communicate a more natural and helpful AI experience.",
        imgSrc: "/email-imgs/apple-apple-intelligence.png",
      },
      {
        title: "Hear More. Carry Less.",
        description:
          "An AirPods product-launch email focused on effortless listening, lightweight design, and seamless integration across Apple devices. The campaign uses clean product imagery, generous whitespace, and concise benefit-led sections to create a simple, premium launch experience.",
        imgSrc: "/email-imgs/apple-airpods.png",
      },
      {
        title: "All Works Together",
        description:
          "An Apple ecosystem email showcasing how iPhone, Mac, Apple Watch, and AirPods work together seamlessly throughout the day. The campaign uses a day-in-the-life narrative, connected product imagery, and concise benefit-led sections to highlight continuity, convenience, and a unified Apple experience.",
        imgSrc: "/email-imgs/apple-all-works-together.png",
      },
      {
        title: "Small. Serious Power",
        description:
          "A Mac-focused product discovery email showcasing the power and versatility of Mac mini and Mac Studio. The campaign uses bold product imagery, concise performance-focused messaging, and a clean comparison-style layout to help readers find the right Mac for their workflow.",
        imgSrc: "/email-imgs/apple-small-serious-power.png",
      },
    ],
  },
  {
    brand: "Airbnb",
    coverImg: "/email-imgs/airbnb-cover.png",
    description:
      "Travel inspiration and experience-focused emails built around immersive destination photography, welcoming copy, and simple calls to action that inspire people to discover new places.",
    link: "",
    campaigns: [
      {
        title: "Your Next Escape",
        description:
          "A travel inspiration email encouraging readers to discover their next getaway. The campaign combines immersive destination photography, warm messaging, and curated travel experiences to evoke a sense of adventure and inspire readers to explore their next stay.",
        imgSrc: "/email-imgs/airbnb-your-next-escape.png",
      },
      {
        title: "The Weekend Is Calling",
        description:
          "A weekend getaway promotional email encouraging readers to take a break from their routine and explore somewhere new. The campaign combines warm destination photography, relatable storytelling, and benefit-focused messaging to make a short escape feel effortless and worth looking forward to.",
        imgSrc: "/email-imgs/airbnb-the-weekend-is-calling.png",
      },
      {
        title: "Stay Somewhere Different",
        description:
          "An accommodation discovery email showcasing unique holiday homes, distinctive architecture, and memorable places to stay. The campaign combines immersive property photography, welcoming copy, and benefit-focused messaging to inspire readers to explore stays that make their trips more memorable.",
        imgSrc: "/email-imgs/airbnb-stay-somewhere-different.png",
      },
      {
        title: "More Than a Stay",
        description:
          "An experiences-focused email campaign encouraging travelers to discover local food, creative workshops, and cultural activities beyond their accommodation. The design combines authentic lifestyle photography, editorial layouts, and warm messaging to showcase how meaningful experiences can make a trip more memorable.",
        imgSrc: "/email-imgs/airbnb-more-than-a-stay.png",
      },
      {
        title: "Places You'll Never Forget",
        description:
          "A destination discovery email inspiring travelers to explore memorable places around the world. The campaign combines immersive destination photography, editorial storytelling, and curated travel inspiration to showcase coastal escapes, vibrant cities, and breathtaking landscapes that make every journey unique.",
        imgSrc: "/email-imgs/airbnb-places-youll-never-forget.png",
      },
    ],
  },
  {
    brand: "IKEA",
    coverImg: "/email-imgs/ikea-cover.png",
    description:
      "Home inspiration and lifestyle emails focused on functional furniture, affordable home essentials, and Scandinavian interior design. Each campaign combines warm lifestyle photography, practical styling ideas, and clear calls to action to inspire people to create a more comfortable and personalized home.",
    link: "",
    campaigns: [
      {
        title: "Make Room for Better",
        description:
          "A home inspiration email showcasing simple ways to make everyday living spaces more comfortable, functional, and personal. The campaign combines Scandinavian interior photography, practical home styling ideas, and concise benefit-driven copy to encourage readers to refresh their spaces with thoughtful design.",
        imgSrc: "/email-imgs/ikea-make-room-for-better.png",
      },
      {
        title: "Find Your Home Style",
        description:
          "An editorial home-inspiration email that introduces readers to different interior design styles, from Scandinavian simplicity to boho eclecticism. The campaign combines immersive interior photography, concise styling advice, and a clean, vertically stacked layout to encourage readers to discover ideas and create a home that reflects their personality.",
        imgSrc: "/email-imgs/ikea-find-your-home-style.png",
      },
      {
        title: "Meet the New Collection",
        description:
          "A product-launch email concept inspired by IKEA PS 2026, showcasing playful functionality through expressive product photography, concise design storytelling, and a clear visual hierarchy. The layout introduces standout pieces before guiding readers toward exploring the collection.",
        imgSrc: "/email-imgs/ikea-meet-the-new-collection.png",
      },
      {
        title: "More for IKEA Family Members",
        description:
          "A promotional loyalty email concept highlighting IKEA Family membership benefits, including special product prices, exclusive offers, and home inspiration.",
        imgSrc: "/email-imgs/ikea-more-for-ikea-family-members.png",
      },
      {
        title: "Welcome to IKEA Family",
        description:
          "A welcome email concept introducing new IKEA Family members to their membership benefits. The design combines warm home photography, concise benefit cards, and a simple getting-started journey to create a friendly onboarding experience that encourages members to explore offers, discover inspiration, and make the most of their membership.",
        imgSrc: "/email-imgs/ikea-welcome-to-ikea-family.png",
      },
    ],
  },
  {
    brand: "Adidas",
    coverImg: "/email-imgs/adidas-cover.png",
    description:
      "Sportswear and lifestyle emails focused on footwear, apparel, product launches, and exclusive offers. Each campaign combines bold product imagery, energetic visuals, and clear calls to action to showcase new arrivals, promote collections, and connect customers with the latest adidas styles.",
    link: "",
    campaigns: [
      {
        title: "New Arrivals",
        description:
          "An Adidas new-arrivals email concept designed to showcase fresh footwear and apparel through bold product imagery, concise editorial copy, and clear shopping paths.",
        imgSrc: "/email-imgs/adidas-new-arrivals.png",
      },
      {
        title: "Meet the Adistar Jellyfish",
        description:
          "A product-launch email concept inspired by Adidas's Adistar Jellyfish sneaker. The design uses bold product photography, oversized typography, and concise product storytelling to introduce a distinctive footwear silhouette and guide readers toward exploring the product.",
        imgSrc: "/email-imgs/adidas-meet-the-adistar-jellyfish.png",
      },
      {
        title: "The Seasonal Sale",
        description:
          "A promotional email concept inspired by Adidas's official sale collection, showcasing discounted footwear and apparel through bold typography, product-focused imagery, and clear shopping paths. The design emphasizes promotional hierarchy and curated product sections to encourage browsing without overwhelming the reader.",
        imgSrc: "/email-imgs/adidas-seasonal-sale.png",
      },
    ],
  },
];
