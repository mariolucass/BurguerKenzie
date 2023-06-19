import { motion } from "framer-motion";
import styled from "styled-components";

export const CartList = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--white);
  align-items: center;
`;
