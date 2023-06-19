import { motion } from "framer-motion";
import styled from "styled-components";

export const CartProductLi = styled(motion.li)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50%;
  margin: 0 auto;
`;

export const TextCartProduct = styled(motion.div)`
  width: 75%;
  height: 100%;
  padding: 8px 0 0 8px;
  height: 100px;
  display: flex;
  gap: 0.5em;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  span {
    color: var(--gray-50);
    font-size: 12px;
  }
`;

export const ImageCartProduct = styled(motion.div)`
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

export const InteractionsCartProduct = styled(motion.div)`
  height: 100px;
  display: flex;
  gap: 1em;

  justify-content: center;
  align-items: center;

  svg {
    cursor: pointer;
  }
`;

export const ContentDiv = styled(motion.div)`
  display: flex;
  height: 60%;
  width: 100%;
  display: flex;
  justify-content: space-between;

  div {
    height: 100%;
  }
`;
