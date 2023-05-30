import { motion } from "framer-motion";
import styled from "styled-components";

export const ListInteractionsIcons = styled.ul`
  display: flex;
  gap: 1.5em;

  svg {
    cursor: pointer;
  }
`;

export const UserMenuIcon = styled(motion.div)`
  width: 32px;
  height: 32px;
`;
