import { motion } from "framer-motion";
import styled from "styled-components";

export const AvatarDiv = styled(motion.div)`
  width: 168px;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  svg {
    filter: invert(57%) sepia(21%) saturate(1491%) hue-rotate(93deg)
      brightness(94%) contrast(81%);
  }
`;

export const ContentDiv = styled(motion.div)`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgb(39, 174, 96);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 50%,
    rgba(39, 174, 96, 1) 50%
  );
  padding: 1rem;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  border-bottom: 8px solid #1b7a58;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;

    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 48.5%,
      rgba(39, 174, 96, 1) 48.5%
    );
  }
`;

export const DataDiv = styled(motion.div)`
  width: 35%;
  min-height: 168px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
