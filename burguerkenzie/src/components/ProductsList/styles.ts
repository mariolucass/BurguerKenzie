import { motion } from "framer-motion";
import styled from "styled-components";

export const ProductList = styled(motion.ul)`
  height: 350px;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  overflow-x: auto;

  @media (max-width: 900px) {
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    flex-direction: row;
    margin-bottom: 20px;
    gap: 4em;
  }

  @media (min-width: 1023px) {
    height: 40%;
    margin-bottom: 100px;
    overflow-x: auto;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (min-width: 1280px) {
    width: 62.5%;
    flex-wrap: wrap;
    height: 40%;
    max-width: 1000px;
  }
`;
