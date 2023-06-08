import { motion } from "framer-motion";
import { Children } from "../../interfaces";

const variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
};
const transition = {
  duration: 0.4,
  ease: [0.6, -0.05, 0.01, 0.99],
};

export const TransitionAnimation = ({ children }: Children) => (
  <motion.div
    transition={transition}
    variants={variants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    {children}
  </motion.div>
);
