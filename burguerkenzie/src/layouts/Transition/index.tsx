import { motion } from "framer-motion";
import { Children } from "../../interfaces";

export const TransitionAnimation = ({ children }: Children) => (
  <motion.div
    animate={{ y: 0, opacity: 1 }}
    initial={{ y: -20, opacity: 0 }}
    transition={{
      duration: 1.2,
      ease: [0.6, -0.05, 0.01, 0.99],
    }}
  >
    {children}
  </motion.div>
);
