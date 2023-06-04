import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderDiv = styled(motion.header)`
  display: flex;
  background-color: var(--white);
  flex-direction: column;
  width: calc(100vw);
  height: 150px;
  padding: 1rem;
  align-items: center;

  .spanLogo {
    color: red;
    font-size: 1.2rem;
  }

  h1 {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    height: 100px;

    h1 {
      margin-left: 115px;
    }
  }
`;

export const InteractionsDiv = styled(motion.div)`
  width: 100%;
  height: 100%;
  margin-right: 0px;
  align-items: center;
  display: flex;
  justify-content: flex-end;

  @media (min-width: 768px) {
    width: 50%;
    margin-right: 100px;
  }
`;
