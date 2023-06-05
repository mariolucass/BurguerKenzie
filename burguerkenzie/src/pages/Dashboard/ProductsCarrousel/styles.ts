import { motion } from "framer-motion";
import styled from "styled-components";

export const ListCarrousel = styled(motion.ul)`
  display: flex;
  gap: 1em;

  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;
