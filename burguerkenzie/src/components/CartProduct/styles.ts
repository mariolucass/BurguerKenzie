import { bounceInRight } from "react-animations";
import styled, { keyframes } from "styled-components";

const bounceAnimation = keyframes`${bounceInRight}`;

export const ButtonRemove = styled.button`
  color: var(--gray-button);
  font-size: 12px;

  :hover {
    text-decoration: underline;
    color: var(--gray-100);
  }
`;

export const CartProductLi = styled.li`
  display: flex;
  justify-content: space-around;
  width: 90%;
  height: 50%;
  margin: 0 auto;
  animation: 1s ${bounceAnimation};
`;

export const TextCartProduct = styled.div`
  width: 40%;
  height: 100%;

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

export const ImageCartProduct = styled.div`
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
