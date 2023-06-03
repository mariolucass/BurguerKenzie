import { motion } from "framer-motion";
import styled from "styled-components";
interface ItemProps {
  backgroundColor: string;
}

export const ListMenu = styled(motion.ul)`
  margin-top: 1%;
  width: 50%;
  display: flex;
  justify-content: center;
  gap: 1em;

  @media (min-width: 1023px) {
    width: 62.5%;
    flex-wrap: wrap;
    height: 40%;
    max-width: 1000px;
  }
`;

export const ItemMenu = styled(motion.li)<ItemProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  padding-top: 0;
  border-radius: 16px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background: linear-gradient(
    180deg,
    ${(props) => props.backgroundColor} 50%,
    var(--white) 50%
  );

  :last-child .image {
    margin-top: 10px;
  }

  cursor: pointer;
`;
