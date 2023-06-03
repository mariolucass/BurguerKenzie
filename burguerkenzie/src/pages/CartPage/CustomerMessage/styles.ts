import { motion } from "framer-motion";
import styled from "styled-components";

export const ListPayments = styled(motion.ul)`
  display: flex;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-between;

    li {
      width: 50%;
    }
  }
`;
