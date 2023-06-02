import { motion } from "framer-motion";
import styled from "styled-components";

export const CardProduct = styled(motion.li)`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 2px solid var(--gray-20);
  align-items: center;
  border-radius: 0.3rem;
  background-color: white;
  gap: 1em;
`;

export const ButtonProducts = styled.button`
  color: var(--white);
  background-color: var(--color-primary);
  position: relative;
  bottom: 0%;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 0.5rem;

  :hover {
    transform: scale(0.95);
    background-color: var(--color-primary-50);
  }
`;

export const TextProduct = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 0 1em;

  .productPrice {
    color: var(--color-primary);
  }
`;

export const ImageProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 290px;
  height: 150px;
  background-color: var(--gray-0);
  padding: 1rem;

  img {
    width: 60%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ButtonDiv = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
`;
