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

export const LogoDiv = styled(motion.div)`
  display: flex;
  width: 100%;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: var(--gray-100);
  }

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

export const InteractionsIconsMobile = styled(motion.div)``;
