import { motion } from "framer-motion";
import styled from "styled-components";

export const CartPageProductLi = styled(motion.li)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50%;
  margin: 0 auto;
  min-height: 125px;
`;

export const TextCartPageProduct = styled(motion.div)`
  width: 80%;
  height: 100%;
  padding: 8px 0 0 8px;
  height: 100px;
  display: flex;
  gap: 0.5em;
  flex-direction: row;
  align-items: flex-start;

  h3 {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  @media (max-width: 769px) {
    width: 30%;
    flex-direction: column;
  }
`;

export const ImageCartPageProduct = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background-color: var(--gray-20);
  padding: 0.9rem;
  border-radius: 0.3rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const InteractionsCartPageProduct = styled(motion.div)`
  height: 100px;
  display: flex;
  gap: 1em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  svg {
    cursor: pointer;
  }
`;

export const DescriptionCartPageProduct = styled(motion.div)`
  display: flex;
  gap: 1em;
  min-width: 65%;
`;
