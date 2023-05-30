import { motion } from "framer-motion";
import styled from "styled-components";

export const EmptyCartDiv = styled(motion.div)`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: var(--white);
`;
