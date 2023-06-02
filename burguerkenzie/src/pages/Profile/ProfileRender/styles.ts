import { motion } from "framer-motion";
import styled from "styled-components";

export const SvgDiv = styled(motion.div)`
  width: 256px;
  height: 256px;

  svg {
    filter: invert(57%) sepia(21%) saturate(1491%) hue-rotate(93deg)
      brightness(94%) contrast(81%);
  }
`;

export const DataDiv = styled(motion.div)`
  width: 35%;
  min-height: 248px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ContentDiv = styled(motion.div)`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
