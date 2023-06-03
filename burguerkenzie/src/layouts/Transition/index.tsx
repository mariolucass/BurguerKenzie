import { motion } from "framer-motion";
import { Children } from "../../interfaces";

const transitions = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
};

export const TransitionAnimation = ({ children }: Children) => (
  <motion.div
    variants={transitions}
    initial="initial"
    animate="animate"
    exit="exit"
    // animate={{ y: 0, opacity: 1 }}
    // initial={{ y: -20, opacity: 0 }}
    transition={{
      duration: 0.4,
      ease: [0.6, -0.05, 0.01, 0.99],
    }}
  >
    {children}
  </motion.div>
);
