import styled, { keyframes } from "styled-components";
import { bounceInRight, tada } from "react-animations";

const bounceAnimation = keyframes`${bounceInRight}`;
const tadaAnimation = keyframes`${tada}`;

export const DivCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 90%;
  animation: 1.5s ${bounceAnimation};
  max-width: 400px;

  @media (min-width: 1023px) {
    width: 30%;
    max-width: 400px;
    position: fixed;
    right: 115px;
    top: 15%;
  }

  .labelCart {
    display: flex;
    background-color: var(--color-primary);
    color: var(--white);
    height: 50px;
    align-items: center;
    padding-left: 1rem;
    border-radius: 5px 5px 0px 0px;
  }
`;

export const EmptyCardDiv = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: var(--gray-0);
  animation: 1s ${tadaAnimation};
`;
