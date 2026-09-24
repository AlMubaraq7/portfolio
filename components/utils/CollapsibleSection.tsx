import { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

interface Props {
  id: string;
  title: string;
  dir?: "l" | "r";
  defaultOpen?: boolean;
  children: ReactNode;
}

export const CollapsibleSection = ({
  id,
  title,
  dir = "r",
  defaultOpen = true,
  children,
}: Props) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="section-wrapper" id={id}>
      <SectionHeader
        title={title}
        dir={dir}
        collapsible
        open={open}
        onToggle={() => setOpen((prev) => !prev)}
      />
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
