import { motion } from "framer-motion";
import styled from "styled-components";

export const ListInteractionsIcons = styled(motion.ul)`
  margin-left: 1.5em;
  display: flex;
  gap: 1.5em;

  svg {
    cursor: pointer;
    filter: invert(57%) sepia(21%) saturate(1491%) hue-rotate(93deg)
      brightness(94%) contrast(81%);
  }

  .badge {
    span {
      background-color: var(--color-primary);
      color: var(--white);
    }
  }
`;

export const UserMenuIcon = styled(motion.div)`
  width: 32px;
  height: 32px;
`;
